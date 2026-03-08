import { useEffect, useState } from "react";

function SavedTrips() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {

    const savedTrips = JSON.parse(localStorage.getItem("savedTrips")) || [];

    setTrips(savedTrips);

  }, []);

  const removeTrip = (id) => {

    const updatedTrips = trips.filter((trip) => trip.id !== id);

    localStorage.setItem("savedTrips", JSON.stringify(updatedTrips));

    setTrips(updatedTrips);

  };

  return (

    <div>

     <h2 className="text-3xl font-bold mb-6">
  My Saved Trips
</h2>


      {trips.length === 0 ? (

        <p>No saved trips yet.</p>

      ) : (

        <ul className="space-y-4">

          {trips.map((trip) => (

            <li key={trip.id} className="border p-4 rounded">

              <p className="font-semibold">
                {trip.name}
              </p>

              <p>
                Country: {trip.address?.countryName}
              </p>

              <button
                onClick={() => removeTrip(trip.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>

            </li>

          ))}

        </ul>

      )}

    </div>

  );

}

export default SavedTrips;

