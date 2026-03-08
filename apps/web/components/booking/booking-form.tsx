'use client';

import { useState } from 'react';
import {
  bookingFormSchema,
  buildWhatsAppBookingLink,
  type BookingFormInput
} from './booking-form.schema';

type ErrorMap = Partial<Record<keyof BookingFormInput, string>>;

interface BookingFormProps {
  tourSlug: string;
  whatsappNumber?: string;
}

const defaultWhatsappNumber = '201234567890';

export function BookingForm({
  tourSlug,
  whatsappNumber = defaultWhatsappNumber
}: BookingFormProps) {
  const [errors, setErrors] = useState<ErrorMap>({});

  function handleSubmit(formData: FormData) {
    const rawValues: BookingFormInput = {
      fullName: String(formData.get('fullName') ?? ''),
      email: String(formData.get('email') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      travelDate: String(formData.get('travelDate') ?? ''),
      guests: String(formData.get('guests') ?? ''),
      message: String(formData.get('message') ?? ''),
      tourSlug
    };

    const result = bookingFormSchema.safeParse(rawValues);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        fullName: fieldErrors.fullName?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        travelDate: fieldErrors.travelDate?.[0],
        guests: fieldErrors.guests?.[0],
        message: fieldErrors.message?.[0],
        tourSlug: fieldErrors.tourSlug?.[0]
      });

      return;
    }

    setErrors({});

    const deepLink = buildWhatsAppBookingLink(result.data, whatsappNumber);
    window.open(deepLink, '_blank', 'noopener,noreferrer');
  }

  return (
    <section className="rounded-xl border border-sand-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Book this tour on WhatsApp</h2>
      <p className="mt-2 text-sm text-slate-600">
        Fill in your details and we&apos;ll open WhatsApp with a pre-filled booking message.
      </p>

      <form action={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="fullName">
            Full name
          </label>
          <input className="w-full rounded-md border px-3 py-2" id="fullName" name="fullName" />
          {errors.fullName ? <p className="mt-1 text-sm text-red-600">{errors.fullName}</p> : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input className="w-full rounded-md border px-3 py-2" id="email" name="email" type="email" />
          {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="phone">
            Phone
          </label>
          <input className="w-full rounded-md border px-3 py-2" id="phone" name="phone" />
          {errors.phone ? <p className="mt-1 text-sm text-red-600">{errors.phone}</p> : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="travelDate">
            Travel date
          </label>
          <input className="w-full rounded-md border px-3 py-2" id="travelDate" name="travelDate" type="date" />
          {errors.travelDate ? <p className="mt-1 text-sm text-red-600">{errors.travelDate}</p> : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="guests">
            Number of guests
          </label>
          <input
            className="w-full rounded-md border px-3 py-2"
            defaultValue={1}
            id="guests"
            min={1}
            name="guests"
            type="number"
          />
          {errors.guests ? <p className="mt-1 text-sm text-red-600">{errors.guests}</p> : null}
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="message">
            Extra message (optional)
          </label>
          <textarea className="w-full rounded-md border px-3 py-2" id="message" name="message" rows={4} />
          {errors.message ? <p className="mt-1 text-sm text-red-600">{errors.message}</p> : null}
        </div>

        <button className="w-full rounded-md bg-emerald-600 px-4 py-2 font-medium text-white" type="submit">
          Continue on WhatsApp
        </button>
      </form>
    </section>
  );
}
