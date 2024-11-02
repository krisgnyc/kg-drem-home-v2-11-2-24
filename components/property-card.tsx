'use client';

import Image from 'next/image';
import { Property } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Bath, Bed, Home, MapPin, ImageOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { PropertyModal } from './property-modal';
import { useState } from 'react';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden property-card-transition hover:shadow-xl cursor-pointer property-card"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-72">
          {!imageError ? (
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={true}
              quality={75}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800">
              <ImageOff className="h-12 w-12 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500">Image unavailable</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="secondary" className="bg-white/90 text-blue-800 backdrop-blur-sm shadow-sm">
              {property.type === 'sale' ? 'For Sale' : 'For Rent'}
            </Badge>
          </div>
          
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <p className="text-2xl font-bold mb-0.5">
              ${property.price.toLocaleString()}
              {property.type === 'rent' && '/month'}
            </p>
            <p className="text-sm font-medium opacity-90 flex items-center gap-1 truncate">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
              {property.address}
            </p>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold mb-2 line-clamp-1 text-gray-800 dark:text-gray-100">
            {property.title}
          </h3>
          
          <div className="grid grid-cols-3 gap-2 text-sm text-blue-600 dark:text-blue-400">
            <div className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5" />
              <span>{property.bedrooms} beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" />
              <span>{property.bathrooms} baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Home className="h-3.5 w-3.5" />
              <span>{property.sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </div>
      </Card>

      <PropertyModal 
        property={property}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}