import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import TabsControl from '../components/TabsControl';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';

const UserAuth: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  return (
    <div className="site-shell">
      <Head>
        <title>Login or Register | PoolBnB</title>
        <meta name="description" content="Sign in to book private pools or create an owner account on PoolBnB." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="content-wrap flex-1 py-8">
        <section className="auth-shell">
          <div className="bg-gradient-to-br from-[#173347] to-[#006877] px-6 py-8 text-white md:px-8 md:py-10">
            <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide">PoolBnB access</p>
            <h1 className="mt-4 text-3xl md:text-4xl">Manage bookings and host listings in one place.</h1>
            <p className="mt-4 text-sm text-white/85 md:text-base">
              Guests can book faster, and owners can track listing performance from a single dashboard.
            </p>
          </div>
          <div className="px-5 py-6 md:px-8 md:py-8">
            <div className="mb-5 flex justify-center">
              <TabsControl onTabChange={handleTabChange} />
            </div>
            <h2 className="mb-4 text-center text-2xl text-[#173347]">{activeTab === 'login' ? 'Welcome back' : 'Create your account'}</h2>
            {activeTab === 'login' ? <LoginForm /> : <RegistrationForm />}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UserAuth;
