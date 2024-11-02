/**
 * Application-wide constants and configuration values
 * @module lib/constants
 */

import { Neighborhood } from './types';

/** Mapbox API access token for map integration */
export const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYm9sdGRldiIsImEiOiJjbHNld3FiYXcwMjBqMnFwOWY4Z2wzZ3ozIn0.EN4JMWLQoVoVRhR6-dH1dQ';

/**
 * Mapping of NYC neighborhoods to their respective boroughs
 * Used for location validation and categorization
 */
export const NYC_NEIGHBORHOODS: { [key: string]: string } = {
  // Manhattan neighborhoods
  'SoHo': 'Manhattan',
  'Tribeca': 'Manhattan',
  'Upper East Side': 'Manhattan',
  'Upper West Side': 'Manhattan',
  'Chelsea': 'Manhattan',
  'Greenwich Village': 'Manhattan',
  'Lower East Side': 'Manhattan',
  'Financial District': 'Manhattan',
  'Midtown': 'Manhattan',
  'Harlem': 'Manhattan',
  
  // Brooklyn neighborhoods
  'Williamsburg': 'Brooklyn',
  'DUMBO': 'Brooklyn',
  'Brooklyn Heights': 'Brooklyn',
  'Park Slope': 'Brooklyn',
  'Bushwick': 'Brooklyn',
  'Fort Greene': 'Brooklyn',
  'Cobble Hill': 'Brooklyn',
  'Carroll Gardens': 'Brooklyn',
  
  // Queens neighborhoods
  'Astoria': 'Queens',
  'Long Island City': 'Queens',
  'Forest Hills': 'Queens',
  'Jackson Heights': 'Queens',
  
  // Bronx neighborhoods
  'Riverdale': 'Bronx',
  'Concourse': 'Bronx',
  
  // Staten Island neighborhoods
  'St. George': 'Staten Island',
  'Tottenville': 'Staten Island'
};

/** Featured neighborhoods for homepage and quick search */
export const FEATURED_NEIGHBORHOODS = [
  { name: "SoHo", borough: "Manhattan" },
  { name: "Upper East Side", borough: "Manhattan" },
  { name: "Williamsburg", borough: "Brooklyn" },
  { name: "Brooklyn Heights", borough: "Brooklyn" },
  { name: "Upper West Side", borough: "Manhattan" },
  { name: "DUMBO", borough: "Brooklyn" }
] as const;

/** Predefined price ranges for property filtering */
export const PRICE_RANGES = [
  { label: "Any", value: "any", min: 0 },
  { label: "Under $500K", value: "0-500000", min: 0, max: 500000 },
  { label: "$500K - $1M", value: "500000-1000000", min: 500000, max: 1000000 },
  { label: "$1M - $2M", value: "1000000-2000000", min: 1000000, max: 2000000 },
  { label: "$2M - $5M", value: "2000000-5000000", min: 2000000, max: 5000000 },
  { label: "$5M+", value: "5000000", min: 5000000 }
] as const;