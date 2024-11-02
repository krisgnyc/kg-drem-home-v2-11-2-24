import { NextResponse } from 'next/server';
import { properties } from '@/lib/data';
import { Property } from '@/lib/types';

export async function GET() {
  try {
    // Use static data instead of dynamic API calls
    const staticProperties = properties;
    
    return NextResponse.json({ properties: staticProperties });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch properties', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}