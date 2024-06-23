import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../lib/mongoose';
import Pool from '../../../models/Pool';
import { verifyToken } from '../../../lib/jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  await mongoose();

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded || decoded.role !== 'Owner') {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  const { title, description, location, amenities, price, images, availability } = req.body;

  try {
    const newPool = await Pool.create({
      owner: decoded.id,
      title,
      description,
      location,
      amenities,
      price,
      images,
      availability,
    });

    res.status(201).json({ success: true, data: newPool });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}