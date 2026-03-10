import { Metadata } from 'next';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Egypt Tours',
  description: 'Get in touch with Egypt Tours for custom itineraries, questions, or support.',
};

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '+20 100 000 0000';

const cards = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    lines: [whatsapp],
    href: `https://wa.me/${whatsapp.replace(/\D/g, '')}`,
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@egypttours.com'],
    href: 'mailto:info@egypttours.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['Cairo, Egypt'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Sun – Thu: 9 AM – 6 PM', 'Fri – Sat: 10 AM – 4 PM'],
  },
];

export default function Page() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-slate-800 py-16 text-center text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-lg text-gray-300">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-5">
        {/* Left — Contact Form */}
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
          <p className="mt-2 text-sm text-gray-500">
            Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        {/* Right — Info Cards */}
        <div className="space-y-4 lg:col-span-2">
          {cards.map(({ icon: Icon, title, lines, href }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: 'rgba(201,168,76,0.1)' }}
                >
                  <Icon className="h-5 w-5 text-[#C9A84C]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                  {lines.map((line) =>
                    href ? (
                      <a
                        key={line}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-sm text-gray-600 transition-colors hover:text-[#C9A84C]"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="mt-1 text-sm text-gray-600">
                        {line}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
