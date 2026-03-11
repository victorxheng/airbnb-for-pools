import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="site-shell">
      <Head>
        <title>Contact | PoolBnB</title>
        <meta name="description" content="Contact PoolBnB support for booking and host questions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="content-wrap flex-1 py-10">
        <section className="panel mx-auto max-w-2xl p-6 md:p-8">
          <h1 className="text-3xl text-[#173347]">Contact Us</h1>
          <p className="muted mt-3">
            Questions about bookings, hosting, or account access? Reach us and we will respond within one business day.
          </p>
          <div className="mt-6 grid gap-3 text-sm">
            <a className="rounded-xl border border-[#d7d2c6] bg-white p-3" href="mailto:support@poolbnb.com">
              support@poolbnb.com
            </a>
            <a className="rounded-xl border border-[#d7d2c6] bg-white p-3" href="tel:+18005551234">
              +1 (800) 555-1234
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
