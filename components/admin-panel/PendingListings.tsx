import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios';

const PendingListings: React.FC = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const response = await axios.get('/admin/listings/pending');
      setListings(response.data.data);
    };
    fetchListings();
  }, []);

  const handleListingStatus = async (listingId: string, status: 'Approved' | 'Rejected') => {
    try {
      await axios.post(`/admin/listings/${listingId}/status`, { status });
      setListings(listings.filter((listing) => listing._id !== listingId));
    } catch (error) {
      console.error('Error updating listing status', error);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Pending Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listings.map((listing, index) => (
          <div key={index} className="border p-4">
            <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
            <p className="mb-4">{listing.description}</p>
            <div className="flex justify-between">
              <button className="bg-green-500 text-white p-2 rounded" onClick={() => handleListingStatus(listing._id, 'Approved')}>Approve</button>
              <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleListingStatus(listing._id, 'Rejected')}>Reject</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PendingListings;
