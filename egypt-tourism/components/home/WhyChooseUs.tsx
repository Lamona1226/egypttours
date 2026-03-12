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
    <section className="bg-[#F5F0EC] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-[#134645]">Why Choose Us</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-[#53685E]">
          Trusted by travelers from over 50 countries
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
      </div>
    </section>
  );
}
