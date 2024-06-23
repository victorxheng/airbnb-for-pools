import React from 'react';

const ConfirmButton: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  return (
    <button onClick={onConfirm} className="bg-blue-500 text-white p-2 rounded mt-4">Confirm Booking</button>
  );
};

export default ConfirmButton;
