import React, { useState } from 'react';
import axios from '../lib/axios';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      const response = await axios.get(`/search?q=${searchTerm}`);
      console.log(response.data);
    }
  };

  return (
    <div className="my-8 text-center">
      <input
        type="text"
        placeholder="Search for pools..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-1/2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2">Search</button>
    </div>
  );
};

export default SearchBar;
