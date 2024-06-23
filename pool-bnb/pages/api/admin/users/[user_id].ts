import type { NextApiRequest, NextApiResponse } from 'next';
import mongoose from '../../../../lib/mongoose';
import User from '../../../../models/User';
import { verifyToken } from '../../../../lib/jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user_id } = req.query;

  await mongoose();

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded || decoded.role !== 'admin') {
    return res.status(401).json({ success: false, error: 'Unauthorized' });
  }

  if (req.method === 'PUT') {
    const { name, email, role } = req.body;

    try {
      const user = await User.findById(user_id);
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }

      user.name = name || user.name;
      user.email = email || user.email;
      user.role = role || user.role;

      await user.save();

      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await User.findByIdAndDelete(user_id);
      res.status(200).json({ success: true, message: 'User account deleted successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}