import type {Metadata} from 'next';
import {MessageCircle, Mail, MapPin, Clock} from 'lucide-react';
import PageBanner from '@/components/shared/PageBanner';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Egypt Tour and Adventure',
  description: 'Get in touch for custom itineraries, questions, or booking support.',
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
    lines: ['info@egypttouradventure.com'],
    href: 'mailto:info@egypttouradventure.com',
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

export default function Page(): JSX.Element {
  return (
    <div className="pb-16">
      <section className="mb-8">
        <PageBanner
          title="Contact Egypt Tour and Adventure"
          subtitle="Send us a message and our team will help you plan the perfect Egypt trip"
        />
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <h2 className="text-2xl font-bold text-[#134645]">Send us a message</h2>
            <p className="mt-2 text-sm text-[#53685E]">
              Tell us a bit about your travel dates, group size and interests. We&apos;ll reply with
              suggested tours and a clear price breakdown.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <aside className="space-y-4 rounded-2xl border border-[#D2C6B8] bg-[#F5F0EC] p-6">
            <h3 className="text-lg font-bold text-[#134645]">Contact details</h3>
            <p className="text-sm text-[#53685E]">
              Prefer WhatsApp or email? Use any of the options below. We typically respond within 24
              hours.
            </p>

            <div className="mt-4 space-y-4">
              {cards.map(({icon: Icon, title, lines, href}) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#108E81]/10">
                    <Icon className="h-4 w-4 text-[#108E81]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#134645]">{title}</p>
                    {lines.map((line) =>
                      href ? (
                        <a
                          key={line}
                          href={href}
                          className="block text-sm text-[#108E81] hover:text-[#277971]"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line} className="text-sm text-[#53685E]">
                          {line}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

