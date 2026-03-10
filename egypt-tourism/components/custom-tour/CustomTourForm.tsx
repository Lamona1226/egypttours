'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageCircle } from 'lucide-react';

const destinations = [
  'Cairo',
  'Luxor',
  'Aswan',
  'Alexandria',
  'Hurghada',
  'Siwa',
  'Dahab',
  'Abu Simbel',
] as const;

const tourTypes = [
  'Historical',
  'Adventure',
  'Cultural',
  'Desert Safari',
  'Nile Cruise',
  'Beach & Diving',
] as const;

const budgetOptions = [
  'Under $500',
  '$500 - $1000',
  '$1000 - $2000',
  '$2000+',
] as const;

const schema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  whatsapp: z.string().min(7, 'WhatsApp number must be at least 7 digits'),
  dateFrom: z.string().min(1, 'Please select a start date'),
  dateTo: z.string().min(1, 'Please select an end date'),
  people: z.coerce.number().min(1, 'At least 1 person required'),
  budget: z.string().min(1, 'Please select a budget range'),
  destinations: z.array(z.string()).min(1, 'Select at least one destination'),
  tourTypes: z.array(z.string()).min(1, 'Select at least one tour type'),
  specialRequirements: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function CustomTourForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      whatsapp: '',
      dateFrom: '',
      dateTo: '',
      people: 1,
      budget: '',
      destinations: [],
      tourTypes: [],
      specialRequirements: '',
    },
  });

  function onSubmit(data: FormData) {
    const message = [
      'Hello! I would like to create a custom trip.',
      '',
      `Name: ${data.fullName}`,
      `Email: ${data.email}`,
      `WhatsApp: ${data.whatsapp}`,
      `Travel Dates: ${data.dateFrom} to ${data.dateTo}`,
      `Number of People: ${data.people}`,
      `Budget per Person: ${data.budget}`,
      `Destinations: ${data.destinations.join(', ')}`,
      `Tour Types: ${data.tourTypes.join(', ')}`,
      `Special Requirements: ${data.specialRequirements || 'None'}`,
    ].join('\n');

    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '201XXXXXXXXX';
    const url = `https://wa.me/${number.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <MessageCircle className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-bold text-green-800">Request Sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          Your custom trip request has been opened in WhatsApp. We&apos;ll craft your
          perfect itinerary and reply shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-green-700 underline hover:text-green-900"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Name / Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input {...register('fullName')} className={inputClass} placeholder="John Smith" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register('email')} type="email" className={inputClass} placeholder="you@example.com" />
        </Field>
      </div>

      {/* WhatsApp / People */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="WhatsApp Number (with country code)" error={errors.whatsapp?.message}>
          <input {...register('whatsapp')} type="tel" className={inputClass} placeholder="+20 100 000 0000" />
        </Field>
        <Field label="Number of People" error={errors.people?.message}>
          <input {...register('people')} type="number" min={1} className={inputClass} />
        </Field>
      </div>

      {/* Dates */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Travel Date — From" error={errors.dateFrom?.message}>
          <input {...register('dateFrom')} type="date" className={inputClass} />
        </Field>
        <Field label="Travel Date — To" error={errors.dateTo?.message}>
          <input {...register('dateTo')} type="date" className={inputClass} />
        </Field>
      </div>

      {/* Budget */}
      <Field label="Budget per Person (USD)" error={errors.budget?.message}>
        <select {...register('budget')} className={inputClass}>
          <option value="">Select a budget range</option>
          {budgetOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </Field>

      {/* Destinations */}
      <Field label="Destinations of Interest" error={errors.destinations?.message}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {destinations.map((dest) => (
            <label key={dest} className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                value={dest}
                {...register('destinations')}
                className="h-4 w-4 rounded border-gray-300 text-[#C9A84C] accent-[#C9A84C]"
              />
              {dest}
            </label>
          ))}
        </div>
      </Field>

      {/* Tour Types */}
      <Field label="Tour Type" error={errors.tourTypes?.message}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {tourTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                value={type}
                {...register('tourTypes')}
                className="h-4 w-4 rounded border-gray-300 text-[#C9A84C] accent-[#C9A84C]"
              />
              {type}
            </label>
          ))}
        </div>
      </Field>

      {/* Special Requirements */}
      <Field label="Special Requirements" error={errors.specialRequirements?.message}>
        <textarea
          {...register('specialRequirements')}
          rows={4}
          className={`${inputClass} resize-none`}
          placeholder="Dietary needs, accessibility requirements, specific interests..."
        />
      </Field>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <MessageCircle className="h-5 w-5" />
        Send via WhatsApp
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-700">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
