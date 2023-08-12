import { destinations } from "../data";
import DestinationCard from "./DestinationCard";

const TopDestinations = () => {
  const destinationElements = destinations.map((destination, index) => (
    <DestinationCard
      id={index}
      key={index}
      name={destination.name}
      price={destination.price}
      length={destination.length}
      src={destination.src}
      alt={destination.alt}
    />
  ));
  return (
    <section className="max-w-[1640px] mx-auto p-10 mt-8 ">
      <h4 className="text-gray-600 text-sm font-semibold text-center lg:text-base">
        Top Selling
      </h4>
      <h2 className="text-gray-800 font-serif text-3xl font-bold text-center lg:text-4xl">
        Top Destinations
      </h2>
      <div className="grid grid-cols-1 gap-y-8 gap-x-2 lg:gap-x-8 mt-10 md:grid-cols-3 object-fill">
        {destinationElements}
      </div>
    </section>
  );
};

export default TopDestinations;
