import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import PersonalDetailsForm from '../../components/PersonalDetailsForm';
import TransactionHistory from '../../components/TransactionHistory';
import Footer from '../../components/Footer';

const UserProfile: React.FC = () => {
  return (
    <div>
      <Head>
        <title>User Profile - Airbnb for Pools</title>
        <meta name="description" content="Edit your personal details and view transaction history on Airbnb for Pools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8">
        <PersonalDetailsForm />
        <TransactionHistory />
      </main>
      <Footer />
    </div>
  );
};

export default UserProfile;
