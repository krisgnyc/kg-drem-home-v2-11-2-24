/**
 * Core type definitions for the NYC Real Estate platform
 * @module lib/types
 */

/**
 * Represents a real estate property listing
 * Contains all essential property information and metadata
 */
export type Property = {
  /** Unique identifier for the property */
  id: string;
  
  /** Zillow property ID */
  zpid: string;
  
  /** Display title for the property */
  title: string;
  
  /** Property price in USD */
  price: number;
  
  /** Number of bedrooms */
  bedrooms: number;
  
  /** Number of bathrooms */
  bathrooms: number;
  
  /** Square footage of the property */
  sqft: number;
  
  /** Property type (sale/rent) */
  type: string;
  
  /** NYC neighborhood location */
  neighborhood: string;
  
  /** NYC borough location */
  borough: string;
  
  /** Primary property image URL */
  image: string;
  
  /** Full property address */
  address: string;
  
  /** Property description */
  description: string;
  
  /** Year the property was built */
  yearBuilt: number | null;
  
  /** Available property amenities */
  amenities: string[];
  
  /** Current listing status */
  listingStatus: string;
  
  /** Number of days listed on Zillow */
  daysOnZillow: number;
  
  /** Property longitude coordinate */
  longitude: number;
  
  /** Property latitude coordinate */
  latitude: number;
}