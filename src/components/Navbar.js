import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <>
      <nav className="max-w-[1640px] mx-auto p-10 flex justify-between items-center">
        <h1 className="text-3xl">Jadoo</h1>
        <ul className="hidden sm:flex sm:gap-5">
          <li>Destinations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <li>Login</li>
          <li className="border border-black px-1 rounded-md">Sign Up</li>
        </ul>
        {menuIcon ? <AiOutlineMenu /> : ""}
      </nav>
    </>
  );
};

export default Navbar;
