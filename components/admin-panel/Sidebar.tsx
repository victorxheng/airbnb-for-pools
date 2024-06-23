import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Admin Tasks</h2>
        <nav>
          <Link href="/admin-panel/listings/pending">
            <a className="block py-2 px-4 rounded hover:bg-gray-700">Pending Listings</a>
          </Link>
          <Link href="/admin-panel/users">
            <a className="block py-2 px-4 rounded hover:bg-gray-700">User Management</a>
          </Link>
          <Link href="/admin-panel/bookings">
            <a className="block py-2 px-4 rounded hover:bg-gray-700">Booking Management</a>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
