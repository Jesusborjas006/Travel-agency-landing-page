import { category } from "../data";
import ServiceCard from "./ServiceCard";

const Category = () => {
  const serviceElements = category.map((card, index) => (
    <ServiceCard
      id={index}
      key={index}
      title={card.title}
      description={card.description}
      src={card.src}
      alt={card.alt}
    />
  ));

  return (
    <section className="max-w-[1640px] mx-auto p-10 mt-8 text-center">
      <h4 className="text-gray-600 text-sm font-semibold">CATEGORY</h4>
      <h2 className="text-gray-800 font-serif text-3xl font-bold">
        We Offer Best Services
      </h2>
      <div className="grid grid-cols-2 mt-8 gap-5 md:gap-10 lg:grid-cols-4">{serviceElements}</div>
    </section>
  );
};

export default Category;
