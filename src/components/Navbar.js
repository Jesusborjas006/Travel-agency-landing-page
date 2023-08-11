import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = useState(false);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWidth);

    if (windowWidth < 640) {
      setMenuIcon(true);
    } else {
      setMenuIcon(false);
    }

    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, [windowWidth]);

  return (
    <nav className="max-w-[1640px] mx-auto p-10 flex justify-between items-center">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Jad<span className="text-orange-500">oo</span>
      </h1>
      <ul className="hidden sm:flex sm:gap-5">
        <li>Destinations</li>
        <li>Hotels</li>
        <li>Flights</li>
        <li>Bookings</li>
        <li>Login</li>
        <li className="border border-black px-1 rounded-md">Sign Up</li>
      </ul>
      {menuIcon ? (
        <AiOutlineMenu
          onClick={() => setMobileNav(!mobileNav)}
          size={30}
          className="cursor-pointer"
        />
      ) : (
        ""
      )}
      {mobileNav ? (
        <div className="bg-black/80 fixed right-0 w-full h-screen z-10 top-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          mobileNav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          className="absolute right-7 top-10 cursor-pointer"
          size={25}
          onClick={() => setMobileNav(!mobileNav)}
        />
        <h2 className="text-2xl font-bold mx-6 mt-10">
          Jad<span className="text-orange-500">oo</span>
        </h2>
        <ul className="mx-6 mt-10 flex flex-col justify-evenly gap-5 text-gray-800">
          <li className="text-xl  cursor-pointer">Destinations</li>
          <li className="text-xl  cursor-pointer">Hotels</li>
          <li className="text-xl cursor-pointer">Flights</li>
          <li className="text-xl cursor-pointer">Bookings</li>
          <li className="text-xl cursor-pointer">Login</li>
          <li className="text-xl cursor-pointer">Sign Up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
