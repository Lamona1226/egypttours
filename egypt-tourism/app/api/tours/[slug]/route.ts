import { NextRequest, NextResponse } from 'next/server';

interface Params {
  params: { slug: string };
}

export async function GET(_: NextRequest, { params }: Params): Promise<NextResponse> {
  return NextResponse.json({ id: '1', slug: params.slug, title: 'Sample Tour' });
}
