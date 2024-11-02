/**
 * PropertyGrid Component
 * 
 * Manages the display of multiple property cards in a responsive grid layout.
 * Handles loading states, errors, and empty results gracefully.
 */

'use client';

import { useEffect, useState } from 'react';
import { Property } from '@/lib/types';
import { PropertyCard } from '@/components/property-card';
import { Loader2 } from 'lucide-react';

interface PropertyGridProps {
  properties: Property[];
  isLoading?: boolean;
  error?: string | null;
}

export function PropertyGrid({ properties, isLoading, error }: PropertyGridProps) {
  // Loading State
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2 text-red-600">Error loading properties</h3>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    );
  }

  // Empty Results State
  if (!properties || properties.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2">No properties found</h3>
        <p className="text-sm text-muted-foreground">
          Try adjusting your search criteria or explore different neighborhoods
        </p>
      </div>
    );
  }

  // Property Grid Display
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 py-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}