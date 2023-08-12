const ServiceCard = ({ id, title, description, src, alt }) => {
  return (
    <div className=" flex flex-col rounded-lg shadow-xl p-5" key={id}>
      <img className="max-h-[80px]" src={src} alt={alt} />
      <h5 className="text-gray-900 font-bold my-3 md:text-lg">{title}</h5>
      <p className="text-gray-600 text-sm md:text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;
