import { Link } from "react-router-dom";

function DestinationCard({ destination }) {

  const cityCode = destination.iataCode || destination.address?.cityCode;

  return (
    <Link
      to={`/destination/${destination.id}`}
      state={{ destination }}
    >
      <div className="border h-24 bg-gray-700 p-4 rounded shadow hover:shadow-lg hover:bg-blue-400 transition duration-200">

        <h3 className="text-lg font-semibold text-white">
          {destination.name}
        </h3>

        <p className="text-gray-800">
          {destination.address?.countryName}
        </p>

      </div>
    </Link>
  );
}

export default DestinationCard;


