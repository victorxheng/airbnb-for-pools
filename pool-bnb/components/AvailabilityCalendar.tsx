import React, { useState } from 'react';
import axios from '../lib/axios';

interface AvailabilityCalendarProps {
  poolId: string;
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({ poolId }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const checkAvailability = async () => {
    try {
      const response = await axios.post(`/pool/${poolId}/availability`, { startDate, endDate });
      setIsAvailable(response.data.data.isAvailable);
    } catch (error) {
      console.error('Error checking availability:', error);
    }
  };

  return (
    <div className="availability-calendar">
      <h2 className="text-2xl font-bold mb-4">Check Availability</h2>
      <div className="flex mb-4">
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="border p-2 mr-4" />
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="border p-2" />
      </div>
      <button onClick={checkAvailability} className="bg-blue-500 text-white p-2 rounded">Check Availability</button>
      {isAvailable !== null && (
        <p className="mt-4">{isAvailable ? 'The pool is available for the selected dates.' : 'The pool is not available for the selected dates.'}</p>
      )}
    </div>
  );
};

export default AvailabilityCalendar;
