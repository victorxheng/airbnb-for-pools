import React, { useState } from 'react';

const BookingForm: React.FC<{ onBookingDetailsChange: (details: any) => void }> = ({ onBookingDetailsChange }) => {
  const [poolId, setPoolId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guestId, setGuestId] = useState('');

  const handleFormChange = () => {
    onBookingDetailsChange({ poolId, startDate, endDate, guestId });
  };

  return (
    <div className="booking-form">
      <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
      <div className="mb-4">
        <label className="block mb-2">Pool ID</label>
        <input type="text" value={poolId} onChange={(e) => { setPoolId(e.target.value); handleFormChange(); }} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Start Date</label>
        <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); handleFormChange(); }} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">End Date</label>
        <input type="date" value={endDate} onChange={(e) => { setEndDate(e.target.value); handleFormChange(); }} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Guest ID</label>
        <input type="text" value={guestId} onChange={(e) => { setGuestId(e.target.value); handleFormChange(); }} className="w-full p-2 border" />
      </div>
    </div>
  );
};

export default BookingForm;
