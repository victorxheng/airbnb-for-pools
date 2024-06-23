import React, { useEffect, useState } from 'react';
import axios from '../../lib/axios';

const BookingManagement: React.FC = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get('/admin/bookings');
      setBookings(response.data.data);
    };
    fetchBookings();
  }, []);

  const handleBookingStatus = async (bookingId: string, status: 'Confirmed' | 'Cancelled') => {
    try {
      await axios.post(`/admin/bookings/${bookingId}/status`, { status });
      setBookings(bookings.map((booking) => (booking._id === bookingId ? { ...booking, status } : booking)));
    } catch (error) {
      console.error('Error updating booking status', error);
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Booking Management</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((booking, index) => (
          <div key={index} className="border p-4">
            <h3 className="text-xl font-bold mb-2">{booking.pool.title}</h3>
            <p className="mb-2">Guest: {booking.guest.name}</p>
            <p className="mb-2">Date: {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</p>
            <p className="mb-4">Status: {booking.status}</p>
            <div className="flex justify-between">
              <button className="bg-green-500 text-white p-2 rounded" onClick={() => handleBookingStatus(booking._id, 'Confirmed')}>Confirm</button>
              <button className="bg-red-500 text-white p-2 rounded" onClick={() => handleBookingStatus(booking._id, 'Cancelled')}>Cancel</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingManagement;
