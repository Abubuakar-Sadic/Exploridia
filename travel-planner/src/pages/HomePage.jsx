import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import DestinationList from "../components/DestinationList.jsx";
import { searchLocations } from "../services/amadeus.js";

function HomePage() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    try {
      setLoading(true);
      setError("");

      const data = await searchLocations(query);

      if (data.length === 0) {
        setError("No destinations found.");
      }

      setResults(data);
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Search for a Destination
      </h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="mt-4">Loading...</p>}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <DestinationList destinations={results} />

    </div>
  );
}

export default HomePage;



