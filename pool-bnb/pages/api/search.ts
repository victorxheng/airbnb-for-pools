import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../lib/mongoose';
import Pool from '../../models/Pool';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await mongoose();
  const { query } = req;
  try {
    const pools = await Pool.find({
      $or: [
        { title: { $regex: query.q, $options: 'i' } },
        { description: { $regex: query.q, $options: 'i' } },
        { location: { $regex: query.q, $options: 'i' } }
      ]
    });
    res.status(200).json({ success: true, data: pools });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}