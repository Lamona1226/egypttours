import { Metadata } from 'next';
import FaqAccordion from '@/components/faq/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ | Egypt Tours',
  description: 'Frequently asked questions about booking tours, payments, and traveling in Egypt.',
};

const faqs = [
  {
    question: 'How do I pay for my tour?',
    answer:
      'We operate on a pay-on-arrival basis. You pay your tour guide directly in cash when you arrive in Egypt. No online payment or deposit is required to confirm your booking.',
  },
  {
    question: 'How will I receive my booking confirmation?',
    answer:
      'After submitting your booking request via WhatsApp, our team will reply within a few hours with a detailed confirmation message including your pickup time, guide name, and itinerary.',
  },
  {
    question: 'When is the best time to visit Egypt?',
    answer:
      'The best time to visit is from October to April when temperatures are pleasant (20–25°C). Summer months (June–August) are very hot, especially in Upper Egypt, but prices are lower and sites are less crowded.',
  },
  {
    question: 'Are tours suitable for children?',
    answer:
      'Yes! Most of our tours are family-friendly. Children under 6 often receive discounted or free entry to archaeological sites. Let us know the ages of your children when booking so we can tailor the experience.',
  },
  {
    question: 'Is there a dress code for visiting temples and mosques?',
    answer:
      'For mosques, shoulders and knees should be covered for both men and women. Temples and archaeological sites have no strict dress code, but comfortable clothing, sunscreen, and a hat are highly recommended.',
  },
  {
    question: 'Do you offer hotel pickup and drop-off?',
    answer:
      'Yes, most tours include complimentary hotel pickup and drop-off within the city where the tour operates (Cairo, Luxor, Aswan, Hurghada). Exact pickup times are confirmed after booking.',
  },
  {
    question: 'What is the maximum group size?',
    answer:
      'We keep our groups small — a maximum of 12 people per tour. This ensures a personal experience and allows our guides to give everyone individual attention.',
  },
  {
    question: 'Can I customize or create a private tour?',
    answer:
      'Absolutely. We offer fully customizable private tours for individuals, couples, and groups. Contact us via WhatsApp with your preferences and we will create a personalized itinerary at no extra planning fee.',
  },
  {
    question: 'What cash currencies do you accept?',
    answer:
      'We accept Egyptian Pounds (EGP), US Dollars (USD), and Euros (EUR). Your guide can provide change in Egyptian Pounds if needed.',
  },
  {
    question: 'Is it safe to travel in Egypt?',
    answer:
      'Egypt is a popular and safe tourist destination. Tourist areas are well-monitored and our licensed guides are trained in safety protocols. We also carry comprehensive traveler insurance for additional peace of mind.',
  },
];

export default function Page() {
  return (
    <div>
      {/* Banner */}
      <section className="bg-slate-800 py-16 text-center text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-3 text-lg text-gray-300">
            Everything you need to know before your trip
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        <FaqAccordion items={faqs} />
      </section>
    </div>
  );
}
