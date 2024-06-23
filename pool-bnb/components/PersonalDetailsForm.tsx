import React, { useEffect, useState } from 'react';
import axios from '../lib/axios';
import useAuth from '../lib/auth';

const PersonalDetailsForm: React.FC = () => {
  const { user, loading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSave = async () => {
    try {
      await axios.post('/user/profile/update', { name, email, password });
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile', error.response.data);
      alert('Failed to update profile');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="personal-details-form">
      <h2 className="text-2xl font-bold mb-4">Personal Details</h2>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border" />
      </div>
      <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">Save</button>
    </div>
  );
};

export default PersonalDetailsForm;
