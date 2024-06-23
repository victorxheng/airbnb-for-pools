import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import PaymentSection from '../components/PaymentSection';
import ConfirmButton from '../components/ConfirmButton';
import Footer from '../components/Footer';
import axios from '../lib/axios';
import Link from 'next/link';

const BookingPage: React.FC = () => {
  const [bookingDetails, setBookingDetails] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({});

  const handleConfirmBooking = async () => {
    try {
      const response = await axios.post('/booking/confirm', {
        ...bookingDetails,
        ...paymentDetails,
      });
      console.log('Booking successful', response.data);
      // Handle successful booking (e.g., redirect to confirmation page)
    } catch (error) {
      console.error('Booking failed', error);
    }
  };

  return (
    <div>
      <Head>
        <title>Booking - Airbnb for Pools</title>
        <meta name="description" content="Complete your booking on Airbnb for Pools" />
        <Link legacyBehavior rel="icon" href="/favicon.ico"><a></a></Link>
      </Head>

      <Header />
      <main className="container mx-auto px-4 py-8">
        <BookingForm onBookingDetailsChange={setBookingDetails} />
        <PaymentSection onPaymentDetailsChange={setPaymentDetails} />
        <ConfirmButton onConfirm={handleConfirmBooking} />
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
