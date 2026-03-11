import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ListingsGrid from '../components/ListingsGrid';
import Footer from '../components/Footer';
import axios from '../lib/axios';

interface ListingPool {
  _id: string;
  title: string;
  location: string;
  price: number;
  images: string[];
  rating?: number;
}

const PoolListings: React.FC = () => {
  const router = useRouter();
  const initialLocation = typeof router.query.location === 'string' ? router.query.location : '';
  const [pools, setPools] = useState<ListingPool[]>([]);
  const [filters, setFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    const locationParam = router.query.location;
    if (typeof locationParam === 'string' && locationParam.trim()) {
      setFilters((current) => ({
        ...current,
        location: locationParam,
      }));
    }
  }, [router.isReady, router.query.location]);

  useEffect(() => {
    const fetchPools = async () => {
      const response = await axios.get('/pool-listings', { params: filters });
      setPools(response.data.data);
    };
    fetchPools();
  }, [filters]);

  return (
    <div className="site-shell">
      <Head>
        <title>Pool Listings | PoolBnB</title>
        <meta name="description" content="Browse pool listings on Airbnb for Pools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="content-wrap grid flex-1 grid-cols-1 gap-5 py-8 md:grid-cols-[290px_1fr]">
        <Filters onFilterChange={setFilters} initialLocation={initialLocation} />
        <main>
          <h1 className="mb-4 text-3xl text-[#173347]">Pool Listings</h1>
          <ListingsGrid pools={pools} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PoolListings;
