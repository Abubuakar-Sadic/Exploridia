const DestinationsCard = ({title, image}) => {
    return(
        <div className= "w-72 bg-white rounded-2xl shadow-lg overflow-hidden">
           { /* Image Section*/}
            <div className="h-40 bg-gray-300 rounded-t-2xl overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover"/>
            </div>
            {/* Content Section*/}
            <div className="p-6 text-center space-y-4">
                <h3 className="text-2xl font-semibold italic text-sky-500">{title}</h3>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien augue.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
            </div>
        </div>
    );
};


export default DestinationsCard;