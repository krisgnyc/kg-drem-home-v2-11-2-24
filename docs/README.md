# NYC Real Estate Platform Documentation

## Overview
A modern real estate platform built with Next.js, showcasing luxury properties in New York City. The application integrates with the Zillow RapidAPI to provide real-time property listings and features a responsive, user-friendly interface.

## Tech Stack
- Next.js 13.5
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- Zillow RapidAPI Integration

## Project Structure
```
nyc-real-estate/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Homepage
│   └── properties/        # Property routes
├── components/            # Reusable components
│   ├── ui/               # UI components (shadcn)
│   └── feature/          # Feature components
├── lib/                   # Utilities and helpers
│   ├── api/              # API integration
│   ├── types/            # TypeScript types
│   └── utils/            # Helper functions
└── public/               # Static assets
```

## Key Features

### 1. Property Search
- Advanced search functionality with filters
- Real-time property data from Zillow API
- Fallback to static data when API is unavailable

### 2. Property Listings
- Grid view of available properties
- Property cards with key information
- Modal view for detailed property information

### 3. User Interface
- Responsive design for all devices
- Dark/Light theme support
- Modern, clean aesthetic

### 4. Property Details
- Comprehensive property information
- Image galleries
- Amenity lists
- Contact forms

## Component Documentation

### Core Components

#### HeroSearch
- Main search component on homepage
- Handles location-based property searches
- Provides neighborhood suggestions

#### PropertyCard
- Displays individual property information
- Shows price, location, and key features
- Handles click events for detailed view

#### PropertyGrid
- Manages property listing layout
- Handles loading states
- Implements error boundaries

#### PropertyFilters
- Advanced search filters
- Price range selection
- Bedroom/bathroom filters
- Property type selection

## API Integration

### Zillow RapidAPI
The platform integrates with Zillow's API for real-time property data:
- Property searches
- Detailed property information
- Price and location data
- Property images

### Data Validation
- Ensures property prices meet minimum threshold ($1M+)
- Validates NYC locations
- Filters for complete property information

## Deployment

The application is deployed on Netlify with automatic builds and deployments:
- Production URL: https://tiny-sunburst-d3ae64.netlify.app
- Automatic deployments from main branch
- Environment variable management
- Build optimization

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow Next.js best practices
- Implement proper error handling
- Maintain component modularity

### Performance
- Implement image optimization
- Use proper caching strategies
- Minimize bundle size
- Optimize API calls

### Accessibility
- Follow WCAG guidelines
- Implement proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios