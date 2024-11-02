/**
 * HeroSearch Component
 * 
 * A full-width hero section with integrated property search functionality.
 * Features location-based autocomplete and quick neighborhood selection.
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FEATURED_NEIGHBORHOODS } from "@/lib/constants";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter neighborhoods based on user input
  const filteredAreas = FEATURED_NEIGHBORHOODS.filter(area =>
    area.name.toLowerCase().includes(query.toLowerCase())
  );

  /**
   * Handles form submission and navigation to search results
   * Appends NYC location context to search query
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/properties?q=${encodeURIComponent(query)}, New York, NY&type=all`);
    }
  };

  /**
   * Handles neighborhood suggestion selection
   * Immediately triggers search for selected area
   */
  const handleSuggestionClick = (area: string) => {
    setQuery(area);
    setShowSuggestions(false);
    router.push(`/properties?q=${encodeURIComponent(area)}, New York, NY&type=all`);
  };

  return (
    <div className="relative hero-gradient min-h-[600px] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Find Your Dream Home in NYC
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Discover luxury apartments, penthouses, and townhouses in New York's most prestigious neighborhoods
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="relative">
            <div className="glass-card p-1 rounded-lg">
              <div className="relative flex items-center">
                <MapPin className="absolute left-4 h-5 w-5 text-white/70" />
                <Input
                  type="text"
                  placeholder="Search by neighborhood (e.g., SoHo, Upper East Side)"
                  className="w-full h-14 pl-12 pr-32 text-lg bg-transparent border-none text-white placeholder:text-white/70 focus:ring-0"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="absolute right-1 bg-white text-black hover:bg-white/90"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </form>

          {/* Autocomplete Suggestions */}
          {showSuggestions && query.length > 0 && (
            <div className="absolute w-full mt-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl max-h-60 overflow-auto">
              {filteredAreas.length > 0 ? (
                filteredAreas.map((area) => (
                  <button
                    key={area.name}
                    className="w-full px-4 py-3 text-left text-white hover:bg-white/10 focus:bg-white/10 focus:outline-none transition-colors duration-200"
                    onClick={() => handleSuggestionClick(area.name)}
                  >
                    <span className="font-medium">{area.name}</span>
                    <span className="text-white/70 ml-2 text-sm">
                      {area.borough}
                    </span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-3 text-white/70">No matches found</div>
              )}
            </div>
          )}

          {/* Quick Select Neighborhood Buttons */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {FEATURED_NEIGHBORHOODS.map((area) => (
              <button
                key={area.name}
                onClick={() => handleSuggestionClick(area.name)}
                className="px-4 py-2 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors duration-200"
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}