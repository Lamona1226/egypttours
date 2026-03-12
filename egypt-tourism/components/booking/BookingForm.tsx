'use client';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {MessageCircle} from 'lucide-react';
import {useTranslations} from 'next-intl';

const bookingSchema = z.object({
  customerName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Phone number must be at least 7 digits'),
  whatsapp: z.string().min(7, 'WhatsApp number must be at least 7 digits'),
  travelDate: z.string().min(1, 'Please select a travel date').refine((date) => {
    const selected = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selected >= today;
  }, { message: 'Travel date must be in the future' }),
  partySize: z.coerce.number().min(1, 'At least 1 person required').max(50, 'Maximum 50 people'),
  specialRequests: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  tourTitle?: string;
  tourPrice?: number;
  packageTitle?: string;
}

export default function BookingForm({tourTitle, tourPrice, packageTitle}: BookingFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations('booking');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
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
      `Hello! I would like to book: ${tourTitle || packageTitle || 'a tour'}`,
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
      <div className="rounded-xl border border-[#277971] bg-[#277971]/10 p-8 text-center">
        <MessageCircle className="mx-auto h-12 w-12 text-[#277971]" />
        <h3 className="mt-4 text-xl font-bold text-[#277971]">{t('success_title')}</h3>
        <p className="mt-2 text-sm text-[#277971]">
          {t('success_message')}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-[#277971] underline hover:text-[#134645]"
        >
          Submit another booking
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-xl border border-[#96A69E] bg-[#BBA27E] p-6 shadow-sm"
    >
      {(tourTitle || packageTitle) && (
        <div className="mb-5 rounded-lg border border-[#D2C6B8] bg-[#F5F0EC] p-4">
          <p className="text-sm font-semibold text-gray-800">{t('title')}</p>
          <p className="text-base font-bold text-[#BBA27E]">{tourTitle || packageTitle}</p>
          {tourPrice && <p className="text-sm text-gray-600">From ${tourPrice} per person</p>}
        </div>
      )}

      {isSubmitted && Object.keys(errors).length > 0 && (
        <div role="alert" className="rounded-lg bg-red-50 border border-red-200 p-3 mb-4">
          <p className="text-sm font-semibold text-red-700">Please fix the following:</p>
          <ul className="mt-1 list-disc list-inside text-xs text-red-600">
            {Object.values(errors).map((err, i) => <li key={i}>{err?.message}</li>)}
          </ul>
        </div>
      )}

      <Field label={t('name')} error={errors.customerName?.message}>
        <input
          {...register('customerName')}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#108E81] focus:ring-1 focus:ring-[#108E81]/20"
          placeholder={t('name_placeholder')}
        />
      </Field>

      <Field label={t('email')} error={errors.email?.message}>
        <input
          {...register('email')}
          type="email"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#108E81] focus:ring-1 focus:ring-[#108E81]/20"
          placeholder={t('email_placeholder')}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t('phone')} error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#108E81] focus:ring-1 focus:ring-[#108E81]/20"
            placeholder="+1 234 567 8900"
          />
        </Field>

        <Field label={t('whatsapp')} error={errors.whatsapp?.message}>
          <input
            {...register('whatsapp')}
            type="tel"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#108E81] focus:ring-1 focus:ring-[#108E81]/20"
            placeholder="+20 100 000 0000"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t('date')} error={errors.travelDate?.message}>
          <input
            {...register('travelDate')}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#108E81] focus:ring-1 focus:ring-[#108E81]/20"
          />
        </Field>

        <Field label={t('party_size')} error={errors.partySize?.message}>
          <input
            {...register('partySize')}
            type="number"
            min={1}
            max={50}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#108E81] focus:ring-1 focus:ring-[#108E81]/20"
          />
        </Field>
      </div>

      <Field label={t('requests')} error={errors.specialRequests?.message}>
        <textarea
          {...register('specialRequests')}
          rows={3}
          maxLength={500}
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#108E81] focus:ring-1 focus:ring-[#108E81]/20"
          placeholder={t('requests_placeholder')}
        />
        <p className="mt-1 text-xs text-[#134645]">
          {500 - (watch('specialRequests')?.length ?? 0)} characters remaining
        </p>
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        <MessageCircle className="h-5 w-5" />
        {t('submit')}
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
      <label className="mb-1.5 block text-sm font-medium text-[#134645]">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
