import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../lib/mongoose';
import Pool from '../../models/Pool';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await mongoose();

  const { location, date, priceRange, amenities } = req.query;

  const query: any = {};
  if (location) query.location = { $regex: location, $options: 'i' };
  if (date) query.availability = { $elemMatch: { startDate: { $lte: new Date(date as string) }, endDate: { $gte: new Date(date as string) } } };
  if (priceRange) {
    const [minPrice, maxPrice] = (priceRange as string).split('-');
    query.price = { $gte: Number(minPrice), $lte: Number(maxPrice) };
  }
  if (amenities) query.amenities = { $all: (amenities as string).split(',') };

  try {
    const pools = await Pool.find(query);
    res.status(200).json({ success: true, data: pools });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}