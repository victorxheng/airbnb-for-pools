import React from 'react';

const ConfirmButton: React.FC<{ onConfirm: () => void }> = ({ onConfirm }) => {
  return (
    <button onClick={onConfirm} className="btn-primary mt-1 w-full md:w-auto">
      Confirm Booking
    </button>
  );
};

export default ConfirmButton;
