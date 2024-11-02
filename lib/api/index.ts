/**
 * API module index
 * Centralizes API functionality and exports
 * @module lib/api
 */

import { Property } from '@/lib/types';
import { fetchZillowProperties } from './zillow';

/**
 * Search properties with filtering options
 * Combines API data with local filtering
 * 
 * @param query - Search query string
 * @param filters - Optional filter parameters
 * @returns Promise<Property[]> - Filtered property array
 */
export async function searchProperties(
  query: string,
  filters: {
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    beds?: number;
    baths?: number;
  } = {}
): Promise<Property[]> {
  try {
    // Fetch base property list
    const properties = await fetchZillowProperties(query);

    // Apply filters if provided
    return properties.filter(property => {
      // Type filter (sale/rent)
      const matchesType = !filters.type || 
                         filters.type === 'all' || 
                         property.type === filters.type;

      // Price range filter
      const matchesPrice = (!filters.minPrice || property.price >= filters.minPrice) &&
                         (!filters.maxPrice || property.price <= filters.maxPrice);

      // Room count filters
      const matchesBeds = !filters.beds || property.bedrooms >= filters.beds;
      const matchesBaths = !filters.baths || property.bathrooms >= filters.baths;
      
      return matchesType && matchesPrice && matchesBeds && matchesBaths;
    });
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}

// Re-export Zillow API functions
export { fetchZillowProperties };