import PageBanner from '@/components/shared/PageBanner';
import { CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Egypt Visa Information 2025 | Egypt Tour and Adventure',
  description: 'Complete guide to Egypt visa requirements — e-visa, visa on arrival, and visa-free entry.',
};

const VISA_TYPES = [
  {
    title: 'E-Visa (Recommended)',
    badge: 'Recommended',
    badgeBg: '#108E81',
    cost: '$25 USD',
    validity: '30 days, single entry',
    processing: '3–5 business days',
    description: 'Apply online at visa2egypt.gov.eg before your trip. Receive a PDF confirmation by email — no queuing at the bank counter on arrival.',
    steps: [
      'Visit visa2egypt.gov.eg',
      'Complete the online application form',
      'Pay $25 USD by card online',
      'Receive PDF approval by email',
      'Print and present at immigration',
    ],
  },
  {
    title: 'Visa on Arrival',
    badge: 'Available at Airport',
    badgeBg: '#277971',
    cost: '$25 USD cash',
    validity: '30 days, single entry',
    processing: '10–30 min at airport',
    description: 'Available at Cairo, Hurghada, and Sharm El-Sheikh airports. Pay at the bank counter before the immigration queue.',
    steps: [
      'Arrive at Cairo / Hurghada / Sharm airport',
      'Go to the bank counter in arrivals',
      'Pay $25 USD in cash',
      'Receive visa sticker in your passport',
      'Proceed to the immigration queue',
    ],
  },
  {
    title: 'Visa-Free Entry',
    badge: 'Select Countries Only',
    badgeBg: '#53685E',
    cost: 'Free',
    validity: 'Varies by nationality',
    processing: 'No application needed',
    description: 'Citizens of Jordan, Malaysia, and several Arab League countries may enter without a visa. Always verify with your embassy before travelling.',
    steps: [
      'Confirm your country is eligible',
      'Ensure passport valid 6+ months',
      'Have return ticket and hotel booking',
      'Arrive and proceed to immigration',
    ],
  },
];

const REQUIREMENTS = [
  'Passport valid for at least 6 months beyond your entry date',
  'Return or onward flight ticket',
  'Proof of accommodation (hotel booking confirmation)',
  '$25 USD cash if applying for visa on arrival',
  'Completed arrival card (provided on the plane)',
  'Travel insurance (strongly recommended)',
];

export default function VisaInfoPage() {
  const wa = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? ''}`;

  return (
    <div className="bg-[#F5F0EC] min-h-screen">
      <PageBanner
        title="Egypt Visa Information"
        subtitle="Everything you need to know about entering Egypt in 2025"
      />

      {/* Visa type cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#134645] text-center mb-8">
          Choose Your Visa Type
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VISA_TYPES.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-[#D2C6B8] overflow-hidden
                         shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-[#134645] p-5">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full text-white mb-3 inline-block"
                  style={{ backgroundColor: v.badgeBg }}
                >
                  {v.badge}
                </span>
                <h3 className="text-white font-bold text-lg">{v.title}</h3>
                <p className="text-[#BBA27E] font-bold text-2xl mt-1">{v.cost}</p>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                  <div className="bg-[#F5F0EC] rounded-lg p-3">
                    <p className="text-[#96A69E]">Validity</p>
                    <p className="text-[#134645] font-semibold mt-1">{v.validity}</p>
                  </div>
                  <div className="bg-[#F5F0EC] rounded-lg p-3">
                    <p className="text-[#96A69E]">Processing</p>
                    <p className="text-[#134645] font-semibold mt-1">{v.processing}</p>
                  </div>
                </div>
                <p className="text-[#53685E] text-sm leading-relaxed mb-4">
                  {v.description}
                </p>
                <p className="text-xs font-bold text-[#134645] uppercase tracking-wider mb-2">
                  Steps
                </p>
                <ol className="space-y-1">
                  {v.steps.map((step, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#53685E]">
                      <span
                        className="w-4 h-4 rounded-full bg-[#108E81] text-white flex items-center
                                   justify-center flex-shrink-0 text-[10px] font-bold mt-0.5"
                      >
                        {j + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-white border-y border-[#D2C6B8] py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#134645] mb-6">General Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {REQUIREMENTS.map((req, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#F5F0EC] rounded-xl p-4">
                <CheckCircle2 className="h-5 w-5 text-[#108E81] flex-shrink-0 mt-0.5" />
                <p className="text-[#53685E] text-sm">{req}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 mt-6 bg-[#BBA27E]/20 rounded-xl p-4
                          border border-[#BBA27E]/40">
            <AlertCircle className="h-5 w-5 text-[#BBA27E] flex-shrink-0 mt-0.5" />
            <p className="text-[#53685E] text-sm">
              Visa rules change. Always verify current requirements with your country&apos;s
              Egyptian embassy before travel.
            </p>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#134645] mb-3">Need Help With Your Visa?</h2>
        <p className="text-[#53685E] mb-6">
          Our team guides you through the e-visa application step by step on WhatsApp.
        </p>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white
                     font-bold px-8 py-3 rounded-xl hover:bg-[#20B85A] transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          Get Visa Help on WhatsApp
        </a>
      </section>
    </div>
  );
}