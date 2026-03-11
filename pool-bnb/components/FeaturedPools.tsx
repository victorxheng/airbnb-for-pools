import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';
import { IPool } from '@/models/Pool';
import Link from 'next/link';

const FeaturedPools: React.FC = () => {
  const [pools, setPools] = useState<IPool[]>([]);

  useEffect(() => {
    const fetchFeaturedPools = async () => {
      try {
        const response = await axios.get('/featured-pools');
        setPools(response.data.data);
      } catch (error) {
        console.error('Failed to fetch featured pools:', error);
      }
    };

    fetchFeaturedPools();
  }, []);

  return (
    <section className="my-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="section-title text-[#173347]">Featured Pools</h2>
        <Link href="/pool-listings" className="text-sm font-semibold text-[#006877] hover:underline">
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {pools.length === 0 && (
          <div className="panel col-span-full p-6 text-center">
            <p className="muted text-sm">No featured pools available yet.</p>
          </div>
        )}
        {pools.map((pool) => (
          <Link
            key={pool._id as string}
            href={`/pool/${pool._id}`}
            className="panel group overflow-hidden transition-transform duration-200 hover:-translate-y-1"
          >
            <img
              src={pool.images?.[0] || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60'}
              alt={pool.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl text-[#173347]">{pool.title}</h3>
              <p className="muted mt-2 text-sm">{pool.description}</p>
              <p className="mt-4 text-sm font-bold text-[#006877]">From ${pool.price}/day</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPools;
