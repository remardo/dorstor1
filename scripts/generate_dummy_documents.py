from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen.canvas import Canvas

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "document-placeholder.pdf"
PUBLIC = ROOT / "public" / "documents" / "document-placeholder.pdf"

for target in (OUTPUT, PUBLIC):
    target.parent.mkdir(parents=True, exist_ok=True)

pdfmetrics.registerFont(TTFont("Arial", "C:/Windows/Fonts/arial.ttf"))
pdfmetrics.registerFont(TTFont("ArialBold", "C:/Windows/Fonts/arialbd.ttf"))

for target in (OUTPUT, PUBLIC):
    canvas = Canvas(str(target), pagesize=A4)
    width, height = A4
    canvas.setFillColorRGB(0.06, 0.09, 0.14)
    canvas.rect(0, height - 120, width, 120, fill=1, stroke=0)
    canvas.setFillColorRGB(1, 1, 1)
    canvas.setFont("ArialBold", 24)
    canvas.drawString(48, height - 70, "DOORSTORE")
    canvas.setFont("Arial", 11)
    canvas.drawString(48, height - 94, "Шаблон документа для каталога")

    canvas.setFillColorRGB(0.9, 0.35, 0.05)
    canvas.setFont("ArialBold", 16)
    canvas.drawString(48, height - 170, "DUMMY - НЕ ПУБЛИКОВАТЬ КАК СЕРТИФИКАТ")
    canvas.setFillColorRGB(0.12, 0.16, 0.23)
    canvas.setFont("ArialBold", 18)
    canvas.drawString(48, height - 220, "Документ производителя")
    canvas.setFont("Arial", 12)
    lines = [
        "Тип документа: сертификат / декларация / инструкция",
        "Производитель: [загрузить данные]",
        "Модель или серия: [загрузить данные]",
        "Номер документа: [загрузить данные]",
        "Срок действия: [загрузить данные]",
        "Источник: [официальный документ производителя]",
    ]
    y = height - 265
    for line in lines:
        canvas.drawString(48, y, line)
        y -= 30
    canvas.setFillColorRGB(0.35, 0.4, 0.48)
    canvas.setFont("Arial", 9)
    canvas.drawString(48, 50, "Замените файл и данные перед снятием noindex со страницы документов.")
    canvas.save()
