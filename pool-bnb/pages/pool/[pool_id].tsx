import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import PhotoGallery from '../../components/PhotoGallery';
import PoolInformation from '../../components/PoolInformation';
import AvailabilityCalendar from '../../components/AvailabilityCalendar';
import BookingSection from '../../components/BookingSection';
import Footer from '../../components/Footer';
import axios from '../../lib/axios';
import Link from 'next/link';

const PoolDetails: React.FC = () => {
  const router = useRouter();
  const { pool_id } = router.query;

  const [pool, setPool] = useState<any>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchPoolDetails = async () => {
      if (pool_id) {
        const response = await axios.get(`/pool/${pool_id}/details`);
        setPool(response.data.data);
      }
    };
    fetchPoolDetails();
  }, [pool_id]);

  const handleBookNow = () => {
    // Implementation for booking the pool
  };

  if (!pool) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>{pool.title} - Pool Details</title>
        <meta name="description" content={pool.description} />
        <Link legacyBehavior rel="icon" href="/favicon.ico"><a></a></Link>
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8">
        <PhotoGallery images={pool.images} />
        <PoolInformation
          title={pool.title}
          description={pool.description}
          location={pool.location}
          amenities={pool.amenities}
          price={pool.price}
        />
        <AvailabilityCalendar poolId={pool_id as string} />
        <BookingSection
          startDate={startDate}
          endDate={endDate}
          price={pool.price}
          onBookNow={handleBookNow}
        />
      </main>
      <Footer />
    </div>
  );
};

export default PoolDetails;
