import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFlightOffers, getHotels } from "../services/amadeus.js";


function DestinationDetails() {

  const location = useLocation();
  const destination = location.state?.destination;

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

  async function fetchFlights() {

    if (!destination?.iataCode) return;

    try {

      const data = await getFlightOffers(destination.iataCode);

      if (!data || data.length === 0) {
        setError("No flight offers available for this destination.");
        return;
      }

      setFlights(data);

    } catch (err) {

      console.error(err);
      setError("Failed to load flight offers.");

    }

  }

  fetchFlights();

  async function fetchHotels() {

    try {

      if (!destination?.iataCode) return;

      const data = await getHotels(destination.iataCode);

      setHotels(data.slice(0,5));

    } catch (err) {

      console.error(err);

    }

  }

  fetchHotels();

}, [destination]);


  if (!destination) {
    return <p>Destination data not available.</p>;
  }

  return (
    <div>

      <h2 className="text-2xl font-semibold mb-4">
        {destination.name}
      </h2>

      <p className="mb-2">
        Country: {destination.address?.countryName}
      </p>

     <p className="mb-4">
  City Code: {destination.iataCode || "Not available"}
</p>

<button
  onClick={saveTrip}
  className="bg-blue-500 text-white px-4 py-2 rounded mb-6"
>
  Save Trip
</button>


      <h3 className="text-xl font-semibold mt-6 mb-4">
        Flight Offers
      </h3>

      {error && <p className="text-red-500">{error}</p>}

      {flights.length === 0 ? (
        <p>No flight offers available.</p>
      ) : (
        <ul className="space-y-4">
          {flights.map((flight) => (
            <li key={flight.id} className="border p-4 rounded">

              <p>
                Airline: {flight.validatingAirlineCodes?.[0]}
              </p>

              <p>
                Price: {flight.price.total} {flight.price.currency}
              </p>

              <p>
                Departure: {flight.itineraries[0].segments[0].departure.at}
              </p>

            </li>
          ))}
        </ul>
      )}

      <h3 className="text-xl font-semibold mt-10 mb-4">
  Hotels
</h3>

{hotels.length === 0 ? (

  <p>No hotels available.</p>

) : (

  <ul className="space-y-3">

    {hotels.map((hotel) => (

      <li key={hotel.hotelId} className="border p-4 rounded">

        <p className="font-semibold">
          {hotel.name}
        </p>

        <p>
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


