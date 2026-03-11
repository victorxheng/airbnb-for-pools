import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import IntroductionSection from '../components/IntroductionSection';
import SearchBar from '../components/SearchBar';
import FeaturedPools from '../components/FeaturedPools';
import PopularLocations from '../components/PopularLocations';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="site-shell">
      <Head>
        <title>PoolBnB | Private Pool Rentals</title>
        <meta name="description" content="Find and book the best pools in your area or list your pool for others to enjoy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="content-wrap flex-1 pb-2">
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
