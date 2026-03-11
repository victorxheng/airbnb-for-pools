import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainSection from '../components/MainSection';
import PoolListings from '../components/PoolListings';
import BookingList from '../components/BookingList';
import ActivitySummary from '../components/ActivitySummary';
import Footer from '../components/Footer';
import useAuth from '../lib/auth';
import Link from 'next/link';

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="site-shell">
        <Header />
        <main className="content-wrap flex-1 py-10">
          <section className="panel p-8 text-center">
            <p className="muted">Loading dashboard...</p>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="site-shell">
        <Header />
        <main className="content-wrap flex-1 py-10">
          <section className="panel p-8 text-center">
            <h1 className="text-2xl text-[#173347]">Please sign in to view your dashboard.</h1>
            <p className="muted mt-2">You need an active account session to manage bookings and listings.</p>
            <Link href="/user-auth" className="btn-primary mt-5 inline-flex">
              Go to Login
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <Head>
        <title>Dashboard | PoolBnB</title>
        <meta name="description" content="Manage your PoolBnB listings and reservations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="content-wrap grid flex-1 grid-cols-1 gap-5 py-8 lg:grid-cols-[260px_1fr]">
        <Sidebar />
        <MainSection userRole={user.role}>
          {user && user.role === 'Owner' ? <PoolListings /> : <BookingList />}
          <ActivitySummary />
        </MainSection>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
