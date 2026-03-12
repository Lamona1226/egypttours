import { Metadata } from 'next';
import { MapPin, Users, Shield, Banknote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Egypt Tour and Adventure',
  description: 'Learn about Egypt Tour and Adventure — a Cairo-based family-run tour company established in 2005.',
};

const stats = [
  { value: '500+', label: 'Tours Completed' },
  { value: '2000+', label: 'Happy Tourists' },
  { value: '15+', label: 'Years Experience' },
  { value: '20+', label: 'Destinations' },
];

const features = [
  {
    icon: MapPin,
    title: 'Born in Cairo',
    description: 'Our team is local. We know every hidden gem, shortcut, and sunset spot across Egypt.',
  },
  {
    icon: Users,
    title: 'Small & Personal',
    description: 'Maximum 12 guests per tour ensures a personal, memorable experience every time.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed by the Egyptian Ministry of Tourism with comprehensive traveler insurance.',
  },
  {
    icon: Banknote,
    title: 'Pay on Arrival',
    description: 'No upfront online payments. Pay your guide in cash when you arrive in Egypt.',
  },
];

export default function Page() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-slate-800 py-20 text-center text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold sm:text-5xl">About Egypt Tour and Adventure</h1>
          <p className="mt-4 text-lg text-[#D2C6B8]">
            A family-run tour company sharing the magic of Egypt since 2005
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-[#134645]">Our Story</h2>
        <div className="mt-8 space-y-5 leading-relaxed text-[#53685E]">
          <p>
            Egypt Tour and Adventure was founded in 2005 by a Cairo-based family with a deep passion for
            sharing the wonders of their homeland. What started as small guided visits to the
            Pyramids of Giza has grown into one of Egypt&apos;s most trusted tour operators,
            serving thousands of travelers from over 50 countries every year.
          </p>
          <p>
            For more than 15 years, our team of licensed Egyptologist guides has been
            crafting unforgettable experiences — from the temples of Luxor and the Red Sea
            reefs to the remote dunes of the White Desert. We believe travel should be
            personal, affordable, and stress-free, which is why we keep our groups small and
            let you pay in cash when you arrive. No deposits, no hidden fees — just honest
            Egyptian hospitality.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#F5F0EC] py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border-2 border-[#BBA27E] bg-[#BBA27E] p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#134645]">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-[#134645]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-[#134645]">Why Choose Us</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[#53685E]">
          Here&apos;s what sets us apart from the rest
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-[#D2C6B8] bg-[#BBA27E] p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#108E81]/10"
              >
                <Icon className="h-6 w-6 text-[#108E81]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#134645]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#134645]">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
