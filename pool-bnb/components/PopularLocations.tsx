import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';
import Link from 'next/link';

interface PopularLocation {
  _id: string;
  count: number;
}

const PopularLocations: React.FC = () => {
  const [locations, setLocations] = useState<PopularLocation[]>([]);

  useEffect(() => {
    const fetchPopularLocations = async () => {
      try {
        const response = await axios.get('/popular-locations');
        setLocations(response.data.data);
      } catch (error) {
        console.error('Failed to fetch popular locations:', error);
        setLocations([]);
      }
    };

    fetchPopularLocations();
  }, []);

  return (
    <section className="my-8">
      <h2 className="section-title mb-4 text-[#173347]">Popular Locations</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {locations.length === 0 && (
          <div className="panel col-span-full p-6 text-center">
            <p className="muted text-sm">Popular locations will show up here as more hosts join.</p>
          </div>
        )}
        {locations.map((location) => (
          <Link
            key={location._id}
            href={{
              pathname: '/pool-listings',
              query: { location: location._id },
            }}
            className="panel flex items-center justify-between gap-3 p-4 transition-colors hover:bg-[#fef9ee]"
          >
            <h3 className="text-lg text-[#173347]">{location._id}</h3>
            <span className="rounded-full bg-[#f0ead8] px-3 py-1 text-sm font-semibold text-[#3b4e5f]">
              {location.count} pools
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularLocations;
