import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../lib/mongoose';
import Pool from '../../../models/Pool';
import { verifyToken } from '../../../lib/jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!(await mongoose())) {
    return res.status(503).json({ success: false, error: 'Database is not configured' });
  }

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded || decoded.role !== 'Owner') {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  try {
    const pools = await Pool.find({ owner: decoded.id });
    res.status(200).json({ success: true, data: pools });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}