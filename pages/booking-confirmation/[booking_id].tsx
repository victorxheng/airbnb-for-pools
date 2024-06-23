import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import BookingDetails from '../../components/BookingDetails';
import SuccessMessage from '../../components/SuccessMessage';
import BackToDashboardButton from '../../components/BackToDashboardButton';
import Footer from '../../components/Footer';
import axios from '../../lib/axios';

const BookingConfirmation: React.FC = () => {
  const router = useRouter();
  const { booking_id } = router.query;

  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (booking_id) {
        const response = await axios.get(`/booking/${booking_id}/details`);
        setBooking(response.data.data);
      }
    };
    fetchBookingDetails();
  }, [booking_id]);

  if (!booking) return <div>Loading...</div>;

  return (
    <div>
      <Head>
        <title>Booking Confirmation</title>
        <meta name="description" content="Booking confirmation page on Airbnb for Pools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8">
        <SuccessMessage />
        <BookingDetails booking={booking} />
        <BackToDashboardButton />
      </main>
      <Footer />
    </div>
  );
};

export default BookingConfirmation;
