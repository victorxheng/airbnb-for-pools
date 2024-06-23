import type { NextApiRequest, NextApiResponse } from 'next';
import { createCharge } from '../../../lib/stripe';
import mongoose from '../../../lib/mongoose';
import Booking from '../../../models/Booking';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  await mongoose();

  const { poolId, startDate, endDate, totalPrice, paymentMethodId, guestId } = req.body;

  try {
    // Process payment
    const charge = await createCharge(totalPrice, 'usd', paymentMethodId, `Booking for pool ${poolId}`);

    // Create booking record
    const newBooking = await Booking.create({
      pool: poolId,
      guest: guestId,
      startDate,
      endDate,
      totalPrice,
      status: 'Confirmed',
    });

    res.status(201).json({ success: true, data: newBooking });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}