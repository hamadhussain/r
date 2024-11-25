import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setScrolled(true);
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
      className={`bg-blak bg-opacty-70 fixed w-full px-14 py-4 text--300   flex justify-center sm:justify-between items-center  ${
        scrolled ? " " : "bg-transparent"
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
    </nav>
  );
};

export default Navbar;
