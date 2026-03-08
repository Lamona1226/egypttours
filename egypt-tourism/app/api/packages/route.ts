import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json([{ id: '1', slug: 'classic-egypt', title: 'Classic Egypt 7D' }]);
}
