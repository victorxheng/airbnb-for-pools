import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../lib/mongoose';
import Transaction from '../../../models/Transaction';
import { verifyToken } from '../../../lib/jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await mongoose();

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  try {
    const transactions = await Transaction.find({ user: decoded.id });
    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}