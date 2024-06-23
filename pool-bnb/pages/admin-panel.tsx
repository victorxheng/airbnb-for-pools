import React from 'react';
import Head from 'next/head';
import Header from '../components/admin-panel/Header';
import Sidebar from '../components/admin-panel/Sidebar';
import PendingListings from '../components/admin-panel/PendingListings';
import UserManagement from '../components/admin-panel/UserManagement';
import BookingManagement from '../components/admin-panel/BookingManagement';
import Footer from '../components/admin-panel/Footer';
import useAuth  from '../lib/auth';
import Link from 'next/link';

const AdminPanel: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user || (user as { role: string }).role !== 'admin') return <div>Unauthorized</div>;

  return (
    <div>
      <Head>
        <title>Admin Panel - Airbnb for Pools</title>
        <meta name="description" content="Admin panel for managing Airbnb for Pools" />
        <Link legacyBehavior rel="icon" href="/favicon.ico"><a></a></Link>
      </Head>

      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <PendingListings />
          <UserManagement />
          <BookingManagement />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;
