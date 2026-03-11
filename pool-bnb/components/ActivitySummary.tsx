import React from 'react';

const ActivitySummary: React.FC = () => {
  // Example data
  const activities = [
    { id: 1, description: 'Added new pool listing', date: '2023-01-01' },
    { id: 2, description: 'Approved a booking request', date: '2023-01-02' },
    { id: 3, description: 'Booked a pool', date: '2023-01-03' },
  ];

  return (
    <section className="panel p-6 md:p-7">
      <h2 className="mb-4 text-2xl text-[#173347]">Recent Activities</h2>
      <ul className="space-y-3">
        {activities.map((activity) => (
          <li key={activity.id} className="rounded-xl border border-[#d7d2c6] bg-white px-4 py-3">
            <p className="text-sm font-medium text-[#334657]">{activity.description}</p>
            <p className="mt-1 text-xs text-[#6a7885]">{activity.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActivitySummary;
