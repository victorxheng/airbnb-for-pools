import React from 'react';
import Link from 'next/link';
import useAuth from '../lib/auth';

const Sidebar: React.FC = () => {
  const { user } = useAuth();

  return (
    <aside className="panel h-fit p-4 md:p-5 lg:sticky lg:top-24">
      <div>
        <h2 className="mb-4 text-xl text-[#173347]">Navigation</h2>
        {user?.role === 'Owner' ? (
          <>
            <Link href="/dashboard/add-pool" className="mb-2 block rounded-xl px-4 py-2.5 text-sm font-semibold text-[#3b4e5f] transition hover:bg-[#f0ead8] hover:text-[#173347]">
              Add Pool
            </Link>
            <Link href="/dashboard/manage-pools" className="mb-2 block rounded-xl px-4 py-2.5 text-sm font-semibold text-[#3b4e5f] transition hover:bg-[#f0ead8] hover:text-[#173347]">
              Manage Pools
            </Link>
            <Link href="/dashboard/booking-requests" className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-[#3b4e5f] transition hover:bg-[#f0ead8] hover:text-[#173347]">
              Booking Requests
            </Link>
          </>
        ) : (
          <>
            <Link href="/dashboard/my-bookings" className="mb-2 block rounded-xl px-4 py-2.5 text-sm font-semibold text-[#3b4e5f] transition hover:bg-[#f0ead8] hover:text-[#173347]">
              My Bookings
            </Link>
            <Link href="/dashboard/active-bookings" className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-[#3b4e5f] transition hover:bg-[#f0ead8] hover:text-[#173347]">
              Active Bookings
            </Link>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
