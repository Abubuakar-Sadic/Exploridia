import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import DestinationsCard from "../components/DestinationsCard.jsx";
import { searchLocations } from "../services/Amadeus.js";

function HomePage() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    try {
      setError("");
      const data = await searchLocations(query);

      if (data.length === 0) {
        setError("No destinations found.");
      }

      setResults(data);
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <>
    <div>
      <h2 className="text-4xl font-semibold mb-10 text-center text-white mt-20">
        Search Destinations
      </h2>

      <SearchBar onSearch={handleSearch} />

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <ul className="mt-6 space-y-2">
        {results.map((item) => (
          <li key={item.id} className="border p-3 rounded">
            {item.name}, {item.address?.countryName}
          </li>
        ))}
      </ul>
    </div>
    <section className="min-h-screen mt-20 py-20">
      <h2 className="text-3xl font-semibold mb-6 text-center text-white italic">
        Popular Destinations
      </h2>
      <div className="flex gap-10 justify-center flex-wrap">
        <DestinationsCard title="Paris" image="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/d0/bf/c2.jpg" />
        <DestinationsCard title="Cairo" image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Cairo_From_Tower_%28cropped%29.jpg/1280px-Cairo_From_Tower_%28cropped%29.jpg" />
        <DestinationsCard title="Accra" image="https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=400,height=265,dpr=2/tour_img/2f27109089682ee5f75f622d4ce1b988ad1faad3f69b5abe4f9f715534b06c90.jpg" />
      </div>
    </section>
    </>
  );
}

export default HomePage;
