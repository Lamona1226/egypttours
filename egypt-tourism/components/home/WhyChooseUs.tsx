import { MapPin, Users, Shield, Banknote } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Local Egyptian Experts',
    description: 'Our guides are born and raised in Egypt, sharing authentic knowledge passed down through generations.',
  },
  {
    icon: Users,
    title: 'Small Groups',
    description: 'Maximum 12 people per tour for a personal, intimate experience at every destination.',
  },
  {
    icon: Shield,
    title: 'Safe & Trusted Since 2005',
    description: 'Nearly two decades of five-star service with thousands of happy travelers worldwide.',
  },
  {
    icon: Banknote,
    title: 'Pay Cash on Arrival',
    description: 'No online payment required. Simply pay your guide in cash when you arrive in Egypt.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-gray-900">Why Choose Us</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-gray-500">
          Trusted by travelers from over 50 countries
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(201,168,76,0.1)' }}
              >
                <Icon className="h-6 w-6 text-[#C9A84C]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
