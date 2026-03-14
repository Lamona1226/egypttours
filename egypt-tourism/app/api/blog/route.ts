import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic'; // Force dynamic rendering

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    const posts = await prisma.blogPost.findMany({
      where: {
        published: true,
        ...(category && category !== 'all' ? { tags: { has: category } } : {}),
      },
      orderBy: { publishedAt: 'desc' },
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Blog API error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
