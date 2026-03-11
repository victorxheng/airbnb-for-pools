import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();
    const trimmedTerm = searchTerm.trim();

    if (!trimmedTerm) {
      router.push('/pool-listings');
      return;
    }

    await router.push({
      pathname: '/pool-listings',
      query: { location: trimmedTerm },
    });
  };

  return (
    <section className="my-8">
      <form onSubmit={handleSearch} className="panel p-4 md:p-6">
        <label htmlFor="search-pools" className="mb-2 block text-sm font-semibold text-[#3b4e5f]">
          Find pools by city or neighborhood
        </label>
        <div className="flex flex-col gap-3 md:flex-row">
          <input
            id="search-pools"
            type="text"
            placeholder="Try: Austin, Miami, Los Angeles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-[#d7d2c6] bg-white px-5 py-3 text-sm outline-none focus:border-[#007a7a]"
          />
          <button type="submit" className="btn-primary whitespace-nowrap px-6">
            Search Pools
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
