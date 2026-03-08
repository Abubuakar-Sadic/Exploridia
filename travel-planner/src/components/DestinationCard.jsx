import { Link } from "react-router-dom";

function DestinationCard({ destination }) {

  const cityCode = destination.iataCode || destination.address?.cityCode;

  return (
    <Link
      to={`/destination/${destination.id}`}
      state={{ destination }}
    >
      <div className="border p-4 rounded shadow hover:shadow-lg hover:bg-gray-50 transition">

        <h3 className="text-lg font-semibold">
          {destination.name}
        </h3>

        <p className="text-gray-600">
          {destination.address?.countryName}
        </p>

      </div>
    </Link>
  );
}

export default DestinationCard;


