import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 justify-center">
      <input
        type="text"
        placeholder="Enter city name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-450 h-150 flex-10"
      />
      <button
        type="submit"
        className="bg-[#86E2E3] text-gray-800 px-4 py-2 rounded font-bold"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
