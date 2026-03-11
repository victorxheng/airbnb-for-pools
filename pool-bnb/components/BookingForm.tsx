import React, { useState } from 'react';

const BookingForm: React.FC<{ onBookingDetailsChange: (details: any) => void }> = ({ onBookingDetailsChange }) => {
  const [poolId, setPoolId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guestId, setGuestId] = useState('');

  const updateBookingDetails = (next: { poolId?: string; startDate?: string; endDate?: string; guestId?: string }) => {
    const updated = {
      poolId: next.poolId ?? poolId,
      startDate: next.startDate ?? startDate,
      endDate: next.endDate ?? endDate,
      guestId: next.guestId ?? guestId,
    };

    onBookingDetailsChange(updated);
  };

  return (
    <section className="panel p-6 md:p-7">
      <h2 className="mb-4 text-2xl text-[#173347]">Booking Details</h2>
      <div className="mb-4">
        <label className="field-label">Pool ID</label>
        <input
          type="text"
          value={poolId}
          onChange={(e) => {
            const next = e.target.value;
            setPoolId(next);
            updateBookingDetails({ poolId: next });
          }}
          className="field-input"
        />
      </div>
      <div className="mb-4">
        <label className="field-label">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            const next = e.target.value;
            setStartDate(next);
            updateBookingDetails({ startDate: next });
          }}
          className="field-input"
        />
      </div>
      <div className="mb-4">
        <label className="field-label">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            const next = e.target.value;
            setEndDate(next);
            updateBookingDetails({ endDate: next });
          }}
          className="field-input"
        />
      </div>
      <div className="mb-4">
        <label className="field-label">Guest ID</label>
        <input
          type="text"
          value={guestId}
          onChange={(e) => {
            const next = e.target.value;
            setGuestId(next);
            updateBookingDetails({ guestId: next });
          }}
          className="field-input"
        />
      </div>
    </section>
  );
};

export default BookingForm;
