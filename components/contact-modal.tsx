'use client';

import { useState } from 'react';
import { X, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ContactModalProps {
  propertyTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ propertyTitle, isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-lg">
        <DialogHeader className="sr-only">
          <DialogTitle>Contact Agent</DialogTitle>
        </DialogHeader>
        <div className="grid md:grid-cols-5 h-full">
          {/* Left side - Image */}
          <div className="relative hidden md:block md:col-span-2 bg-gradient-to-br from-gray-800/90 to-gray-900">
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative h-full p-6 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
                <p className="text-sm opacity-90">Our agents are ready to help you find your dream home.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>support@dreamhome.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="p-6 md:col-span-3">
            <DialogHeader className="mb-4">
              <DialogTitle className="text-2xl">Contact Agent</DialogTitle>
              <DialogDescription>
                Interested in {propertyTitle}? Fill out the form below.
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
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-gray-500" />
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="I'm interested in this property..."
                  className="min-h-[100px] border-gray-200"
                />
              </div>
              <div className="flex justify-end gap-4 pt-4">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" className="px-8 bg-gray-900 hover:bg-gray-800">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}