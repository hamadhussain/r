import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Determine scale based on the device type
  let scaleValue = 1.5; // Default scale for larger screens
  let positionValue = [4, -5, 0]; // Default position for larger screens

  if (isSmall) {
    scaleValue = 2; // Smaller scale for small screens
    positionValue = [-1, -2, 0]; // Adjusted position for small screens
  } else if (isMobile) {
    scaleValue = 1.5; // Medium scale for mobile devices
    positionValue = [6, -5, 0]; // Adjusted position for mobile devices
  } else if (isTablet) {
    scaleValue = 1.2; // Slightly larger scale for tablets
    positionValue = [-2.5, -4, 0]; // Adjusted position for tablets
  }

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight && isMobile) {
      // if ( ) {
        setScrolled(false);

      // }
      // else{
        setScrolled(true);

      // }
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`bg-blak bg-opacty-70 sm:fixed w-full bg-none px-2 sm:px-14 py-4 text--300   flex justify-ceter  justify-between items-center  ${
        scrolled ? "  bg-white" : "bg-transparent"
      }`}
    >
      <div className="text- text-2xl gap-4 font-bold flex items-center">
        {/* <IoLogoFreebsdDevil className="text-3xl border-2  rounded-full" /> */}
        <img src="" alt="" />
        My Portfolio's
      </div>
      <div className=" sm:block hidden space-x-8">
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          duration={500}
          href="#"
          className="text-black hover:text-gray-700 hover:border-b-2 py-1 hover:border-black"
        >
          Home
        </Link>{" "}
        <Link
          activeClass="active"
          to="Services"
          spy={true}
          smooth={true}
          duration={500}
          href="#"
          className="text-black hover:text-gray-700 hover:border-b-2 py-1 hover:border-black"
        >
          Services
        </Link>
        <Link
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          duration={500}
          href="#"
          className="text-black hover:text-gray-700 hover:border-b-2 py-1 hover:border-black"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Work"
          spy={true}
          smooth={true}
          duration={500}
          href="#"
          className="text-black hover:text-gray-700 hover:border-b-2 py-1 hover:border-black"
        >
          Work
        </Link>
        <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          duration={500}
          href="#"
          className="text-black hover:text-gray-700 hover:border-b-2 py-1 hover:border-black"
        >
          Contact
        </Link>
      </div>
      <div className="block sm:hidden ">Menu</div>
    </nav>
  );
};

export default Navbar;
