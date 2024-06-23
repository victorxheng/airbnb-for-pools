import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../../lib/mongoose';
import Pool from '../../../../models/Pool';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await mongoose();

  const { pool_id } = req.query;
  const { startDate, endDate } = req.body;

  try {
    const pool = await Pool.findById(pool_id);
    if (!pool) {
      return res.status(404).json({ success: false, error: 'Pool not found' });
    }

    const isAvailable = pool.availability.some((period: any) => {
      return (
        new Date(startDate) >= new Date(period.startDate) &&
        new Date(endDate) <= new Date(period.endDate)
      );
    });

    res.status(200).json({ success: true, data: { isAvailable } });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}