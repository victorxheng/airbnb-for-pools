import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../lib/mongoose';
import User from '../../../models/User';
import { verifyToken } from '../../../lib/jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  await mongoose();

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  const { name, email, password } = req.body;

  try {
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.password = password; // Assuming password hashing will be handled in a pre-save hook
    }

    await user.save();

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server Error' });
  }
}