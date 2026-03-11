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
    <div className="inline-flex rounded-full border border-[#d7d2c6] bg-[#f0ead8] p-1">
      <button
        type="button"
        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
          activeTab === 'login' ? 'bg-[#173347] text-white shadow-sm' : 'text-[#3b4e5f] hover:text-[#173347]'
        }`}
        onClick={() => handleTabChange('login')}
      >
        Login
      </button>
      <button
        type="button"
        className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
          activeTab === 'register' ? 'bg-[#173347] text-white shadow-sm' : 'text-[#3b4e5f] hover:text-[#173347]'
        }`}
        onClick={() => handleTabChange('register')}
      >
        Register
      </button>
    </div>
  );
};

export default TabsControl;
