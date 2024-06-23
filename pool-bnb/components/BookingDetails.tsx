import React from 'react';

interface BookingDetailsProps {
  booking: {
    pool: {
      title: string;
      location: string;
    };
    startDate: string;
    endDate: string;
    totalPrice: number;
    status: string;
  };
}

const BookingDetails: React.FC<BookingDetailsProps> = ({ booking }) => {
  return (
    <div className="booking-details">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
      <p><strong>Pool:</strong> {booking.pool.title}</p>
      <p><strong>Location:</strong> {booking.pool.location}</p>
      <p><strong>From:</strong> {booking.startDate}</p>
      <p><strong>To:</strong> {booking.endDate}</p>
      <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
      <p><strong>Status:</strong> {booking.status}</p>
    </div>
  );
};

export default BookingDetails;
