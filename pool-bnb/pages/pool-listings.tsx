import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ListingsGrid from '../components/ListingsGrid';
import Footer from '../components/Footer';
import axios from '../lib/axios';
import Link from 'next/link';

const PoolListings: React.FC = () => {
  const [pools, setPools] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchPools = async () => {
      const response = await axios.get('/pool-listings', { params: filters });
      setPools(response.data.data);
    };
    fetchPools();
  }, [filters]);

  return (
    <div>
      <Head>
        <title>Pool Listings - Airbnb for Pools</title>
        <meta name="description" content="Browse pool listings on Airbnb for Pools" />
        <Link legacyBehavior rel="icon" href="/favicon.ico"><a></a></Link>
      </Head>

      <Header />
      <div className="flex">
        <Filters onFilterChange={setFilters} />
        <main className="flex-1 p-8">
          <ListingsGrid pools={pools} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PoolListings;
