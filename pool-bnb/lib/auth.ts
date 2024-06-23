import axios from './axios';
import { useEffect, useState } from 'react';
import { IUser } from '@/models/User';

const useAuth = () => {
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/auth/user');
        setUser(response.data.user);
      } catch (error) {
        
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return { user, loading };
};

export default useAuth;
