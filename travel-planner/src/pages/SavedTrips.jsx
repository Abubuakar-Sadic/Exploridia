import { useEffect, useState } from "react";

function SavedTrips() {

  const [trips, setTrips] = useState([]);

  useEffect(() => {

    const savedTrips = JSON.parse(localStorage.getItem("savedTrips")) || [];

    setTrips(savedTrips);

  }, []);

 const removeTrip = (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to remove this trip?"
  );

  if (!confirmDelete) return;

  const updatedTrips = trips.filter((trip) => trip.id !== id);

  localStorage.setItem("savedTrips", JSON.stringify(updatedTrips));

  setTrips(updatedTrips);

};

  return (
    <div>

     <h2 className="text-3xl font-bold mb-6 text-white mt-10">
  My Saved Trips
</h2>
      {trips.length === 0 ? (

       <p className="text-white">
  You haven't saved any trips yet. Start exploring destinations!
</p>

      ) : (
        <ul className="space-y-4">

          {trips.map((trip) => (

           <li key={trip.id} className="border border-blue-700 p-4 rounded shadow-sm hover:shadow-lg hover:bg-gray-700 transition duration-200">

  <p className="text-lg font-semibold text-white">
    {trip.name}
  </p>

  <p className="text-white">
    Country: {trip.address?.countryName}
  </p>

  <button
    onClick={() => removeTrip(trip.id)}
    className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
  >
    Remove Trip
  </button>

</li>

          ))}

        </ul>

      )}

    </div>

  );

}

export default SavedTrips;

