// // import React from "react";
// // import { FaStar } from "react-icons/fa6";

// // const Client = () => {
// //   const stars = [];

// //   for (let index = 0; index < 5; index++) {
// //     stars.push(<FaStar key={index} />);
// //   }

// //   return (
// //     <div className=" p-24 flex flex-col

// //     ">
// //       <h1 className=" text-4xl w-fit">Hear from My Clients</h1><br />
// //       <div className=" grid grid-cols-2 gap-10">
// //         <div className="  p-10 rounded-lg bg-zinc-950">
// //           <p className=" text-stone-300">
// //             Working with Adrian was a fantastic experience. He transformed our
// //             outdated website into a modern, user-friendly platform. His
// //             attention to detail and commitment to quality are unmatched. Highly
// //             recommend him for any web dev projects.
// //           </p>
// //           <br /><br />
// //           <div className="flex justify-between items-center">
// //             <img src="assets/review1.png" alt="logo" />
// //             <div>
// //               <h1 className="font-extrabold">Emily Johnson</h1>
// //               <p className=" text-zinc-700">Marketing Director at GreenLeaf</p>
// //             </div>

// //             <div className="flex text-yellow-200">{stars}</div>
// //           </div>
// //         </div>
// //         <div className="  p-10 rounded-lg bg-zinc-950">
// //           <p className=" text-stone-300">
// //             Working with Adrian was a fantastic experience. He transformed our
// //             outdated website into a modern, user-friendly platform. His
// //             attention to detail and commitment to quality are unmatched. Highly
// //             recommend him for any web dev projects.
// //           </p>
// //           <br /><br />
// //           <div className="flex justify-between items-center">
// //             <img src="assets/review1.png" alt="logo" />
// //             <div>
// //               <h1 className="font-extrabold">Emily Johnson</h1>
// //               <p className=" text-zinc-700">Marketing Director at GreenLeaf</p>
// //             </div>

// //             <div className="flex text-yellow-200">{stars}</div>
// //           </div>
// //         </div> <div className="  p-10 rounded-lg bg-zinc-950">
// //           <p className=" text-stone-300">
// //             Working with Adrian was a fantastic experience. He transformed our
// //             outdated website into a modern, user-friendly platform. His
// //             attention to detail and commitment to quality are unmatched. Highly
// //             recommend him for any web dev projects.
// //           </p>
// //           <br /><br />
// //           <div className="flex justify-between items-center">
// //             <img src="assets/review1.png" alt="logo" />
// //             <div>
// //               <h1 className="font-extrabold">Emily Johnson</h1>
// //               <p className=" text-zinc-700">Marketing Director at GreenLeaf</p>
// //             </div>

// //             <div className="flex text-yellow-200">{stars}</div>
// //           </div>
// //         </div> <div className="  p-10 rounded-lg bg-zinc-950">
// //           <p className=" text-stone-300">
// //             Working with Adrian was a fantastic experience. He transformed our
// //             outdated website into a modern, user-friendly platform. His
// //             attention to detail and commitment to quality are unmatched. Highly
// //             recommend him for any web dev projects.
// //           </p>
// //           <br /><br />
// //           <div className="flex justify-between items-center">
// //             <img src="assets/review1.png" alt="logo" />
// //             <div>
// //               <h1 className="font-extrabold">Emily Johnson</h1>
// //               <p className=" text-zinc-700">Marketing Director at GreenLeaf</p>
// //             </div>

// //             <div className="flex text-yellow-200">{stars}</div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Client;

// import React from "react";
// import { FaStar } from "react-icons/fa6";

// const Client = () => {
//   const stars = Array(5).fill(<FaStar className="text-yellow-200" />); // Fill an array with 5 star icons

//   const reviews = [
//     {
//       id: 1,
//       content:
//         "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//       name: "Emily Johnson",
//       title: "Marketing Director at GreenLeaf",
//       imgSrc: "assets/review1.png",
//     },
//     {
//       id: 2,
//       content:
//         "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
//       name: "Mark Rogers",
//       title: "Founder of TechGear Shop",
//       imgSrc: "assets/review2.png",
//     },
//     {
//       id: 3,
//       content:
//         "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//       name: "John Dohsas",
//       title: "Project Manager at UrbanTech",
//       imgSrc: "assets/review3.png",
//     },
//     {
//       id: 4,
//       content:
//         "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend development are top-notch.",
//       name: "Ether Smith",
//       title: "CEO of BrightStar Enterprises",
//       imgSrc: "assets/review4.png",
//     },
//   ];

//   return (
//     <div className="p-36 flex flex-col">
//       <h1 className="text-4xl w-fit">Hear from My Clients</h1>
//       <br />
//       <div className="grid grid-cols-2 gap-10">
//         {reviews.map((review) => (
//           <div key={review.id} className="p-10 rounded-lg bg-zinc-950">
//             <p className="text-stone-300">{review.content}</p>
//             <br />
//             <br />
//             <div className="flex justify-between items-center">
//               <img src={review.imgSrc} alt="logo" />
//               <div>
//                 <h1 className="font-extrabold">{review.name}</h1>
//                 <p className="text-zinc-700">{review.title}</p>
//               </div>
//               <div className="flex">{stars}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Client;

import React from "react";
import { FaStar } from "react-icons/fa6";

const Client = () => {
  const stars = Array(5).fill(<FaStar className="text-yellow-200" />);

  const reviews = [
    {
      id: 1,
      content: "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      name: "Emily Johnson",
      title: "Marketing Director at GreenLeaf",
      imgSrc: "assets/review1.png",
    },
    {
      id: 2,
      content: "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
      name: "Mark Rogers",
      title: "Founder of TechGear Shop",
      imgSrc: "assets/review2.png",
    },
    {
      id: 3,
      content: "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      name: "John Dohsas",
      title: "Project Manager at UrbanTech",
      imgSrc: "assets/review3.png",
    },
    {
      id: 4,
      content: "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend development are top-notch.",
      name: "Ether Smith",
      title: "CEO of BrightStar Enterprises",
      imgSrc: "assets/review4.png",
    },
  ];

  return (
    <div className="p-6 md:p-12 lg:p-24 flex flex-col">
      <h1 className="text-3xl md:text-4xl w-fit">Hear from My Clients</h1>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 rounded-lg bg-zinc-950">
            <p className="text-stone-300">{review.content}</p>
            <br />
            <div className="flex justify-between items-center">
              <img src={review.imgSrc} alt="logo" className="h-16 w-16 object-cover rounded-full" />
              <div>
                <h1 className="font-extrabold">{review.name}</h1>
                <p className="text-zinc-700">{review.title}</p>
              </div>
              <div className="flex">{stars}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
