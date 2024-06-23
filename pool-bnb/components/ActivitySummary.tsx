import React from 'react';

const ActivitySummary: React.FC = () => {
  // Example data
  const activities = [
    { id: 1, description: 'Added new pool listing', date: '2023-01-01' },
    { id: 2, description: 'Approved a booking request', date: '2023-01-02' },
    { id: 3, description: 'Booked a pool', date: '2023-01-03' },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
      <ul className="list-disc pl-5">
        {activities.map((activity) => (
          <li key={activity.id} className="mb-2">
            <span className="text-gray-700">{activity.description}</span> - <span className="text-gray-500 text-sm">{activity.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ActivitySummary;
