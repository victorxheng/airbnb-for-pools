import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../../lib/mongoose';
import Pool from '../../../../models/Pool';
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

  const { listing_id } = req.query;
  const { status } = req.body;

  if (!['Approved', 'Rejected'].includes(status)) {
    return res.status(400).json({ success: false, error: 'Invalid status' });
  }

  try {
    const listing = await Pool.findById(listing_id);
    if (!listing) {
      return res.status(404).json({ success: false, error: 'Listing not found' });
    }

    listing.status = status;
    await listing.save();

    res.status(200).json({ success: true, data: listing });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}