'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ContactModal } from '@/components/contact-modal';
import { ScheduleModal } from '@/components/schedule-modal';

interface ClientWrapperProps {
  propertyTitle: string;
}

export function ClientWrapper({ propertyTitle }: ClientWrapperProps) {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  return (
    <div className="bg-card rounded-lg p-6 shadow-sm sticky top-4">
      <Button 
        className="w-full mb-4 bg-gray-900/90 hover:bg-gray-900 backdrop-blur-sm transition-colors"
        onClick={() => setShowContactModal(true)}
      >
        Contact Agent
      </Button>
      <Button 
        variant="outline" 
        className="w-full border-gray-200 hover:bg-gray-50 text-gray-900 transition-colors"
        onClick={() => setShowScheduleModal(true)}
      >
        Schedule Viewing
      </Button>

      <ContactModal
        propertyTitle={propertyTitle}
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />

      <ScheduleModal
        propertyTitle={propertyTitle}
        isOpen={showScheduleModal}
        onClose={() => setShowScheduleModal(false)}
      />
    </div>
  );
}