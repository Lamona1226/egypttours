'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MessageCircle } from 'lucide-react';

const bookingSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Phone number must be at least 7 digits'),
  whatsapp: z.string().min(7, 'WhatsApp number must be at least 7 digits'),
  travelDate: z.string().min(1, 'Please select a travel date'),
  partySize: z.coerce.number().min(1, 'At least 1 person required').max(50, 'Maximum 50 people'),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      customerName: '',
      email: '',
      phone: '',
      whatsapp: '',
      travelDate: '',
      partySize: 1,
      specialRequests: '',
    },
  });

  function onSubmit(data: BookingFormData) {
    const message = [
      'Hello! I would like to book a tour.',
      `Name: ${data.customerName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Travel Date: ${data.travelDate}`,
      `Number of People: ${data.partySize}`,
      `Special Requests: ${data.specialRequests || 'None'}`,
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
        <h3 className="mt-4 text-xl font-bold text-green-800">Booking Sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          Your booking request has been opened in WhatsApp. We&apos;ll confirm your
          reservation shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-green-700 underline hover:text-green-900"
        >
          Submit another booking
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <Field label="Full Name" error={errors.customerName?.message}>
        <input
          {...register('customerName')}
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
          placeholder="John Smith"
        />
      </Field>

      <Field label="Email Address" error={errors.email?.message}>
        <input
          {...register('email')}
          type="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
          placeholder="you@example.com"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Number" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
            placeholder="+1 234 567 8900"
          />
        </Field>

        <Field label="WhatsApp Number (with country code)" error={errors.whatsapp?.message}>
          <input
            {...register('whatsapp')}
            type="tel"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
            placeholder="+20 100 000 0000"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Travel Date" error={errors.travelDate?.message}>
          <input
            {...register('travelDate')}
            type="date"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
          />
        </Field>

        <Field label="Number of People" error={errors.partySize?.message}>
          <input
            {...register('partySize')}
            type="number"
            min={1}
            max={50}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
          />
        </Field>
      </div>

      <Field label="Special Requests" error={errors.specialRequests?.message}>
        <textarea
          {...register('specialRequests')}
          rows={3}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C]"
          placeholder="Dietary needs, mobility requirements, etc."
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        <MessageCircle className="h-5 w-5" />
        Confirm via WhatsApp
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
      <label className="mb-1.5 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
