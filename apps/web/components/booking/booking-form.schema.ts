import { z } from 'zod';

export const bookingFormSchema = z.object({
  fullName: z.string().trim().min(2, 'Please enter your full name.'),
  email: z.string().trim().email('Please enter a valid email address.'),
  phone: z.string().trim().min(8, 'Please enter a valid phone number.'),
  travelDate: z
    .string()
    .min(1, 'Please select a travel date.')
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: 'Please select a valid date.'
    }),
  guests: z.coerce.number().int().min(1, 'At least 1 guest is required.').max(20, 'Maximum 20 guests.'),
  message: z.string().trim().max(500, 'Message must be 500 characters or less.').optional(),
  tourSlug: z.string().trim().min(1, 'Tour identifier is required.')
});

export type BookingFormInput = z.input<typeof bookingFormSchema>;
export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export function buildWhatsAppBookingLink(values: BookingFormValues, phoneNumber: string) {
  const text = [
    'Hello Egypt Tours, I would like to book this tour:',
    `Tour: ${values.tourSlug}`,
    `Name: ${values.fullName}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `Travel Date: ${values.travelDate}`,
    `Guests: ${values.guests}`,
    values.message ? `Message: ${values.message}` : null
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
}
