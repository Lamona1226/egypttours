import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const bookingSchema = z.object({
  tourId:          z.string().optional(),
  packageId:       z.string().optional(),
  customerName:    z.string().min(2),
  email:           z.string().email(),
  phone:           z.string().min(7),
  whatsapp:        z.string().min(7),
  travelDate:      z.string(),
  partySize:       z.number().min(1).max(50),
  specialRequests: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = bookingSchema.parse(body);

    const booking = await prisma.booking.create({
      data: {
        ...data,
        travelDate: new Date(data.travelDate),
        status: 'PENDING',
      },
    });

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
      message: 'Booking received successfully',
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    console.error('Booking API error:', error);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}
