import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json([{ id: '1', slug: 'giza-pyramids', title: 'Giza Pyramids Tour' }]);
}
