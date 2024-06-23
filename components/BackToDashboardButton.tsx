import React from 'react';
import { useRouter } from 'next/router';

const BackToDashboardButton: React.FC = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.push('/dashboard')} 
      className="bg-blue-500 text-white p-2 rounded mt-4">
      Back to Dashboard
    </button>
  );
};

export default BackToDashboardButton;
