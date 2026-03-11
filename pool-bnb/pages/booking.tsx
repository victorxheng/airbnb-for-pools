import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import PaymentSection from '../components/PaymentSection';
import ConfirmButton from '../components/ConfirmButton';
import Footer from '../components/Footer';
import axios from '../lib/axios';

const BookingPage: React.FC = () => {
  const [bookingDetails, setBookingDetails] = useState<Record<string, string>>({});
  const [paymentDetails, setPaymentDetails] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleConfirmBooking = async () => {
    setMessage('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('/booking/confirm', {
        ...bookingDetails,
        ...paymentDetails,
      });
      console.log('Booking successful', response.data);
      setMessage('Booking confirmed successfully.');
    } catch (error) {
      console.error('Booking failed', error);
      setMessage('Booking failed. Please check your details and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-shell">
      <Head>
        <title>Booking | PoolBnB</title>
        <meta name="description" content="Finalize your private pool booking details and payment." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="content-wrap flex-1 py-8">
        <section className="panel mb-5 p-6 md:p-7">
          <h1 className="text-3xl text-[#173347]">Complete Your Booking</h1>
          <p className="muted mt-2 text-sm md:text-base">
            Add your booking details, choose payment, and confirm your reservation.
          </p>
        </section>
        <div className="grid gap-5 lg:grid-cols-2">
          <BookingForm onBookingDetailsChange={setBookingDetails} />
          <PaymentSection onPaymentDetailsChange={setPaymentDetails} />
        </div>
        <div className="panel mt-5 p-5 md:p-6">
          {message && (
            <p className="mb-3 text-sm font-semibold text-[#173347]">{message}</p>
          )}
          <div className={isSubmitting ? 'pointer-events-none opacity-70' : ''}>
            <ConfirmButton onConfirm={handleConfirmBooking} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
