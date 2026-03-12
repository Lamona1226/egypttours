'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppChatBubble() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '201XXXXXXXXX';
  const url = `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hello! I have a question about your Egypt tours.'
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-8 left-8 z-50"
    >
      {/* Ping animation ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#108E81] opacity-40" />

      {/* Button */}
      <span className="relative flex items-center justify-center rounded-full bg-[#108E81] p-3 shadow-xl transition-colors hover:bg-[#134645]">
        <MessageCircle className="h-6 w-6 text-white" />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-1.5 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
