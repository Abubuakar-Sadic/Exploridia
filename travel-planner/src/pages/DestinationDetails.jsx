import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFlightOffers, getHotels } from "../services/amadeus.js";


function DestinationDetails() {

  const location = useLocation();
  const destination = location.state?.destination;
  const [loadingFlights, setLoadingFlights] = useState(false);
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState("");

const saveTrip = () => {

  const savedTrips = JSON.parse(localStorage.getItem("savedTrips")) || [];

  const alreadySaved = savedTrips.find(
    (trip) => trip.id === destination.id
  );

  if (!alreadySaved) {

    savedTrips.push(destination);

    localStorage.setItem("savedTrips", JSON.stringify(savedTrips));

    alert("Trip saved!");

  } else {

    alert("Trip already saved.");

  }

};

useEffect(() => {

  if (!destination?.iataCode) return;

  async function loadData() {

    try {

      // Fetch flights
      const flightData = await getFlightOffers(destination.iataCode);

      if (flightData && flightData.length > 0) {
        setFlights(flightData);
      } else {
        setError("No flight offers available for this destination.");
      }

      // Fetch hotels
      const hotelData = await getHotels(destination.iataCode);

      if (hotelData && hotelData.length > 0) {
        setHotels(hotelData.slice(0, 5));
      }

    } catch (err) {

      console.error(err);
      setError("Failed to load travel information.");

    }

  }

  loadData();

}, [destination]);



  if (!destination) {
    return <p>Destination data not available.</p>;
  }

  return (
    <div>

      <h2 className="text-2xl font-semibold mb-4 text-white">
        {destination.name}
      </h2>

      <p className="mb-2 text-white">
        Country: {destination.address?.countryName}
      </p>

     <p className="mb-4 text-white">
  City Code: {destination.iataCode || "Not available"}
</p>

<button
  onClick={saveTrip}
  className="bg-blue-500 text-white px-4 py-2 rounded mb-6 hover:bg-blue-600 transition"
>
  Save Trip
</button>


      <h3 className="text-xl font-semibold mt-6 mb-4 text-white">
        Flight Offers
      </h3>

      {error && <p className="text-red-500">{error}</p>}

      {flights.length === 0 ? (
        <p>No flight offers available.</p>
      ) : (
        <ul className="space-y-4">
          {flights.map((flight) => (
          <li key={flight.id} className="border p-4 rounded shadow-sm">

  <p className="font-semibold">
    Airline: {flight.validatingAirlineCodes?.[0]}
  </p>

  <p>
    Price: {flight.price.total} {flight.price.currency}
  </p>

  <p>
    Departure:
    {" "}
    {new Date(
      flight.itineraries[0].segments[0].departure.at
    ).toLocaleString()}
  </p>

</li>
          ))}
        </ul>
      )}

      <h3 className="text-xl font-semibold mt-10 mb-4 text-white">
  Hotels
</h3>

{hotels.length === 0 ? (

  <p>No hotels available.</p>

) : (

  <ul className="space-y-3">

    {hotels.map((hotel) => (

    <li key={hotel.hotelId} className="border p-4 rounded shadow-sm">

  <p className="font-semibold text-lg">
    {hotel.name}
  </p>

  <p className="text-gray-600">
    Hotel ID: {hotel.hotelId}
  </p>

</li>

    ))}

  </ul>

)}


    </div>
  );
}


export default DestinationDetails;


