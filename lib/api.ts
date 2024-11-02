import { Property } from './types';
import { fetchZillowProperties } from './api/zillow';

interface SearchFilters {
  type?: string;
  minPrice?: number;
  maxPrice?: number;
  beds?: number | string;
  baths?: number | string;
}

export async function searchProperties(query: string, filters: SearchFilters = {}): Promise<Property[]> {
  try {
    if (!query) {
      console.warn('No search query provided');
      return [];
    }

    const properties = await fetchZillowProperties(query);
    
    return properties.filter(property => {
      // Type filter
      if (filters.type && filters.type !== 'all' && property.type !== filters.type) {
        return false;
      }

      // Price range filter
      if (filters.minPrice && property.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && property.price > filters.maxPrice) {
        return false;
      }

      // Bedrooms filter
      if (filters.beds && property.bedrooms < Number(filters.beds)) {
        return false;
      }

      // Bathrooms filter
      if (filters.baths && property.bathrooms < Number(filters.baths)) {
        return false;
      }

      return true;
    });
  } catch (error) {
    console.error('Search properties error:', error);
    throw new Error('Failed to search properties');
  }
}