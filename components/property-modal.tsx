'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Property } from '@/lib/types';
import { ContactModal } from './contact-modal';
import { ScheduleModal } from './schedule-modal';
import { Button } from './ui/button';
import Image from 'next/image';
import { Bath, Bed, Calendar, Home, MapPin } from 'lucide-react';

interface PropertyModalProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

export function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>{property.title}</DialogTitle>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px] md:h-full">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
                <p className="text-lg font-semibold text-primary mb-2">
                  ${property.price.toLocaleString()}
                  {property.type === 'rent' && '/month'}
                </p>
                <p className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.address}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">{property.bedrooms}</p>
                    <p className="text-sm text-muted-foreground">Beds</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Baths</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">{property.sqft.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Sq Ft</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{property.description}</p>
              </div>

              {property.amenities && property.amenities.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Amenities</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {property.amenities.map((amenity) => (
                      <li key={amenity} className="flex items-center text-muted-foreground">
                        <span className="mr-2">•</span>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300" 
                  onClick={() => setShowContactModal(true)}
                >
                  Contact Agent
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-2 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300"
                  onClick={() => setShowScheduleModal(true)}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Tour
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ContactModal
        propertyTitle={property.title}
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />

      <ScheduleModal
        propertyTitle={property.title}
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
      />
    </>
  );
}