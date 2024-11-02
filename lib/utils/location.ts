import { NYC_NEIGHBORHOODS } from '../constants';

export function getNeighborhoodFromAddress(address: string): string {
  const neighborhoods = {
    'soho': ['Spring', 'Broome', 'Greene', 'Mercer'],
    'tribeca': ['Worth', 'Leonard', 'Franklin', 'Hudson'],
    'upper east side': ['Park', 'Madison', 'Lexington', '5th'],
    'upper west side': ['Columbus', 'Amsterdam', 'Broadway', 'West End'],
    'chelsea': ['Chelsea', 'West 23rd', 'West 24th', 'West 25th'],
    'west village': ['Bleecker', 'Christopher', 'West Village'],
    'east village': ['East Village', 'St Marks', 'Tompkins'],
    'williamsburg': ['Bedford', 'Metropolitan', 'Williamsburg'],
    'dumbo': ['DUMBO', 'Water Street', 'Front Street'],
    'brooklyn heights': ['Brooklyn Heights', 'Montague', 'Remsen']
  };

  const lowerAddress = address.toLowerCase();
  for (const [neighborhood, keywords] of Object.entries(neighborhoods)) {
    if (keywords.some(keyword => lowerAddress.includes(keyword.toLowerCase()))) {
      return neighborhood.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
  }
  return 'New York';
}

export function getBoroughFromZip(zipcode: string): string {
  if (!zipcode) return 'Manhattan';
  
  const boroughMap: { [key: string]: string } = {
    '100': 'Manhattan',
    '101': 'Manhattan',
    '102': 'Manhattan',
    '104': 'Bronx',
    '112': 'Brooklyn',
    '113': 'Queens',
    '103': 'Staten Island'
  };

  const prefix = zipcode.substring(0, 3);
  return boroughMap[prefix] || 'Manhattan';
}

export function formatAddress(address: string): string {
  if (!address) return '';
  
  const cleanAddress = address
    .replace(/\s+/g, ' ')
    .replace(/\s*,\s*/g, ', ')
    .replace(/new york/i, 'New York')
    .replace(/\bny\b/i, 'NY');
  
  return cleanAddress;
}