import React, { useState } from 'react';
import axios from '../lib/axios';

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'Owner' | 'Guest'>('Guest');
  const [name, setName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post('/auth/register', { email, password, role, name });
      console.log('Registration successful', response.data);
      // Handle successful registration (e.g., redirect to login)
    } catch (error) {
      console.error('Registration failed', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-1/2 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700">Role:</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value as 'Owner' | 'Guest')}
          className="w-full p-2 border border-gray-300 rounded mt-1"
          required
        >
          <option value="Guest">Guest</option>
          <option value="Owner">Pool Owner</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name (optional):</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
    </form>
  );
};

export default RegistrationForm;
