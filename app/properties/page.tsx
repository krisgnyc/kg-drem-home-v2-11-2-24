'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PropertyGrid } from '@/components/property-grid';
import { PropertyFilters } from '@/components/property-filters';
import { Property } from '@/lib/types';
import { searchProperties } from '@/lib/api';

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProperties = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const query = searchParams.get('q') || 'Manhattan, New York, NY';
        const type = searchParams.get('type') || 'all';
        const minPrice = searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined;
        const maxPrice = searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined;
        const beds = searchParams.get('beds') || undefined;
        const baths = searchParams.get('baths') || undefined;

        const data = await searchProperties(query, {
          type,
          minPrice,
          maxPrice,
          beds,
          baths
        });

        if (!data || data.length === 0) {
          setError('No properties found matching your criteria');
        }

        setProperties(data);
      } catch (err) {
        console.error('Error loading properties:', err);
        setError('Failed to load properties. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [searchParams]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Find Your Next Home</h1>
      <PropertyFilters />
      <PropertyGrid 
        properties={properties} 
        isLoading={loading}
        error={error}
      />
    </main>
  );
}