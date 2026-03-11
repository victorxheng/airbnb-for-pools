import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
  initialLocation?: string;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange, initialLocation = '' }) => {
  const [locations, setLocations] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  useEffect(() => {
    const fetchFilters = async () => {
      const response = await axios.get('/filters');
      setLocations(response.data.data.locations);
      setAmenities(response.data.data.amenities);
    };
    fetchFilters();
  }, []);

  useEffect(() => {
    setSelectedLocation(initialLocation);
  }, [initialLocation]);

  const handleFilterChange = () => {
    onFilterChange({
      location: selectedLocation,
      date: selectedDate,
      priceRange: selectedPriceRange,
      amenities: selectedAmenities.join(','),
    });
  };

  return (
    <aside className="panel h-fit w-full p-4 md:sticky md:top-24 md:w-72">
      <h2 className="mb-4 text-xl text-[#173347]">Filters</h2>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-semibold text-[#3b4e5f]">Location</label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full rounded-xl border border-[#d7d2c6] bg-white p-2.5 text-sm"
        >
          <option value="">All</option>
          {locations.map((location, index) => <option key={index} value={location}>{location}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-semibold text-[#3b4e5f]">Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full rounded-xl border border-[#d7d2c6] bg-white p-2.5 text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-semibold text-[#3b4e5f]">Price Range</label>
        <input
          type="text"
          placeholder="e.g. 100-500"
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
          className="w-full rounded-xl border border-[#d7d2c6] bg-white p-2.5 text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block text-sm font-semibold text-[#3b4e5f]">Amenities</label>
        {amenities.map((amenity, index) => (
          <label key={index} className="mb-2 flex items-center gap-2 text-sm text-[#4a5e70]">
            <input className="h-4 w-4" type="checkbox" value={amenity} onChange={(e) => {
              const value = e.target.value;
              setSelectedAmenities((prev) => prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]);
            }} />
            <span>{amenity}</span>
          </label>
        ))}
      </div>
      <button onClick={handleFilterChange} className="btn-primary w-full">
        Apply Filters
      </button>
    </aside>
  );
};

export default Filters;
