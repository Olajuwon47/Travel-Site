import { useEffect, useState } from 'react';

// Define TypeScript interfaces for the data structure
interface Hotel {
  name: string;
  pricePerNight: number;
  rating: number;
  amenities: string[];
}

interface Booking {
  maxGuests: number;
  minDuration: string;
  refundPolicy: string;
}

interface Weather {
  temperature: string;
  condition: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Destination {
  id: string | number;
  name: string;
  country: string;
  description: string;
  image: string;
  hotels: Hotel[];
  booking: Booking;
  weather: Weather;
  coordinates: Coordinates;
}

export default function Destination() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filtered, setFiltered] = useState<Destination[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedAmenity, setSelectedAmenity] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchDestinations() {
      try {
        const res = await fetch('/travel_destinations.json');
        const data = await res.json();
        const cleaned: Destination[] = Array.isArray(data) ? data : data.articles || [];
        setDestinations(cleaned);
        setFiltered(cleaned);
      } catch (err) {
        console.error("Failed to fetch destinations:", err);
      }
    }
    fetchDestinations();
  }, []);

  useEffect(() => {
    let results = destinations.filter((d: Destination) =>
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (maxPrice) {
      results = results.filter((d: Destination) =>
        d.hotels.some((h: Hotel) => h.pricePerNight <= Number(maxPrice))
      );
    }

    if (selectedRating) {
      results = results.filter((d: Destination) =>
        d.hotels.some((h: Hotel) => h.rating >= Number(selectedRating))
      );
    }

    if (selectedAmenity) {
      results = results.filter((d: Destination) =>
        d.hotels.some((h: Hotel) => h.amenities.includes(selectedAmenity))
      );
    }

    setFiltered(results);
    setCurrentPage(1);
  }, [searchTerm, maxPrice, selectedRating, selectedAmenity, destinations]);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedDestinations = filtered.slice(startIdx, startIdx + itemsPerPage);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className=" bg-gradient-to-r from-lime-50 to-lime-100 p-6 max-md:p-4 max-sm:p-3">
      {/* Header */}
      <div className="mt-12 max-md:mb-6 max-sm:mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 max-md:text-2xl max-sm:text-xl max-sm:mb-1">
          Explore Destinations
        </h1>
        <p className="text-gray-600 max-sm:text-sm">
          Discover amazing places around the world
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4 max-md:mb-6 max-md:space-y-3 max-sm:mb-4 max-sm:space-y-2">
        <input
          type="text"
          placeholder="Search destinations..."
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent max-md:p-2 max-sm:p-2 max-sm:text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-md:gap-3 max-sm:grid-cols-1 max-sm:gap-2">
          <input
            type="number"
            placeholder="Max Price ($)"
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent max-md:p-2 max-sm:p-2 max-sm:text-sm"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <select
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500 focus:border-transparent max-md:p-2 max-sm:p-2 max-sm:text-sm"
            onChange={(e) => setSelectedRating(e.target.value)}
          >
            <option value="">All Ratings</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
            <option value="5">5 Stars Only</option>
          </select>
          <input
            type="text"
            placeholder="Amenity (e.g. Spa, Pool)"
            className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent max-md:p-2 max-sm:p-2 max-sm:text-sm max-md:col-span-2 max-sm:col-span-1"
            onChange={(e) => setSelectedAmenity(e.target.value)}
          />
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 max-md:mb-4 max-sm:mb-3">
        <p className="text-gray-600 max-sm:text-sm">
          Showing {paginatedDestinations.length} of {filtered.length} destinations
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-6 max-sm:gap-4">
        {paginatedDestinations.map((dest: Destination) => (
          <div key={dest.id} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 max-sm:shadow-md">
            <div className="relative">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-56 object-cover max-md:h-48 max-sm:h-40" 
              />
              <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-semibold text-gray-700 max-sm:top-2 max-sm:right-2 max-sm:px-1 max-sm:text-xs">
                {dest.weather.condition}
              </div>
            </div>
            
            <div className="p-6 max-md:p-4 max-sm:p-3">
              <h2 className="text-xl font-bold text-gray-800 mb-2 max-md:text-lg max-sm:text-base max-sm:mb-1">
                {dest.name}, {dest.country}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2 max-md:mb-3 max-sm:mb-2 max-sm:text-sm">
                {dest.description}
              </p>
              
              {/* Booking Info */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm max-md:gap-3 max-md:mb-3 max-sm:gap-2 max-sm:mb-2 max-sm:text-xs">
                <div>
                  <p className="text-gray-500">Max Guests</p>
                  <p className="font-semibold">{dest.booking.maxGuests}</p>
                </div>
                <div>
                  <p className="text-gray-500">Min Duration</p>
                  <p className="font-semibold">{dest.booking.minDuration}</p>
                </div>
                <div>
                  <p className="text-gray-500">Weather</p>
                  <p className="font-semibold">{dest.weather.temperature}</p>
                </div>
                <div>
                  <p className="text-gray-500">Refund Policy</p>
                  <p className="font-semibold text-xs max-sm:text-xs">{dest.booking.refundPolicy}</p>
                </div>
              </div>
              
              {/* Hotels Section */}
              <div className="mb-4 max-md:mb-3 max-sm:mb-2">
                <h4 className="font-semibold text-gray-800 mb-2 max-sm:text-sm max-sm:mb-1">
                  Available Hotels ({dest.hotels.length})
                </h4>
                <div className="space-y-2 max-h-32 overflow-y-auto max-sm:space-y-1 max-sm:max-h-24">
                  {dest.hotels.map((hotel: Hotel, i: number) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-lg max-md:p-2 max-sm:p-2">
                      <div className="flex justify-between items-start mb-1 max-sm:flex-col max-sm:items-start">
                        <p className="font-medium text-sm max-sm:text-xs">{hotel.name}</p>
                        <div className="flex items-center space-x-2 max-sm:mt-1">
                          <span className="text-green-600 font-bold text-sm max-sm:text-xs">
                            ${hotel.pricePerNight}/night
                          </span>
                          <span className="text-yellow-500 text-sm max-sm:text-xs">
                            ⭐ {hotel.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 max-sm:text-xs">
                        {hotel.amenities.slice(0, 3).join(", ")}
                        {hotel.amenities.length > 3 && ` +${hotel.amenities.length - 3} more`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src={`https://maps.google.com/maps?q=${dest.coordinates.lat},${dest.coordinates.lng}&z=12&output=embed`}
                  width="100%"
                  height="120"
                  loading="lazy"
                  className="max-sm:h-20"
                  title={`Map of ${dest.name}`}
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {paginatedDestinations.length === 0 && (
        <div className="text-center py-12 max-md:py-8 max-sm:py-6">
          <div className="text-gray-400 text-6xl mb-4 max-md:text-4xl max-sm:text-3xl">🏝️</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2 max-md:text-lg max-sm:text-base">
            No destinations found
          </h3>
          <p className="text-gray-500 max-sm:text-sm">
            Try adjusting your search criteria or filters
          </p>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-12 max-md:mt-8 max-sm:mt-6">
          <div className="flex space-x-2 max-sm:flex-wrap max-sm:justify-center max-sm:gap-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded-lg font-medium transition-colors cursor-pointer max-md:px-3 max-sm:px-2 max-sm:py-1 max-sm:text-sm ${
                currentPage === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              <span className="max-sm:hidden">Previous</span>
              <span className="sm:hidden">‹</span>
            </button>

            {/* Page Numbers */}
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 border rounded-lg font-medium transition-colors cursor-pointer max-md:px-3 max-sm:px-2 max-sm:py-1 max-sm:text-sm ${
                    currentPage === pageNum
                      ? 'bg-lime-600 text-white border-lime-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded-lg font-medium transition-colors cursor-pointer max-md:px-3 max-sm:px-2 max-sm:py-1 max-sm:text-sm ${
                currentPage === totalPages
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              <span className="max-sm:hidden">Next</span>
              <span className="sm:hidden">›</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
