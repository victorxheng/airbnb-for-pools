import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../../lib/mongoose';
import Booking from '../../../../models/Booking';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await mongoose();

  const { booking_id } = req.query;

  try {
    const booking = await Booking.findById(booking_id).populate('pool').populate('guest');
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }
    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}