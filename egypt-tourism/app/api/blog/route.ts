import { NextResponse } from 'next/server';
import { articles } from '@/lib/blogData';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ articles });
}
