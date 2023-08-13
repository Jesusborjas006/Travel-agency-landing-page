const DestinationCard = ({ name, price, length, src, alt }) => {
  return (
    <div className="shadow-2xl rounded-b-3xl text-gray-700 max-w-[315px] min-w-[315px] mx-auto md:min-w-[220px] lg:min-w-[90%] lg:max-w-[90%]">
      <img
        className="rounded-t-3xl mx-auto min-h-[420px] max-h-[420px] md:min-h-[250px] md:max-h-[250px] w-full lg:min-h-[400px] lg:max-h-[400px] object-fill"
        src={src}
        alt={alt}
      />
      <div className="flex justify-between m-5 text-xl md:text-lg lg:text-xl">
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <p className="mx-5 mt-3 pb-5">{length} Days Trip</p>
    </div>
  );
};

export default DestinationCard;
