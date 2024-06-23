import React from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/auth';

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        {user?.role === 'Owner' ? (
          <>
            <Link href="/dashboard/add-pool">
              <a className="block py-2 px-4 rounded hover:bg-gray-700">Add Pool</a>
            </Link>
            <Link href="/dashboard/manage-pools">
              <a className="block py-2 px-4 rounded hover:bg-gray-700">Manage Pools</a>
            </Link>
            <Link href="/dashboard/booking-requests">
              <a className="block py-2 px-4 rounded hover:bg-gray-700">Booking Requests</a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard/my-bookings">
              <a className="block py-2 px-4 rounded hover:bg-gray-700">My Bookings</a>
            </Link>
            <Link href="/dashboard/active-bookings">
              <a className="block py-2 px-4 rounded hover:bg-gray-700">Active Bookings</a>
            </Link>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
