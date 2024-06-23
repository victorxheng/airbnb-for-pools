import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../lib/mongoose';
import Booking from '../../../models/Booking';
import { verifyToken } from '../../../lib/jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  await mongoose();

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded || decoded.role !== 'Owner') {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  const { bookingId, action } = req.body;

  if (!['approve', 'decline'].includes(action)) {
    return res.status(400).json({ success: false, error: 'Invalid action' });
  }

  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ success: false, error: 'Booking not found' });
    }

    if (booking.status !== 'Pending') {
      return res.status(400).json({ success: false, error: 'Booking already processed' });
    }

    booking.status = action === 'approve' ? 'Confirmed' : 'Cancelled';
    await booking.save();

    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}