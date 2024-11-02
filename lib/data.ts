import { Property } from './types';

export interface Neighborhood {
  name: string;
  borough: string;
}

export const properties: Property[] = [
  {
    id: "soho-1",
    title: "Luxury SoHo Loft",
    price: 4500000,
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2800,
    type: "sale",
    neighborhood: "SoHo",
    borough: "Manhattan",
    image: "https://photos.zillowstatic.com/fp/053384c49efb9b545845d87c5fe195f0-cc_ft_1536.webp",
    address: "123 Spring Street, New York, NY 10012",
    description: "Stunning converted loft space with original architectural details",
    amenities: ["Doorman", "Elevator", "Central AC", "Private Storage"],
    yearBuilt: 1900
  },
  {
    id: "ues-1",
    title: "Classic Upper East Side Pre-War",
    price: 3200000,
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1500,
    type: "sale",
    neighborhood: "Upper East Side",
    borough: "Manhattan",
    image: "https://photos.zillowstatic.com/fp/180a0d3f36e6ef8d7f9674a6e5b5a62e-cc_ft_1536.webp",
    address: "45 East 72nd Street, New York, NY 10021",
    description: "Elegant pre-war apartment with park views",
    amenities: ["Full-time Doorman", "Elevator", "Fitness Center"],
    yearBuilt: 1925
  },
  {
    id: "tribeca-1",
    title: "Tribeca Penthouse",
    price: 12000000,
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4500,
    type: "sale",
    neighborhood: "Tribeca",
    borough: "Manhattan",
    image: "https://photos.zillowstatic.com/fp/b95a2ff1e68c8c4a04ae237252b0a39c-cc_ft_1536.webp",
    address: "45 Warren Street, New York, NY 10007",
    description: "Spectacular penthouse with wraparound terrace",
    amenities: ["Private Elevator", "Wine Room", "Smart Home System", "Outdoor Kitchen"],
    yearBuilt: 2015
  },
  {
    id: "williamsburg-1",
    title: "Williamsburg Waterfront Condo",
    price: 2800000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1800,
    type: "sale",
    neighborhood: "Williamsburg",
    borough: "Brooklyn",
    image: "https://photos.zillowstatic.com/fp/7878faad4b38438c1a33c6ef8c8c4d3e-cc_ft_1536.webp",
    address: "123 Kent Avenue, Brooklyn, NY 11249",
    description: "Modern waterfront condo with Manhattan views",
    amenities: ["Pool", "Gym", "Parking", "Roof Deck"],
    yearBuilt: 2020
  },
  {
    id: "chelsea-1",
    title: "Chelsea High Line Residence",
    price: 6500000,
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    type: "sale",
    neighborhood: "Chelsea",
    borough: "Manhattan",
    image: "https://photos.zillowstatic.com/fp/4f0994884d02ab4e6a993e7ce5e8a00b-cc_ft_1536.webp",
    address: "520 West 28th Street, New York, NY 10001",
    description: "Stunning contemporary residence near the High Line",
    amenities: ["Concierge", "Pool", "Spa", "Private Balcony"],
    yearBuilt: 2018
  },
  {
    id: "brooklyn-heights-1",
    title: "Brooklyn Heights Brownstone",
    price: 8500000,
    bedrooms: 6,
    bathrooms: 4.5,
    sqft: 5000,
    type: "sale",
    neighborhood: "Brooklyn Heights",
    borough: "Brooklyn",
    image: "https://photos.zillowstatic.com/fp/ef1f6c85e64ffe5aa95e52c0c51c9a46-cc_ft_1536.webp",
    address: "72 Orange Street, Brooklyn, NY 11201",
    description: "Historic brownstone with original details and modern amenities",
    amenities: ["Garden", "Wine Cellar", "Multiple Fireplaces", "Library"],
    yearBuilt: 1890
  }
];

export const neighborhoods: Neighborhood[] = [
  { name: "Upper East Side", borough: "Manhattan" },
  { name: "Upper West Side", borough: "Manhattan" },
  { name: "SoHo", borough: "Manhattan" },
  { name: "Tribeca", borough: "Manhattan" },
  { name: "Chelsea", borough: "Manhattan" },
  { name: "Greenwich Village", borough: "Manhattan" },
  { name: "Williamsburg", borough: "Brooklyn" },
  { name: "Brooklyn Heights", borough: "Brooklyn" },
  { name: "DUMBO", borough: "Brooklyn" },
  { name: "Park Slope", borough: "Brooklyn" }
];