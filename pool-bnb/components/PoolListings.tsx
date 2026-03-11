import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';

interface DashboardPool {
  _id: string;
  title: string;
  description: string;
  images: string[];
}

const PoolListings: React.FC = () => {
  const [pools, setPools] = useState<DashboardPool[]>([]);

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
    <section className="panel p-6 md:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-2xl text-[#173347]">Your Pool Listings</h2>
        <p className="rounded-full bg-[#f0ead8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3b4e5f]">
          {pools.length} total
        </p>
      </div>
      {pools.length === 0 && (
        <div className="rounded-xl border border-dashed border-[#d7d2c6] bg-[#fffdf8] p-5 text-sm text-[#556473]">
          No pools yet. Add your first listing to start accepting bookings.
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pools.map((pool, index) => (
          <article key={index} className="rounded-2xl border border-[#d7d2c6] bg-white p-3 shadow-sm">
            <img
              src={pool.images?.[0] || 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=60'}
              alt={pool.title}
              className="mb-3 h-44 w-full rounded-xl object-cover"
            />
            <h3 className="text-lg font-semibold text-[#173347]">{pool.title}</h3>
            <p className="mt-2 text-sm text-[#556473]">{pool.description}</p>
            <div className="mt-4">
              <button className="rounded-full bg-[#d34b4b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b53a3a]" onClick={() => handleDelete(pool._id)}>Delete</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PoolListings;
