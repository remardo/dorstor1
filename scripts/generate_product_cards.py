#!/usr/bin/env python3
import argparse
import csv
import json
import os
import re
import time
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple
from urllib.parse import quote, urlparse

import requests


ROOT = Path(__file__).resolve().parents[1]
INPUT_CSV = ROOT / "public" / "Остатки Доррен - Лист1 (1).csv"
OUTPUT_CSV = ROOT / "public" / "product_cards.csv"
OUTPUT_JSON = ROOT / "public" / "product_cards.json"

TAVILY_API_URL = "https://api.tavily.com/search"
DEFAULT_CACHE = ROOT / "public" / "tavily_image_cache.json"


BRANDS = [
    "ASSA ABLOY",
    "DORMAKABA",
    "SECUREMME",
    "ARMADILLO",
    "NOTEDO",
    "VANGER",
    "APECS",
    "ABLOY",
    "DORMA",
    "AVERS",
    "FUARO",
    "PALLADIUM",
    "RENZ",
    "GEZE",
    "CISA",
    "KALE",
    "PUNTO",
    "AJAX",
    "GUARDIAN",
    "PROTECTOR",
    "PHA",
]


CATEGORY_RULES = [
    ("доводчик", "Доводчики"),
    ("глазок", "Дверные глазки"),
    ("цилиндр", "Цилиндровые механизмы"),
    ("броненаклад", "Броненакладки"),
    ("ручк", "Дверные ручки"),
    ("замок", "Дверные замки"),
    ("защелк", "Защелки"),
    ("фиксатор", "Фиксаторы"),
    ("петл", "Дверные петли"),
    ("накладк", "Накладки"),
    ("антипан", "Антипаника"),
    ("шпингалет", "Шпингалеты"),
    ("девиатор", "Девиаторы"),
    ("привод", "Приводы двери"),
    ("стопор", "Ограничители"),
]


RU_TO_LAT = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "e",
    "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m",
    "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "h", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "sch",
    "ъ": "", "ы": "y", "ь": "", "э": "e", "ю": "yu", "я": "ya",
}


@dataclass
class ProductCard:
    id: int
    slug: str
    name: str
    category: str
    brand: str
    stock: int
    availability: str
    image_url: str
    image_search_url: str
    seo_title: str
    seo_description: str
    keywords: str


def normalize_name(raw: str) -> str:
    name = raw.strip().strip('"').strip()
    name = re.sub(r"\s+", " ", name)
    return name.rstrip(",; ")


def parse_stock(raw: str) -> int:
    raw = (raw or "").strip()
    digits = re.sub(r"[^0-9\-]", "", raw)
    if digits in {"", "-"}:
        return 0
    try:
        return int(digits)
    except ValueError:
        return 0


def detect_brand(name: str) -> str:
    upper = name.upper().replace("Ё", "Е")
    for brand in BRANDS:
        if brand in upper:
            return brand
    token_match = re.search(r"\b[A-Z]{3,}\b", upper)
    return token_match.group(0) if token_match else "Универсальный"


def detect_category(name: str) -> str:
    lowered = name.lower()
    for key, category in CATEGORY_RULES:
        if key in lowered:
            return category
    return "Дверная фурнитура"


def slugify(name: str, idx: int) -> str:
    text = name.lower()
    chars = []
    for ch in text:
        if ch in RU_TO_LAT:
            chars.append(RU_TO_LAT[ch])
        elif re.match(r"[a-z0-9]", ch):
            chars.append(ch)
        else:
            chars.append("-")
    slug = re.sub(r"-{2,}", "-", "".join(chars)).strip("-")
    if not slug:
        slug = f"tovar-{idx}"
    return f"{slug}-{idx}"


def crop(text: str, limit: int) -> str:
    if len(text) <= limit:
        return text
    trimmed = text[: limit - 1]
    if " " in trimmed:
        trimmed = trimmed.rsplit(" ", 1)[0]
    return trimmed + "…"


def build_keywords(name: str, category: str, brand: str) -> str:
    base = [
        name,
        category,
        f"{brand} фурнитура",
        "дверная фурнитура купить",
        "фурнитура для дверей",
    ]
    cleaned = []
    seen = set()
    for item in base:
        key = item.strip().lower()
        if key and key not in seen:
            seen.add(key)
            cleaned.append(item.strip())
    return ", ".join(cleaned)


def build_seo(name: str, category: str, brand: str, stock: int) -> Dict[str, str]:
    title = crop(f"{name} купить в наличии | Дорстор", 70)
    availability_part = (
        f"В наличии {stock} шт."
        if stock > 0
        else "Поставка под заказ, уточняйте срок."
    )
    desc = (
        f"{name} — {category.lower()} для входных и технических дверей. "
        f"{availability_part} Бренд: {brand}. Доставка по РФ и самовывоз."
    )
    return {
        "title": crop(title, 70),
        "description": crop(desc, 165),
    }


def read_products(path: Path) -> List[Dict[str, str]]:
    rows: List[Dict[str, str]] = []
    with path.open("r", encoding="utf-8-sig", newline="") as f:
        reader = csv.reader(f)
        for row in reader:
            if not row:
                continue
            name = row[0].strip() if len(row) > 0 else ""
            stock = row[1].strip() if len(row) > 1 else ""
            if not name:
                continue
            if name.strip().lower() == "остаток на начало месяца":
                continue
            rows.append({"name": name, "stock": stock})
    return rows


def extract_model_tokens(name: str) -> List[str]:
    tokens = re.findall(r"[A-Za-zА-Яа-я0-9./+-]+", name.upper())
    filtered = []
    for tok in tokens:
        clean = tok.strip(".-")
        if len(clean) < 3:
            continue
        has_digit = any(c.isdigit() for c in clean)
        has_alpha = any(c.isalpha() for c in clean)
        if has_digit and has_alpha:
            filtered.append(clean)
    return filtered[:6]


def build_queries(name: str, category: str, brand: str) -> List[str]:
    queries = [f"\"{name}\" фото товара"]
    models = extract_model_tokens(name)
    if models:
        queries.append(f"{brand} {' '.join(models[:3])} product image")
    queries.append(f"{name} {brand} {category} product photo")
    return queries


def score_image(image_url: str, description: str, tokens: List[str], brand: str) -> int:
    haystack = f"{image_url} {description}".lower()
    score = 0
    if brand and brand != "Универсальный" and brand.lower() in haystack:
        score += 4
    for tok in tokens:
        low = tok.lower()
        if low in haystack:
            score += 3 if any(c.isdigit() for c in tok) else 1
    return score


def match_source_url(image_url: str, results: List[Dict[str, str]]) -> str:
    img_host = urlparse(image_url).netloc
    for result in results:
        source = result.get("url", "")
        if source and urlparse(source).netloc == img_host:
            return source
    return results[0].get("url", "") if results else ""


def looks_specific_image(name: str, brand: str, image_url: str) -> bool:
    if not image_url:
        return False
    low_url = image_url.lower()
    model_tokens = extract_model_tokens(name)
    if any(tok.lower() in low_url for tok in model_tokens):
        return True
    if brand and brand != "Универсальный" and brand.lower() in low_url:
        return True
    return False


def fetch_og_image(session: requests.Session, source_url: str) -> str:
    if not source_url.startswith(("http://", "https://")):
        return ""
    try:
        response = session.get(source_url, timeout=20)
    except requests.RequestException:
        return ""
    if not response.ok:
        return ""

    html = response.text
    patterns = [
        r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']',
        r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']',
        r'<meta[^>]+name=["\']twitter:image["\'][^>]+content=["\']([^"\']+)["\']',
    ]
    for pattern in patterns:
        match = re.search(pattern, html, re.IGNORECASE)
        if match:
            candidate = match.group(1).strip()
            if candidate.startswith(("http://", "https://")):
                return candidate
    return ""


def tavily_search(
    session: requests.Session, api_key: str, query: str, max_retries: int = 3
) -> Optional[Dict]:
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    payload = {
        "query": query,
        "topic": "general",
        "search_depth": "basic",
        "max_results": 5,
        "include_images": True,
        "include_image_descriptions": True,
    }

    delay = 1.5
    for attempt in range(max_retries):
        try:
            response = session.post(
                TAVILY_API_URL, headers=headers, json=payload, timeout=45
            )
            if response.status_code == 429:
                time.sleep(delay)
                delay *= 2
                continue
            if not response.ok:
                return None
            return response.json()
        except requests.RequestException:
            if attempt == max_retries - 1:
                return None
            time.sleep(delay)
            delay *= 2
    return None


def pick_best_image(payload: Dict, name: str, brand: str) -> Tuple[str, str]:
    images = payload.get("images", []) or []
    results = payload.get("results", []) or []
    tokens = extract_model_tokens(name)
    tokens.extend([t for t in re.findall(r"[A-Za-zА-Яа-я0-9]+", name) if len(t) >= 4][:10])

    best_url = ""
    best_score = -1

    for item in images:
        if isinstance(item, str):
            image_url = item
            desc = ""
        else:
            image_url = item.get("url", "")
            desc = item.get("description", "")
        if not image_url.startswith(("http://", "https://")):
            continue
        score = score_image(image_url, desc, tokens, brand)
        if score > best_score:
            best_url = image_url
            best_score = score

    source_url = match_source_url(best_url, results) if best_url else ""
    if "yandex." in source_url.lower():
        source_url = best_url
    return best_url, source_url


def load_cache(path: Path) -> Dict[str, Dict[str, str]]:
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return {}


def save_cache(path: Path, cache: Dict[str, Dict[str, str]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")


def resolve_images(
    products: List[Dict[str, str]], api_key: str, cache_path: Path
) -> Dict[str, Dict[str, str]]:
    cache = load_cache(cache_path)
    session = requests.Session()
    resolved: Dict[str, Dict[str, str]] = {}

    for idx, row in enumerate(products, start=1):
        name = normalize_name(row["name"])
        if name in cache:
            resolved[name] = cache[name]
            continue

        brand = detect_brand(name)
        category = detect_category(name)
        best_image = ""
        best_source = ""

        for query in build_queries(name, category, brand):
            payload = tavily_search(session, api_key, query)
            if not payload:
                continue
            image_url, source_url = pick_best_image(payload, name, brand)
            if image_url:
                best_image = image_url
                best_source = source_url
                break

        if best_source and not looks_specific_image(name, brand, best_image):
            og_image = fetch_og_image(session, best_source)
            if og_image:
                best_image = og_image
        if "yandex." in best_source.lower():
            best_source = best_image

        cache[name] = {"image_url": best_image, "source_url": best_source}
        resolved[name] = cache[name]

        if idx % 25 == 0:
            save_cache(cache_path, cache)
            print(f"Processed {idx}/{len(products)}")

    save_cache(cache_path, cache)
    return resolved


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--api-key", default=os.getenv("TAVILY_API_KEY", ""))
    parser.add_argument("--cache-path", default=str(DEFAULT_CACHE))
    args = parser.parse_args()

    if not args.api_key:
        raise SystemExit(
            "Tavily API key is required. Pass --api-key or set TAVILY_API_KEY."
        )

    products = read_products(INPUT_CSV)
    images_map = resolve_images(products, args.api_key, Path(args.cache_path))

    cards: List[ProductCard] = []
    for idx, row in enumerate(products, start=1):
        name = normalize_name(row["name"])
        if not name:
            continue

        stock = parse_stock(row["stock"])
        category = detect_category(name)
        brand = detect_brand(name)
        slug = slugify(name, idx)
        seo = build_seo(name, category, brand, stock)
        image_info = images_map.get(name, {})
        image_url = image_info.get("image_url", "")
        source_url = image_info.get("source_url", "")

        card = ProductCard(
            id=idx,
            slug=slug,
            name=name,
            category=category,
            brand=brand,
            stock=stock,
            availability="in_stock" if stock > 0 else "out_of_stock",
            image_url=image_url,
            image_search_url=source_url,
            seo_title=seo["title"],
            seo_description=seo["description"],
            keywords=build_keywords(name, category, brand),
        )
        cards.append(card)

    OUTPUT_CSV.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT_CSV.open("w", encoding="utf-8", newline="") as f:
        fieldnames = list(asdict(cards[0]).keys()) if cards else []
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for card in cards:
            writer.writerow(asdict(card))

    with OUTPUT_JSON.open("w", encoding="utf-8") as f:
        json.dump([asdict(card) for card in cards], f, ensure_ascii=False, indent=2)

    with_images = sum(1 for c in cards if c.image_url)
    print(f"Cards generated: {len(cards)}")
    print(f"Cards with image URL: {with_images}")
    print(f"CSV: {OUTPUT_CSV}")
    print(f"JSON: {OUTPUT_JSON}")
    print(f"Cache: {Path(args.cache_path)}")


if __name__ == "__main__":
    main()
