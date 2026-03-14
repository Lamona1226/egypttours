import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic'; // Force dynamic rendering

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const pkg = await prisma.tourPackage.findUnique({
      where: { slug: params.slug },
    });

    if (!pkg) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 });
    }

    return NextResponse.json({ package: pkg });
  } catch (error) {
    console.error('Package detail API error:', error);
    return NextResponse.json({ error: 'Failed to fetch package' }, { status: 500 });
  }
}
