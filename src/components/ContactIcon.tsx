import { Mail, Phone } from 'lucide-react';
import { site } from '../data/site';

// Renders the icon matching whatever `site.contact` currently is (phone or email),
// so flipping `detailsAreDummy` does not leave phone icons next to an email address.
export function ContactIcon({ className }: { className?: string }) {
  const Icon = site.contact.isPhone ? Phone : Mail;
  return <Icon className={className} aria-hidden="true" />;
}

export const CONTACT_CTA = site.contact.isPhone ? 'Позвонить' : 'Написать менеджеру';
