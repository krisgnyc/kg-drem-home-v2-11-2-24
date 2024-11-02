import { Building2, Home, TrendingUp } from 'lucide-react';

export function FeatureSection() {
  return (
    <div className="py-24 feature-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Choose Our Platform
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-200">
            We provide the most comprehensive and up-to-date real estate listings in New York City
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="feature-card p-8 rounded-xl text-center group">
            <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30">
              <Home className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">Extensive Listings</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access thousands of verified properties across all five boroughs of NYC
            </p>
          </div>

          <div className="feature-card p-8 rounded-xl text-center group">
            <div className="w-20 h-20 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30">
              <Building2 className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Premium Properties</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover luxury apartments, penthouses, and townhouses in prime locations
            </p>
          </div>

          <div className="feature-card p-8 rounded-xl text-center group">
            <div className="w-20 h-20 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30">
              <TrendingUp className="h-10 w-10 text-amber-600 dark:text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-amber-700 dark:text-amber-300">Market Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get real-time market data and trends to make informed decisions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}