import React from 'react';

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
    <div className="border p-4 rounded">
      <img src={pool.images[0]} alt={pool.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-bold">{pool.title}</h3>
      <p>{pool.location}</p>
      <p>${pool.price}</p>
      {pool.rating && <p>Rating: {pool.rating}</p>}
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">View Details</button>
    </div>
  );
};

export default PoolListingCard;
