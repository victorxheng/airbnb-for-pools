import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';

const PopularLocations: React.FC = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchPopularLocations = async () => {
      const response = await axios.get('/popular-locations');
      setLocations(response.data.data);
    };
    fetchPopularLocations();
  }, []);

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Popular Locations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="border p-4 cursor-pointer">
            <h3 className="text-xl font-bold">{location._id}</h3>
            <p>{location.count} pools</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularLocations;
