const Footer = () => {
  return (
    <section className="max-w-[1640px] mx-auto p-10 ">
      <div className="grid grid-cols-4 text-sm space-y-2 ">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold">
            Jad<span className="text-orange-500">oo</span>
          </h2>
          <p className="hidden md:block w-[170px] my-2">
            Book your trip in minute, get full control for much longer.
          </p>
        </div>
        <div>
          <h3 className="text-base font-bold">Company</h3>
          <ul className="my-2 text-gray-500 space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold">Contact</h3>
          <ul className="my-2 text-gray-500 space-y-2">
            <li>Help/FAQ</li>
            <li>Press</li>
            <li>Affilates</li>
          </ul>
        </div>
        <div>
          <h3 className="text-base font-bold">More</h3>
          <ul className="my-2 text-gray-500 space-y-2">
            <li>AirlineFees</li>
            <li>Airline</li>
            <li>Low Fare tips</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
