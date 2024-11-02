# Function Documentation

## API Functions

### `fetchZillowProperties`
```typescript
async function fetchZillowProperties(location: string): Promise<Property[]>
```
- **Purpose**: Fetches property listings from Zillow API
- **Parameters**: location (string) - Search location
- **Returns**: Array of Property objects
- **Features**:
  - Error handling
  - Data validation
  - Fallback to static data
  - Price filtering ($1M minimum)

### `isValidNYCProperty`
```typescript
function isValidNYCProperty(prop: any): boolean
```
- **Purpose**: Validates property data for NYC listings
- **Checks**:
  - Valid location in NYC
  - Minimum price threshold
  - Complete property details
  - Valid image URLs

### `formatPropertyTitle`
```typescript
function formatPropertyTitle(prop: any): string
```
- **Purpose**: Creates standardized property titles
- **Features**:
  - Proper capitalization
  - Location integration
  - Property type formatting

### `getNeighborhoodFromAddress`
```typescript
function getNeighborhoodFromAddress(address: string): string
```
- **Purpose**: Extracts neighborhood from address
- **Features**:
  - NYC neighborhood validation
  - Standardized formatting
  - Fallback handling

## Component Functions

### HeroSearch
```typescript
export function HeroSearch()
```
- **Purpose**: Main search interface
- **Features**:
  - Autocomplete suggestions
  - Search history
  - Location validation

### PropertyCard
```typescript
export function PropertyCard({ property }: PropertyCardProps)
```
- **Purpose**: Property listing display
- **Features**:
  - Image optimization
  - Price formatting
  - Interactive elements

### PropertyGrid
```typescript
export function PropertyGrid({ properties, isLoading, error }: PropertyGridProps)
```
- **Purpose**: Property list management
- **Features**:
  - Loading states
  - Error handling
  - Grid layout optimization

### PropertyFilters
```typescript
export function PropertyFilters()
```
- **Purpose**: Search filter interface
- **Features**:
  - Price range selection
  - Property type filtering
  - Location filtering