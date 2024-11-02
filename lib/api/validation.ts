/**
 * API data validation utilities
 * Ensures data quality and consistency
 * @module lib/api/validation
 */

import { Property } from '@/lib/types';

/**
 * Validates minimum property price threshold
 * Ensures luxury property standards
 * 
 * @param price - Property price in USD
 * @returns boolean - True if price meets minimum
 */
export function isValidPrice(price: number): boolean {
  const MIN_PRICE = 1000000; // $1M minimum
  return price >= MIN_PRICE;
}

/**
 * Validates property location is within NYC
 * 
 * @param address - Property address
 * @param zipcode - Property ZIP code
 * @returns boolean - True if location is valid
 */
export function isValidNYCLocation(address: string, zipcode?: string): boolean {
  const nycZipPatterns = [
    /^100/, // Manhattan
    /^112/, // Brooklyn
    /^113/, // Queens
    /^104/, // Bronx
    /^103/  // Staten Island
  ];

  // Check ZIP code if provided
  if (zipcode && nycZipPatterns.some(pattern => pattern.test(zipcode))) {
    return true;
  }

  // Check address keywords
  const nycKeywords = ['new york', 'ny', 'manhattan', 'brooklyn', 'queens', 'bronx', 'staten island'];
  return nycKeywords.some(keyword => address.toLowerCase().includes(keyword));
}

/**
 * Validates complete property data object
 * Ensures all required fields are present and valid
 * 
 * @param property - Property object to validate
 * @returns boolean - True if property data is complete
 */
export function isValidProperty(property: Property): boolean {
  return Boolean(
    property.id &&
    property.title &&
    property.price &&
    property.bedrooms > 0 &&
    property.bathrooms > 0 &&
    property.sqft > 0 &&
    property.image &&
    property.address &&
    isValidPrice(property.price) &&
    isValidNYCLocation(property.address)
  );
}