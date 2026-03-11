import React, { useState } from 'react';
import axios from '../lib/axios';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await axios.post('/auth/login', { email, password });
      console.log('Login successful', response.data);
      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      console.error('Login failed', error);
      setErrorMessage('Unable to log in with those credentials.');
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
      <div className="text-right">
        <a href="#" className="text-sm font-semibold text-[#006877] hover:underline">Forgot password?</a>
      </div>
      {errorMessage && (
        <p className="rounded-xl border border-[#f1c5c5] bg-[#fde8e8] px-3 py-2 text-sm text-[#8f2f2f]">{errorMessage}</p>
      )}
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
