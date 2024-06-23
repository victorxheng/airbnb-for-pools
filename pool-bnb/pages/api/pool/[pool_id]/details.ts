import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../../lib/mongoose';
import Pool from '../../../../models/Pool';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await mongoose();

  const { pool_id } = req.query;

  try {
    const pool = await Pool.findById(pool_id);
    if (!pool) {
      return res.status(404).json({ success: false, error: 'Pool not found' });
    }
    res.status(200).json({ success: true, data: pool });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}