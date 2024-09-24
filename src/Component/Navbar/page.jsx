import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-70 fixed w-full py4 p-4 flex justify-between items-center">
      <div className="text-white text-lg font-bold">Hammad</div>
      <div className="space-x-8">
        <a href="#" className="text-white hover:text-gray-300">Home</a>
        <a href="#" className="text-white hover:text-gray-300">About</a>
        <a href="#" className="text-white hover:text-gray-300">Work</a>
        <a href="#" className="text-white hover:text-gray-300">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
