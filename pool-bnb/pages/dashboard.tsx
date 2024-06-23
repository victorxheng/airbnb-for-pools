import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MainSection from '../components/MainSection'; // Add this import statement
import PoolListings from '../components/PoolListings';
import BookingList from '../components/BookingList';
import ActivitySummary from '../components/ActivitySummary';
import Footer from '../components/Footer';
import useAuth from '../lib/auth';
import Link from 'next/link';

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>Unauthorized</div>;

  return (
    <div>
      <Head>
        <title>Dashboard - Airbnb for Pools</title>
        <meta name="description" content="User Dashboard for Airbnb for Pools" />
        <Link legacyBehavior rel="icon" href="/favicon.ico"><a></a></Link>
      </Head>

      <Header />
      <div className="flex">
        <Sidebar />
        <MainSection>
          {user && user.role === 'Owner' ? <PoolListings /> : <BookingList />}
          <ActivitySummary />
        </MainSection>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
