'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { neighborhoods } from '@/lib/data';
import { Slider } from '@/components/ui/slider';

export function PropertyFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState({
    searchTerm: '',
    propertyType: 'all',
    priceRange: [0, 10000000],
    bedrooms: 0,
    bathrooms: 0
  });

  useEffect(() => {
    setFilters(prev => ({
      ...prev,
      searchTerm: searchParams.get('q') || '',
      propertyType: searchParams.get('type') || 'all'
    }));
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    
    if (filters.searchTerm) {
      params.set('q', filters.searchTerm);
    }
    
    if (filters.propertyType !== 'all') {
      params.set('type', filters.propertyType);
    }
    
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 10000000) {
      params.set('minPrice', filters.priceRange[0].toString());
      params.set('maxPrice', filters.priceRange[1].toString());
    }
    
    if (filters.bedrooms > 0) {
      params.set('beds', filters.bedrooms.toString());
    }
    
    if (filters.bathrooms > 0) {
      params.set('baths', filters.bathrooms.toString());
    }

    router.push(`/properties?${params.toString()}`);
  };

  const handleReset = () => {
    setFilters({
      searchTerm: '',
      propertyType: 'all',
      priceRange: [0, 10000000],
      bedrooms: 0,
      bathrooms: 0
    });
    router.push('/properties');
  };

  const formatPrice = (value: number) => {
    return value >= 1000000 
      ? `$${(value / 1000000).toFixed(1)}M` 
      : `$${(value / 1000).toFixed(0)}K`;
  };

  return (
    <div className="space-y-6 bg-card dark:bg-gray-800/50 p-6 rounded-lg shadow-sm">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            placeholder="Search by location or keyword..."
            value={filters.searchTerm}
            onChange={(e) => setFilters(prev => ({ ...prev, searchTerm: e.target.value }))}
            className="w-full"
          />
          
          <Select 
            value={filters.propertyType} 
            onValueChange={(value) => setFilters(prev => ({ ...prev, propertyType: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="sale">For Sale</SelectItem>
              <SelectItem value="rent">For Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">
              Price Range: {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
            </label>
            <Slider
              defaultValue={[0, 10000000]}
              max={10000000}
              step={100000}
              value={filters.priceRange}
              onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
              className="my-4"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Bedrooms: {filters.bedrooms}+</label>
              <Select 
                value={filters.bedrooms.toString()} 
                onValueChange={(value) => setFilters(prev => ({ ...prev, bedrooms: parseInt(value) }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Bathrooms: {filters.bathrooms}+</label>
              <Select 
                value={filters.bathrooms.toString()} 
                onValueChange={(value) => setFilters(prev => ({ ...prev, bathrooms: parseInt(value) }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button 
            type="submit" 
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            Apply Filters
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={handleReset}
            className="flex-1"
          >
            Reset
          </Button>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        {neighborhoods.map((neighborhood) => (
          <Button
            key={neighborhood.name}
            variant="outline"
            size="sm"
            onClick={() => {
              setFilters(prev => ({ ...prev, searchTerm: neighborhood.name }));
              router.push(`/properties?q=${encodeURIComponent(neighborhood.name)}&type=all`);
            }}
            className="transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {neighborhood.name}
          </Button>
        ))}
      </div>
    </div>
  );
}