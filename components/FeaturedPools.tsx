import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';

const FeaturedPools: React.FC = () => {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    const fetchFeaturedPools = async () => {
      const response = await axios.get('/featured-pools');
      setPools(response.data.data);
    };
    fetchFeaturedPools();
  }, []);

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Featured Pools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pools.map((pool, index) => (
          <div key={index} className="border p-4">
            <img src={pool.images[0]} alt={pool.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold">{pool.title}</h3>
            <p>{pool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPools;
