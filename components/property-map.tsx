'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface PropertyMapProps {
  address: string;
  className?: string;
}

export function PropertyMap({ address, className = '' }: PropertyMapProps) {
  // Convert address to URL-friendly format
  const encodedAddress = encodeURIComponent(address);
  
  // Use OpenStreetMap static image
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=15&size=600x400&markers=color:red%7C${encodedAddress}&key=AIzaSyBXF_DXPw7o9L_EWwYvWh-Np39K5BMd7Z8`;

  return (
    <div className={`relative w-full h-[400px] rounded-lg overflow-hidden bg-muted ${className}`}>
      <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
        <div className="text-center p-6">
          <MapPin className="h-8 w-8 text-primary/50 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-sm text-muted-foreground">{address}</p>
        </div>
      </div>
    </div>
  );
}