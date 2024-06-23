import React from 'react';

const MainSection: React.FC = ({ children }) => {
  return (
    <main className="flex-1 p-8">
      {children}
    </main>
  );
};

export default MainSection;
