import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';

const Filters: React.FC<{ onFilterChange: (filters: any) => void }> = ({ onFilterChange }) => {
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

  const handleFilterChange = () => {
    onFilterChange({
      location: selectedLocation,
      date: selectedDate,
      priceRange: selectedPriceRange,
      amenities: selectedAmenities.join(','),
    });
  };

  return (
    <aside className="w-64 bg-white p-4 border-r">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <label className="block mb-2">Location</label>
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="w-full p-2 border">
          <option value="">All</option>
          {locations.map((location, index) => <option key={index} value={location}>{location}</option>)}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Date</label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Price Range</label>
        <input type="text" placeholder="e.g. 100-500" value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Amenities</label>
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            <input type="checkbox" value={amenity} onChange={(e) => {
              const value = e.target.value;
              setSelectedAmenities((prev) => prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]);
            }} />
            <span className="ml-2">{amenity}</span>
          </div>
        ))}
      </div>
      <button onClick={handleFilterChange} className="w-full bg-blue-500 text-white p-2 rounded">Apply Filters</button>
    </aside>
  );
};

export default Filters;
