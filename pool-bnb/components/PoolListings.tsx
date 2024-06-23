import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';

const PoolListings: React.FC = () => {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    const fetchPools = async () => {
      const response = await axios.get('/dashboard/pool-listings');
      setPools(response.data.data);
    };
    fetchPools();
  }, []);

  const handleDelete = async (poolId: string) => {
    // Implement delete logic here
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Pool Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pools.map((pool, index) => (
          <div key={index} className="border p-4">
            <img src={pool.images[0]} alt={pool.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold">{pool.title}</h3>
            <p>{pool.description}</p>
            <div className="mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(pool._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PoolListings;
