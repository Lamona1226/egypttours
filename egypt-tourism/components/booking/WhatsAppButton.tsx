import Link from 'next/link';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  message: string;
}

export default function WhatsAppButton({ message }: WhatsAppButtonProps): JSX.Element {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '201XXXXXXXXX';
  const url = buildWhatsAppUrl(number, message);
  return (
    <Link href={url} target="_blank" className="inline-flex rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white">
      Continue on WhatsApp
    </Link>
  );
}
