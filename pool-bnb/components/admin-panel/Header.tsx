import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link legacyBehavior href="/admin-panel">
          <a className="text-xl font-bold">Admin Panel</a>
        </Link>
        <nav>
          <Link legacyBehavior href="/admin-dashboard">
            <a className="px-4">Dashboard</a>
          </Link>
          <Link legacyBehavior href="/">
            <a className="px-4">Home</a>
          </Link>
        </nav>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded"
          />
          <button className="bg-blue-500 text-white p-2 rounded ml-2">Go</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
