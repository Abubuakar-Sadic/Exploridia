import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center justify-center">

      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 transition py-2"
      >
        Search
      </button>

    </form>
  );
}

export default SearchBar;

