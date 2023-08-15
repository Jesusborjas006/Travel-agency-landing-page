import avatar from "../travel-images/avatar.png";

const Testimonial = () => {
  return (
    <section className="max-w-[1640px] mx-auto p-10">
      <div className="grid md:grid-cols-2 justify-items-center gap-8">
        <div>
          <h4 className="text-gray-600 text-sm font-semibold lg:text-base mb-2">
            Testimonials
          </h4>
          <h2 className="text-gray-800 font-serif text-3xl font-bold lg:text-4xl">
            What People Say
          </h2>
          <h2 className="text-gray-800 font-serif text-3xl font-bold lg:text-4xl">
            About Us.
          </h2>
        </div>
        <div className="shadow-lg rounded-3xl p-8 text-gray-600 max-w-[500px] relative">
          <img
            className="absolute top-[-10px] left-[-25px] w-[55px]"
            src={avatar}
            alt="avatar"
          />
          <p className="mb-5">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <h5 className="font-bold">Mike Taylor</h5>
          <p className=" text-sm">Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
