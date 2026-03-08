'use client';

import { useState } from 'react';
import { z } from 'zod';
import { bookingSchema } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import WhatsAppButton from './WhatsAppButton';

interface BookingFormProps {}

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingForm({}: BookingFormProps): JSX.Element {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState('');

  const onSubmit = (formData: FormData): void => {
    const raw = Object.fromEntries(formData.entries());
    const result = bookingSchema.safeParse(raw);
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        nextErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }
    const data = result.data as BookingFormData;
    setErrors({});
    setMessage(`Hello, I want to book a tour. Name: ${data.customerName}, Date: ${data.travelDate}, Party: ${data.partySize}`);
  };

  return (
    <form action={onSubmit} className="space-y-3 rounded-md border p-4">
      <Input name="customerName" placeholder="Full name" />
      {errors.customerName && <p className="text-xs text-red-600">{errors.customerName}</p>}
      <Input name="email" type="email" placeholder="Email" />
      <Input name="phone" placeholder="Phone" />
      <Input name="whatsapp" placeholder="WhatsApp" />
      <Input name="travelDate" type="date" />
      <Input name="partySize" type="number" min={1} />
      <Textarea name="specialRequests" placeholder="Special requests" />
      <Button type="submit">Validate booking</Button>
      {message && <WhatsAppButton message={message} />}
    </form>
  );
}
