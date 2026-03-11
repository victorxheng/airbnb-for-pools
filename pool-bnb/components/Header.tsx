import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-[#d7d2c6]/70 bg-[#fffdf8]/90 backdrop-blur">
      <div className="content-wrap flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#163347]">
          PoolBnB
        </Link>
        <nav className="flex items-center gap-2 text-sm font-semibold text-[#344353]">
          <Link href="/pool-listings" className="rounded-full px-4 py-2 hover:bg-[#f0ead8]">
            Browse Pools
          </Link>
          <Link href="/contact" className="rounded-full px-4 py-2 hover:bg-[#f0ead8]">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/user-auth" className="btn-ghost text-sm">
            Login
          </Link>
          <Link href="/user-auth" className="btn-primary text-sm">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
