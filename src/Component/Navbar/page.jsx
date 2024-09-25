import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { IoLogoFreebsdDevil } from "react-icons/io";

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
      className={`bg-black bg-opacty-70 fixed w-full px-14 py-4   flex justify-between items-center  ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="text-white text-2xl gap-4 font-bold flex items-center"><IoLogoFreebsdDevil className="text-3xl border-2  rounded-full"/>
      Hammad</div>
      <div className="space-x-8">
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          duration={500}
          href="#"
          className="text-white hover:text-gray-300"
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
          className="text-white hover:text-gray-300"
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
          className="text-white hover:text-gray-300"
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
          className="text-white hover:text-gray-300"
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
          className="text-white hover:text-gray-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
