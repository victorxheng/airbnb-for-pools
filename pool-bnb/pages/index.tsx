import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import IntroductionSection from '../components/IntroductionSection';
import SearchBar from '../components/SearchBar';
import FeaturedPools from '../components/FeaturedPools';
import PopularLocations from '../components/PopularLocations';
import Footer from '../components/Footer';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Airbnb for Pools</title>
        <meta name="description" content="Find and book the best pools in your area or list your pool for others to enjoy." />
        <Link legacyBehavior rel="icon" href="/favicon.ico"><a></a></Link>
      </Head>

      <Header />
      <main className="container mx-auto px-4">
        <IntroductionSection />
        <SearchBar />
        <FeaturedPools />
        <PopularLocations />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
