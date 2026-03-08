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
{loading && <p className="mt-4">Searching destinations...</p>}

    setResults(data);

  } catch (err) {

    setError("Network error. Please try again.");

  } finally {

    setLoading(false);

  }

};


  return (
    <>
    <div className="p-6">

      <h2 className="text-3xl font-semibold mb-6 text-center text-white mt-10">
        Search Destinations
      </h2>

      <SearchBar onSearch={handleSearch} />

      {loading && <p className="mt-4">Loading...</p>}

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <DestinationList destinations={results} />

    </div>
    <section >
      <h3 className="text-3xl font-semibold mb-4 text-center text-white mt-10">
        Popular Destinations
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-20 h-96 w-50% overflow-hidden mt-10">

        <div className="bg-gray-700 text-white p-4 rounded-2xl shadow-sm text-center">
          <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSDeomDOvgCMDqYQ_QE2iMOZ2Sm7U3lUqQlKE_tocplHq1ydB5cFH8wX69kdHFZKi-eArEeiLX54aBFYk0Hm3QYPL0&s=19" alt="Paris" className="w-full h-48 object-cover mb-4 rounded-xl" />
          <h4 className="text-xl font-semibold mb-2">
            Paris, France
          </h4>
          <p>
            The city of lights, known for its art, culture, and romantic ambiance.
          </p>
        </div>

        <div className="bg-gray-700 text-white p-4 rounded-2xl shadow-sm text-center">
          <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR-mwlwaqTs1ora0I3hHZz7KzU1gvEyiaE5zgwZ3AvfRGl5bI5ChobQa2B6aaMMRfFo1QLAi8JryU5KhIZL54B904A&s=19" alt="Tokyo" className="w-full h-48 object-cover mb-4 rounded-xl" />
          <h4 className="text-xl font-semibold mb-2">
            Tokyo, Japan
          </h4>
          <p>
            A vibrant metropolis blending tradition with cutting-edge technology.
          </p>
        </div>

        <div className="bg-gray-700 text-white p-4 rounded-2xl shadow-sm text-center">
          <img src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTOFohMz5QwbniFc_8F-SStnYpwbX6NT_8SoCbGgV6iFSkM6SpWeHIyD0I7SJMYE780ycB68uBts2BUua29z4Wk2gif&s=19" alt="New York" className="w-full h-48 object-cover mb-4 rounded-xl" />
          <h4 className="text-xl font-semibold mb-2">
            New York City, USA
          </h4>
          <p>
            The city that never sleeps, offering endless entertainment and culture.
          </p>
        </div>

      </div>
    </section>
    <section className="text-white px-20 py-8 mt-10 text-center">
      <h3 className="text-2xl font-semibold mb-4">
        Why Choose Exploridia?
      </h3>

      <p className="mb-4 text-lg">
        We provide personalized travel recommendations based on your preferences and budget. Our platform integrates with top travel APIs to offer the best flight and hotel options, making trip planning easy and enjoyable.
      </p>

      <p className="text-lg">
        Start exploring your next adventure today!
      </p>

    </section>

    </>
  );
}

export default HomePage;



