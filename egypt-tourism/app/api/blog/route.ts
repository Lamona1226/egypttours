import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json([{ id: '1', slug: 'first-post', title: 'Your First Egypt Journey' }]);
}
