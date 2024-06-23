import React from 'react';

interface BookingSectionProps {
  startDate: string;
  endDate: string;
  price: number;
  onBookNow: () => void;
}

const BookingSection: React.FC<BookingSectionProps> = ({ startDate, endDate, price, onBookNow }) => {
  const days = (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24);
  const totalPrice = days * price;

  return (
    <div className="booking-section">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
      <p className="mb-2"><strong>From:</strong> {startDate}</p>
      <p className="mb-2"><strong>To:</strong> {endDate}</p>
      <p className="mb-2"><strong>Total Price:</strong> ${totalPrice}</p>
      <button onClick={onBookNow} className="bg-blue-500 text-white p-2 rounded mt-4">Book Now</button>
    </div>
  );
};

export default BookingSection;
