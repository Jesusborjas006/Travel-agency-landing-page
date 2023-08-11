import traveler from "../travel-images/Traveler.png";

const Hero = () => {
  return (
    <section className="max-w-[1640px] mx-auto p-10 lg:py-0 lg:px-10 md:grid md:grid-cols-2 items-center">
      <div>
        <h3 className="text-orange-500 font-bold lg:text-xl">
          BEST DESTINATIONS AROUND THE WORLD
        </h3>
        <h2 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-bold font-serif mt-4">
          Travel, enjoy
        </h2>
        <h2 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
          and live a new
        </h2>
        <h2 className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-bold font-serif">
          and full life
        </h2>
        <p className="text-gray-700 mt-4 lg:w-[80%]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <button className="bg-orange-400 text-white px-3 py-1 rounded-lg mr-3 mt-4">
          Find out more
        </button>
        <button className="bg-red-400 text-white px-3 py-1 rounded-lg">
          Play Demo
        </button>
      </div>
      <div className="hidden md:block">
        <img className="mt-10 max-h-[550px]" src={traveler} alt="traveler" />
      </div>
    </section>
  );
};

export default Hero;
