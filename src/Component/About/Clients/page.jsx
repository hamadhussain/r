import React from "react";
import { FaStar } from "react-icons/fa6";

const Client = () => {
  const stars = [];

  for (let index = 0; index < 5; index++) {
    stars.push(<FaStar key={index} />);
  }

  return (
    <div className=" p-24">
      <h1 className=" text-4xl ">Hear from My Clients</h1><br />
      <div className=" grid grid-cols-2 gap-10">
        <div className="  p-10 rounded-lg bg-zinc-950">
          <p className=" text-stone-300">
            Working with Adrian was a fantastic experience. He transformed our
            outdated website into a modern, user-friendly platform. His
            attention to detail and commitment to quality are unmatched. Highly
            recommend him for any web dev projects.
          </p>
          <br /><br />
          <div className="flex justify-between items-center">
            <img src="assets/review1.png" alt="logo" />
            <div>
              <h1 className="font-extrabold">Emily Johnson</h1>
              <p className=" text-zinc-700">Marketing Director at GreenLeaf</p>
            </div>

            <div className="flex text-yellow-200">{stars}</div>
          </div>
        </div>
        <div className="  p-10 rounded-lg bg-zinc-950">
          <p className=" text-stone-300">
            Working with Adrian was a fantastic experience. He transformed our
            outdated website into a modern, user-friendly platform. His
            attention to detail and commitment to quality are unmatched. Highly
            recommend him for any web dev projects.
          </p>
          <br /><br />
          <div className="flex justify-between items-center">
            <img src="assets/review1.png" alt="logo" />
            <div>
              <h1 className="font-extrabold">Emily Johnson</h1>
              <p className=" text-zinc-700">Marketing Director at GreenLeaf</p>
            </div>

            <div className="flex text-yellow-200">{stars}</div>
          </div>
        </div> <div className="  p-10 rounded-lg bg-zinc-950">
          <p className=" text-stone-300">
            Working with Adrian was a fantastic experience. He transformed our
            outdated website into a modern, user-friendly platform. His
            attention to detail and commitment to quality are unmatched. Highly
            recommend him for any web dev projects.
          </p>
          <br /><br />
          <div className="flex justify-between items-center">
            <img src="assets/review1.png" alt="logo" />
            <div>
              <h1 className="font-extrabold">Emily Johnson</h1>
              <p className=" text-zinc-700">Marketing Director at GreenLeaf</p>
            </div>

            <div className="flex text-yellow-200">{stars}</div>
          </div>
        </div> <div className="  p-10 rounded-lg bg-zinc-950">
          <p className=" text-stone-300">
            Working with Adrian was a fantastic experience. He transformed our
            outdated website into a modern, user-friendly platform. His
            attention to detail and commitment to quality are unmatched. Highly
            recommend him for any web dev projects.
          </p>
          <br /><br />
          <div className="flex justify-between items-center">
            <img src="assets/review1.png" alt="logo" />
            <div>
              <h1 className="font-extrabold">Emily Johnson</h1>
              <p className=" text-zinc-700">Marketing Director at GreenLeaf</p>
            </div>

            <div className="flex text-yellow-200">{stars}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
