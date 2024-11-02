import { notFound } from 'next/navigation';
import { properties } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Home } from 'lucide-react';
import Image from 'next/image';
import { ContactModal } from '@/components/contact-modal';
import { ScheduleModal } from '@/components/schedule-modal';
import { ClientWrapper } from '@/components/client-wrapper';
import { PropertyMap } from '@/components/property-map';

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-2">
                ${property.price.toLocaleString()}
                {property.type === 'rent' && '/month'}
              </div>
              <Badge variant="secondary">
                {property.type === 'sale' ? 'For Sale' : 'For Rent'}
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <PropertyMap address={property.address} className="min-h-[300px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Property Details</h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Beds</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Baths</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-semibold">{property.sqft.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Sq Ft</div>
                  </div>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-muted-foreground">{property.description}</p>
                {property.amenities && property.amenities.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold mt-6 mb-3">Amenities</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {property.amenities.map((amenity) => (
                        <li key={amenity} className="flex items-center text-muted-foreground">
                          <span className="mr-2">•</span>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          <div>
            <ClientWrapper propertyTitle={property.title} />
          </div>
        </div>
      </div>
    </main>
  );
}