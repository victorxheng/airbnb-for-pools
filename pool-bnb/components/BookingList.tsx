import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';

interface BookingItem {
  _id: string;
  startDate: string;
  endDate: string;
  status: string;
  pool: {
    title: string;
  };
}

const BookingList: React.FC = () => {
  const [bookings, setBookings] = useState<BookingItem[]>([]);

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

  const getStatusClass = (status: string) => {
    const normalized = status.toLowerCase();
    if (normalized.includes('confirm')) return 'status-pill confirmed';
    if (normalized.includes('cancel')) return 'status-pill cancelled';
    return 'status-pill pending';
  };

  return (
    <section className="panel p-6 md:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-2xl text-[#173347]">My Bookings</h2>
        <p className="rounded-full bg-[#f0ead8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3b4e5f]">
          {bookings.length} total
        </p>
      </div>
      {bookings.length === 0 && (
        <div className="rounded-xl border border-dashed border-[#d7d2c6] bg-[#fffdf8] p-5 text-sm text-[#556473]">
          You do not have any bookings yet.
        </div>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {bookings.map((booking, index) => (
          <article key={index} className="rounded-2xl border border-[#d7d2c6] bg-white p-4 shadow-sm">
            <h3 className="text-lg font-semibold text-[#173347]">{booking.pool.title}</h3>
            <p className="mt-2 text-sm text-[#556473]">{`From: ${booking.startDate}`}</p>
            <p className="text-sm text-[#556473]">{`To: ${booking.endDate}`}</p>
            <div className="mt-3">
              <span className={getStatusClass(booking.status)}>{booking.status}</span>
            </div>
            <div className="mt-4">
              <button className="rounded-full bg-[#d34b4b] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#b53a3a]" onClick={() => handleCancel(booking._id)}>Cancel</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BookingList;
