import React, { ReactNode } from 'react';


interface MainSectionProps {
  children: ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <main className="flex-1 p-8">
      {children}
    </main>
  );
};

export default MainSection;
