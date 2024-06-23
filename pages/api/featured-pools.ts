import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../lib/mongoose';
import Pool from '../../models/Pool';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await mongoose();
  try {
    const featuredPools = await Pool.find({ /* Add criteria for featured pools if necessary */ }).limit(10);
    res.status(200).json({ success: true, data: featuredPools });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}