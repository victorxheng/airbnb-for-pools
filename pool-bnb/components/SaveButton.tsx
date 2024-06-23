import React from 'react';

const SaveButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white p-2 rounded mt-4">Save</button>
  );
};

export default SaveButton;
