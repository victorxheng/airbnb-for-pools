import React from 'react';
import PoolListingCard from './PoolListingCard';

interface ListingsGridProps {
  pools: Array<{
    _id: string;
    title: string;
    location: string;
    price: number;
    images: string[];
    rating?: number;
  }>
}

const ListingsGrid: React.FC<ListingsGridProps> = ({ pools }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {pools.map(pool => (
        <PoolListingCard key={pool._id} pool={pool} />
      ))}
    </div>
  );
};

export default ListingsGrid;
