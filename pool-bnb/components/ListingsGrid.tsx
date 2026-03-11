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
  if (pools.length === 0) {
    return (
      <div className="panel p-8 text-center">
        <p className="muted">No pools match your current filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {pools.map(pool => (
        <PoolListingCard key={pool._id} pool={pool} />
      ))}
    </div>
  );
};

export default ListingsGrid;
