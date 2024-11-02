# API Documentation

## Zillow RapidAPI Integration

### Endpoint Configuration
```typescript
const RAPIDAPI_HOST = 'zillow-com1.p.rapidapi.com'
```

### Authentication
- API Key required in headers
- Rate limiting applies
- Error handling implemented

### Available Endpoints

#### Property Search
```typescript
GET /propertyExtendedSearch
```
- **Parameters**:
  - location (required)
  - home_type (optional)
  - page (optional)
- **Response**: Array of property listings

#### Property Details
```typescript
GET /property
```
- **Parameters**:
  - zpid (required)
- **Response**: Detailed property information

### Data Transformation

#### Property Model
```typescript
interface Property {
  id: string;
  title: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  neighborhood: string;
  borough: string;
  image: string;
  address: string;
  description: string;
  yearBuilt: number | null;
  amenities: string[];
}
```

### Error Handling
- Network errors
- Rate limiting
- Invalid data
- Missing fields

### Caching Strategy
- 1-hour cache duration
- Fallback to static data
- Error state management