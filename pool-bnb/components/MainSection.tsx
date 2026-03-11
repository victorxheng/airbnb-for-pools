import React, { ReactNode } from 'react';


interface MainSectionProps {
  children: ReactNode;
  userRole?: string;
}

const MainSection: React.FC<MainSectionProps> = ({ children, userRole }) => {
  return (
    <main className="space-y-6">
      <section className="panel p-6 md:p-7">
        <p className="inline-flex rounded-full bg-[#f0ead8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#3b4e5f]">
          {userRole === 'Owner' ? 'Owner Workspace' : 'Guest Workspace'}
        </p>
        <h1 className="mt-3 text-3xl text-[#173347]">Dashboard</h1>
        <p className="muted mt-2 text-sm md:text-base">
          Track reservations, manage listings, and monitor your latest account activity.
        </p>
      </section>
      {children}
    </main>
  );
};

export default MainSection;
