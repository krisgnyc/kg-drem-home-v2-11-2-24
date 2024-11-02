/**
 * Property data transformation and formatting utilities
 * Handles property data standardization and validation
 * @module lib/utils/property
 */

import { Property } from '@/lib/types';
import { getNeighborhoodFromAddress, getBoroughFromZip, getDefaultImage } from './location';

/**
 * Formats property title with standardized naming convention
 * Combines property type and neighborhood for consistent display
 * 
 * @param prop - Raw property data
 * @returns Formatted title (e.g., "Luxury Condo in SoHo")
 */
export function formatPropertyTitle(prop: any): string {
  const type = prop.propertyType || 'Property';
  const neighborhood = getNeighborhoodFromAddress(prop.address || '');
  return `${type} in ${neighborhood}`;
}

/**
 * Generates descriptive property summary from available details
 * Prioritizes key features like year built, size, and room count
 * 
 * @param prop - Raw property data
 * @returns Formatted description highlighting main features
 */
export function formatDescription(prop: any): string {
  const features = [];
  if (prop.yearBuilt) features.push(`Built in ${prop.yearBuilt}`);
  if (prop.livingArea) features.push(`${prop.livingArea} square feet`);
  if (prop.bedrooms) features.push(`${prop.bedrooms} bedrooms`);
  if (prop.bathrooms) features.push(`${prop.bathrooms} bathrooms`);
  
  return features.length > 0 
    ? `Beautiful ${prop.propertyType || 'property'} featuring ${features.join(', ')}.`
    : `Stunning property in ${getNeighborhoodFromAddress(prop.address || 'New York')}.`;
}

/**
 * Extracts and validates available property amenities
 * Checks for presence of common luxury features
 * 
 * @param prop - Raw property data
 * @returns Array of validated amenities
 */
export function extractAmenities(prop: any): string[] {
  const amenities = [];
  if (prop.hasGarage) amenities.push('Garage');
  if (prop.hasPool) amenities.push('Pool');
  if (prop.hasCentralAir) amenities.push('Central Air');
  if (prop.hasFireplace) amenities.push('Fireplace');
  return amenities;
}

/**
 * Transforms raw API property data into standardized format
 * Ensures all required fields are present and properly formatted
 * 
 * @param prop - Raw property data from API
 * @param location - Search location for context
 * @returns Standardized Property object
 * 
 * @throws Will not throw, uses fallback values for missing data
 */
export function transformPropertyData(prop: any, location: string): Property {
  return {
    id: prop.zpid?.toString() || `property-${Math.random()}`,
    title: formatPropertyTitle(prop),
    price: prop.price || 0,
    bedrooms: prop.bedrooms || 0,
    bathrooms: prop.bathrooms || 0,
    sqft: prop.livingArea || 0,
    type: prop.listingType === 'FOR_RENT' ? 'rent' : 'sale',
    neighborhood: getNeighborhoodFromAddress(prop.address || location),
    borough: getBoroughFromZip(prop.zipcode),
    image: prop.imgSrc || getDefaultImage(location),
    address: prop.address || '',
    description: formatDescription(prop),
    yearBuilt: prop.yearBuilt || null,
    amenities: extractAmenities(prop),
  };
}