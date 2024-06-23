import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';

const BookingList: React.FC = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get('/dashboard/bookings');
      setBookings(response.data.data);
    };
    fetchBookings();
  }, []);

  const handleCancel = async (bookingId: string) => {
    // Implement cancel logic here
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((booking, index) => (
          <div key={index} className="border p-4">
            <h3 className="text-xl font-bold">{booking.pool.title}</h3>
            <p>{`From: ${booking.startDate} To: ${booking.endDate}`}</p>
            <p>{`Status: ${booking.status}`}</p>
            <div className="mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleCancel(booking._id)}>Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingList;
