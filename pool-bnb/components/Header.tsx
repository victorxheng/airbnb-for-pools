import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link legacyBehavior href="/">
          <a className="text-xl font-bold">Airbnb for Pools</a>
        </Link>
        <nav>
          <Link legacyBehavior href="/pools">
            <a className="px-4">Pools</a>
          </Link>
          <Link legacyBehavior href="/contact">
            <a className="px-4">Contact Us</a>
          </Link>
        </nav>
        <div>
          <Link legacyBehavior href="/user-auth">
            <a className="px-4">Login</a>
          </Link>
          <Link legacyBehavior href="/user-auth">
            <a className="px-4">Register</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
