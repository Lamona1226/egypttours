import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { TourCategory } from '@prisma/client'; // Import TourCategory

export const dynamic = 'force-dynamic'; // Force dynamic rendering

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    // Removed 'featured' as it's not used.

    const tours = await prisma.tour.findMany({
      where: {
        isActive: true,
        ...(category && category !== 'all'
          ? { category: category.toUpperCase() as TourCategory } // Cast to TourCategory
          : {}),
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ tours });
  } catch (error) {
    console.error('Tours API error:', error);
    return NextResponse.json({ error: 'Failed to fetch tours' }, { status: 500 });
  }
}
