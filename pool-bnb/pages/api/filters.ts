import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../lib/mongoose';
import Pool from '../../models/Pool';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!(await mongoose())) {
    return res.status(503).json({ success: false, error: 'Database is not configured' });
  }

  try {
    const locations = await Pool.distinct('location');
    const amenities = await Pool.distinct('amenities');
    res.status(200).json({ success: true, data: { locations, amenities } });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}