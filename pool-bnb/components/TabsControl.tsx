import React, { useState } from 'react';

interface TabsControlProps {
  onTabChange: (tab: 'login' | 'register') => void;
}

const TabsControl: React.FC<TabsControlProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  const handleTabChange = (tab: 'login' | 'register') => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="my-4 flex justify-center">
      <button
        className={`px-4 py-2 ${activeTab === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => handleTabChange('login')}
      >
        Login
      </button>
      <button
        className={`px-4 py-2 ml-2 ${activeTab === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={() => handleTabChange('register')}
      >
        Register
      </button>
    </div>
  );
};

export default TabsControl;
