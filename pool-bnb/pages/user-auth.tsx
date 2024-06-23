import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import TabsControl from '../components/TabsControl';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';
import Link from 'next/link';

const UserAuth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Head>
        <title>User Authentication - Airbnb for Pools</title>
        <meta name="description" content="Login or register to use Airbnb for Pools" />
        <Link legacyBehavior rel="icon" href="/favicon.ico"><a></a></Link>
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <TabsControl onTabChange={handleTabChange} />
        {activeTab === 'login' ? <LoginForm /> : <RegistrationForm />}
      </main>

      <Footer />
    </div>
  );
};

export default UserAuth;
