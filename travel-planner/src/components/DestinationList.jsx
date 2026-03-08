import DestinationCard from "./DestinationCard.jsx";

function DestinationList({ destinations }) {

  if (!destinations || destinations.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destination={destination}
        />
      ))}
    </div>
  );
}

export default DestinationList;



