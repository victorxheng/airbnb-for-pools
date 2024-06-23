import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../../lib/mongoose';
import Booking from '../../../../models/Booking';
import { verifyToken } from '../../../../lib/jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  await mongoose();

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded || decoded.role !== 'admin') {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  const { booking_id } = req.query;
  const { status } = req.body;

  if (!['Confirmed', 'Cancelled'].includes(status)) {
    return res.status(400).json({ success: false, error: 'Invalid status' });
  }

  try {
    const booking = await Booking.findById(booking_id);
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }

    booking.status = status;
    await booking.save();

    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}