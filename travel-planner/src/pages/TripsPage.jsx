import { useState } from "react";
import Layout from "../components/Layout.jsx";

function TripsPage() {
  const [trips, setTrips] = useState([]);

  return (
    <div>
      <h2 className="text-4xl font-semibold mb-10 text-center text-white mt-20">
        My Trips
      </h2>
      <p className="text-center text-gray-300">You have no trips planned yet.</p>
    </div>
  );
}

export default TripsPage;