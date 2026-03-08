import { NextRequest, NextResponse } from 'next/server';
import { bookingSchema } from '@/lib/validations';

export async function POST(request: NextRequest): Promise<NextResponse> {
  const json = await request.json();
  const parsed = bookingSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  return NextResponse.json({ success: true, data: parsed.data }, { status: 201 });
}
