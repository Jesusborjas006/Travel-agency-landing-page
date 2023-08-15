const Subscribe = () => {
  return (
    <section className="max-w-[1640px] mx-auto p-10">
      <div className="px-8 py-12 rounded-tl-3xl rounded-lg bg-slate-100">
        <h3 className="text-center text-md sm:text-lg md:text-xl lg:text-2xl md:w-[70%] mx-auto mb-10 font-bold">
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h3>
        <div className="flex justify-center gap-2 text-xs w-[270px] sm:w-[400px] md:w-[500px] mx-auto">
          <input className="pl-3 rounded-lg w-full" placeholder="Your email" />
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg ">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
