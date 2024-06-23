import React from 'react';

const SuccessMessage: React.FC = () => {
  return (
    <div className="success-message">
      <h1 className="text-3xl font-bold text-green-500 mb-4">Booking Confirmed!</h1>
      <p>Your booking has been successfully confirmed. We hope you enjoy your time at the pool.</p>
    </div>
  );
};

export default SuccessMessage;
