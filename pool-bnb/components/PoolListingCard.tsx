import React from 'react';
import Link from 'next/link';

interface PoolListingCardProps {
  pool: {
    _id: string;
    title: string;
    location: string;
    price: number;
    images: string[];
    rating?: number;
  };
}

const PoolListingCard: React.FC<PoolListingCardProps> = ({ pool }) => {
  return (
    <article className="panel overflow-hidden">
      <img
        src={pool.images?.[0] || 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=60'}
        alt={pool.title}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-2 p-5">
        <h3 className="text-xl text-[#173347]">{pool.title}</h3>
        <p className="text-sm font-medium text-[#4a5e70]">{pool.location}</p>
        <p className="text-sm font-bold text-[#006877]">${pool.price} / day</p>
        {pool.rating && <p className="text-sm text-[#4a5e70]">Guest rating: {pool.rating}</p>}
        <Link href={`/pool/${pool._id}`} className="btn-primary mt-2 inline-block text-sm">
          View Details
        </Link>
      </div>
    </article>
  );
};

export default PoolListingCard;
