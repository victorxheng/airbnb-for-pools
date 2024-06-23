import React from 'react';

interface PoolInformationProps {
  title: string;
  description: string;
  location: string;
  amenities: string[];
  price: number;
}

const PoolInformation: React.FC<PoolInformationProps> = ({ title, description, location, amenities, price }) => {
  return (
    <div className="pool-information">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-4">{description}</p>
      <p className="text-lg mb-4"><strong>Location:</strong> {location}</p>
      <p className="text-lg mb-4"><strong>Amenities:</strong> {amenities.join(', ')}</p>
      <p className="text-lg mb-4"><strong>Price:</strong> ${price} per day</p>
    </div>
  );
};

export default PoolInformation;
