import React, { useState } from 'react';
import axios from '../lib/axios';

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'Owner' | 'Guest'>('Guest');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('/auth/register', { email, password, role, name });
      console.log('Registration successful', response.data);
      // Handle successful registration (e.g., redirect to login)
    } catch (error: any) {
      console.error('Registration failed', error?.response?.data || error);
      setErrorMessage('Unable to create account right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="field-label">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field-input"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="field-label">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="field-input"
          required
        />
      </div>
      <div>
        <label htmlFor="confirm-password" className="field-label">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="field-input"
          required
        />
      </div>
      <div>
        <label htmlFor="role" className="field-label">Role</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value as 'Owner' | 'Guest')}
          className="field-input"
          required
        >
          <option value="Guest">Guest</option>
          <option value="Owner">Pool Owner</option>
        </select>
      </div>
      <div>
        <label htmlFor="name" className="field-label">Name (optional)</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field-input"
        />
      </div>
      {errorMessage && (
        <p className="rounded-xl border border-[#f1c5c5] bg-[#fde8e8] px-3 py-2 text-sm text-[#8f2f2f]">{errorMessage}</p>
      )}
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? 'Creating account...' : 'Create account'}
      </button>
    </form>
  );
};

export default RegistrationForm;
