'use client';

import { HeroSearch } from '@/components/hero-search';
import { PropertyCard } from '@/components/property-card';
import { FeatureSection } from '@/components/feature-section';
import { searchProperties } from '@/lib/api';
import { useState, useEffect } from 'react';
import { Property } from '@/lib/types';

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await searchProperties('Manhattan, New York, NY');
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <main>
      <HeroSearch />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Featured Properties</h2>
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, 6).map((property) => (
              <PropertyCard key={property.zpid} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {loading ? 'Loading properties...' : 'No featured properties available'}
            </p>
          </div>
        )}
      </div>

      <FeatureSection />
    </main>
  );
}