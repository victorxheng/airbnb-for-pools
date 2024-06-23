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

const Dashboard: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>Unauthorized</div>;

  return (
    <div>
      <Head>
        <title>Dashboard - Airbnb for Pools</title>
        <meta name="description" content="User Dashboard for Airbnb for Pools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex">
        <Sidebar />
        <MainSection>
          {user.role === 'Owner' ? <PoolListings /> : <BookingList />}
          <ActivitySummary />
        </MainSection>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
