import { Property } from '@/lib/types';
import { getNeighborhoodFromAddress, getBoroughFromZip } from '@/lib/utils/location';

const RAPIDAPI_KEY = 'b86c44e63fmsh3e532e560ce2ef2p1dd1fajsnfdc838c93f56';
const RAPIDAPI_HOST = 'zillow-com1.p.rapidapi.com';

export async function fetchZillowProperties(location: string): Promise<Property[]> {
  try {
    if (!location) {
      throw new Error('Location is required');
    }

    const formattedLocation = `${location}, New York, NY`;
    const url = `https://${RAPIDAPI_HOST}/propertyExtendedSearch?location=${encodeURIComponent(formattedLocation)}&home_type=Houses,Condos,Apartments&page=1&sort=price_desc`;
    
    const response = await fetch(url, {
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST,
      },
      next: { revalidate: 3600 }
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data || !Array.isArray(data.props)) {
      throw new Error('Invalid API response format');
    }

    return data.props
      .filter(prop => isLuxuryProperty(prop))
      .map(prop => transformPropertyData(prop));

  } catch (error) {
    console.error('Zillow API Error:', error);
    return [];
  }
}

function isLuxuryProperty(prop: any): boolean {
  const price = typeof prop.price === 'string' 
    ? parseFloat(prop.price.replace(/[^0-9.]/g, ''))
    : prop.price;

  if (!price || price < 2000000) return false;

  const hasValidBeds = prop.bedrooms >= 2;
  const hasValidBaths = prop.bathrooms >= 2;
  const hasValidArea = prop.livingArea >= 1000;
  
  const hasLuxuryAmenities = prop.hasElevator || 
                            prop.hasDoorman || 
                            prop.hasPool || 
                            prop.hasGym;

  return hasValidBeds && hasValidBaths && hasValidArea && (hasLuxuryAmenities || price >= 3000000);
}

function transformPropertyData(prop: any): Property {
  const price = typeof prop.price === 'string' 
    ? parseFloat(prop.price.replace(/[^0-9.]/g, ''))
    : prop.price;

  return {
    id: prop.zpid?.toString() || `property-${Math.random()}`,
    zpid: prop.zpid?.toString() || '',
    title: formatPropertyTitle(prop),
    price: price,
    bedrooms: Number(prop.bedrooms) || 0,
    bathrooms: Number(prop.bathrooms) || 0,
    sqft: Number(prop.livingArea) || 0,
    type: prop.listingType?.toLowerCase()?.includes('rent') ? 'rent' : 'sale',
    neighborhood: getNeighborhoodFromAddress(prop.address || ''),
    borough: getBoroughFromZip(prop.zipcode),
    image: prop.imgSrc || '',
    address: prop.address || '',
    description: formatDescription(prop),
    yearBuilt: prop.yearBuilt || null,
    amenities: extractAmenities(prop),
    listingStatus: prop.listingStatus || '',
    daysOnZillow: prop.daysOnZillow || 0,
    longitude: prop.longitude || 0,
    latitude: prop.latitude || 0
  };
}

function formatPropertyTitle(prop: any): string {
  const type = prop.propertyType || 'Luxury Property';
  const neighborhood = getNeighborhoodFromAddress(prop.address || '');
  return `${type} in ${neighborhood}`;
}

function formatDescription(prop: any): string {
  const features = [];
  if (prop.yearBuilt) features.push(`Built in ${prop.yearBuilt}`);
  if (prop.livingArea) features.push(`${prop.livingArea.toLocaleString()} square feet`);
  if (prop.bedrooms) features.push(`${prop.bedrooms} bedrooms`);
  if (prop.bathrooms) features.push(`${prop.bathrooms} bathrooms`);
  
  const amenities = extractAmenities(prop);
  const amenitiesText = amenities.length > 0 
    ? ` Featuring ${amenities.join(', ').toLowerCase()}.`
    : '';
  
  return features.length > 0 
    ? `Luxury ${prop.propertyType || 'property'} offering ${features.join(', ')}.${amenitiesText}`
    : `Exceptional luxury property in ${prop.address || 'New York'}.${amenitiesText}`;
}

function extractAmenities(prop: any): string[] {
  const amenities = [];
  if (prop.hasDoorman) amenities.push('Full-Service Doorman');
  if (prop.hasElevator) amenities.push('Private Elevator');
  if (prop.hasPool) amenities.push('Swimming Pool');
  if (prop.hasGym) amenities.push('Fitness Center');
  if (prop.hasGarage) amenities.push('Private Garage');
  if (prop.hasCentralAir) amenities.push('Central Air');
  if (prop.hasFireplace) amenities.push('Fireplace');
  if (prop.hasLaundry) amenities.push('In-Unit Laundry');
  if (prop.hasView) amenities.push('Panoramic Views');
  if (prop.hasBalcony) amenities.push('Private Balcony');
  if (prop.hasWaterfront) amenities.push('Waterfront');
  return amenities;
}