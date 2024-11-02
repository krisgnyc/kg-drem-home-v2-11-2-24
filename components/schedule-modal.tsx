'use client';

import { useState } from 'react';
import { X, Calendar, Clock, Mail, Phone, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ScheduleModalProps {
  propertyTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ScheduleModal({ propertyTitle, isOpen, onClose }: ScheduleModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '10:00',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Viewing scheduled:', formData);
    onClose();
  };

  const timeSlots = Array.from({ length: 16 }, (_, i) => {
    const hour = Math.floor(i / 2) + 10;
    const minute = i % 2 === 0 ? '00' : '30';
    return `${hour}:${minute}`;
  });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>Schedule a Viewing</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-5 h-full">
          {/* Left side - Image */}
          <div className="relative hidden md:block md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900">
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="relative h-full p-6 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-xl font-semibold mb-2">Schedule a Viewing</h3>
                <p className="text-sm opacity-90">Choose a convenient time to view this property in person.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4" />
                  <span>Available 7 days a week</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-6 md:col-span-3">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl">Schedule a Viewing</DialogTitle>
              <DialogDescription>
                Book a time to view {propertyTitle}
              </DialogDescription>
            </DialogHeader>
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 bg-gray-100/80 backdrop-blur-sm hover:bg-gray-200/80 transition-colors"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  Name
                </label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-gray-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    Date
                  </label>
                  <Input
                    id="date"
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="time" className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    Time
                  </label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => setFormData({ ...formData, time: value })}
                  >
                    <SelectTrigger className="border-gray-200">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" className="px-8 bg-gray-900 hover:bg-gray-800">
                  Schedule
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}