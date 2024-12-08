import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "./Man/page.jsx";
import Progress from "../Hero/Progress/page.jsx";
import { IoHandLeftSharp } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import HeroCamera from "../Hero/Cemra/page.jsx";
import { Link } from "react-scroll";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Determine scale based on the device type
  let scaleValue = 6; // Default scale for larger screens
  let positionValue = [-3.2, -5, 0]; // Default position for larger screens

  if (isSmall) {
    scaleValue = 2; // Smaller scale for small screens
    positionValue = [-1, -2, 0]; // Adjusted position for small screens
  } else if (isMobile) {
    scaleValue = 6; // Medium scale for mobile devices
    positionValue = [0, -4, 0]; // Adjusted position for mobile devices
  } else if (isTablet) {
    scaleValue = 5; // Slightly larger scale for tablets
    positionValue = [-2.5, -4, 0]; // Adjusted position for tablets
  }

  return (
    <div
      name="Home"
      className="intro h-screen md:h-screen text- flex flex-col text-center md:text-start  md:flex-row justify-center items-center"
    >
      <div className="flex flex-col p-2 md:p-6 mt-5 md:mt-0 justify-center items-center text-center md:items-start max-w-lg sm:mx-auto">
        <h1 className="font-extrabold flex flex-col text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
          <span className="flex items-center text-lg md:text-2xl lg:text-4xl gap-2">
            Greetings{" "}
            <IoHandLeftSharp className="waving-hand text-yellow-300" />
          </span>
          <span className="font-extrabold lg:text-9xl creepster">
            Hammad Hussain,
          </span>
        </h1>

        <p className="text-gray-600 p-4 mt-2 opacity-80 rounded text-star md:text-ceter md:text-left">
          "Bringing creativity and code together for impactful solutions. Your
          vision, my expertise."
        </p>

        <Link
          activeClass="active"
          to="Services"
          spy={true}
          smooth={true}
          duration={500}
          className="text-white hover:text-gray-300"
        >
          <button className="button-41 font-bold uppercase text-center flex items-center px-6 py-3 w-full gap-6">
            Explore More
            <span className="animate-ping duration-700 font-extrabold transition-all">
              <FaCircle />
            </span>
          </button>
        </Link>
      </div>

      <div className="w-full md:w-[900px] h-full md:h-[90vh] flex justify-center items-center">
        <Suspense fallback={<Progress />}>
          <Canvas>
            <OrbitControls />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera>
              <HackerRoom
                scale={scaleValue} // Dynamic scale based on screen size
                position={positionValue} // Dynamic position based on screen size
                rotation={[0.3, 0, 0]}
              />
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;










// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";
// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import HackerRoom from "./Man/page.jsx";
// import Progress from "../Hero/Progress/page.jsx";
// import { IoHandLeftSharp } from "react-icons/io5";
// import { FaCircle } from "react-icons/fa6";
// import HeroCamera from "../Hero/Cemra/page.jsx";
// import { Link } from "react-scroll";

// const Hero = () => {
//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   // Determine scale based on the device type
//   let scaleValue = 6; // Default scale for larger screens

//   if (isSmall) {
//     scaleValue = 2; // Smaller scale for small screens
//   } else if (isMobile) {
//     scaleValue = 4; // Medium scale for mobile devices
//   } else if (isTablet) {
//     scaleValue = 5; // Slightly larger scale for tablets
//   }

//   return (
//     <div
//       name="Home"
//       className="intro h-ful md:h-screen text- flex flex-col text-center md:text-start  md:flex-row justify-center items-center"
//     >
//       <div className="flex flex-col p-2 md:p-6 mt-5 md:mt-0 justify-center items-start md:items-start max-w-lg sm:mx-auto">
//         <h1 className="font-extrabold flex flex-col text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
//           <span className="flex items-center text-lg md:text-2xl lg:text-3xl gap-2">
//             Greetings{" "}
//             <IoHandLeftSharp className="waving-hand text-yellow-300" />
//           </span>
//           <span className="font-extrabold lg:text-6xl creepster">
//             Hammad Hussain,
//           </span>
//         </h1>

//         <p className="text-gray-600 p-4 mt-2 opacity-80 rounded text-start md:text-center md:text-left">
//           "Bringing creativity and code together for impactful solutions. Your
//           vision, my expertise."
//         </p>

//         <Link
//           activeClass="active"
//           to="Services"
//           spy={true}
//           smooth={true}
//           duration={500}
//           className="text-white hover:text-gray-300"
//         >
//           <button className="button-41 font-bold uppercase text-center flex items-center px-6 py-3 w-full gap-6">
//             Explore More
//             <span className="animate-ping duration-700 font-extrabold transition-all">
//               <FaCircle />
//             </span>
//           </button>
//         </Link>
//       </div>

//       <div className="w-full md:w-[600px] h-fit md:h-[90vh] flex justify-center items-center">
//         <Suspense fallback={<Progress />}>
//           <Canvas>
//             <OrbitControls />
//             <PerspectiveCamera makeDefault position={[0, 0, 30]} />
//             <HeroCamera>
//               <HackerRoom
//                 scale={scaleValue} // Dynamic scale based on screen size
//                 position={[-3, -5, 0]}
//                 rotation={[0.3, 0, 0]}
//               />
//             </HeroCamera>
//             <ambientLight intensity={1} />
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Canvas>
//         </Suspense>
//       </div>
//     </div>
//   );
// };

// export default Hero;















// // import React, { Suspense } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { useMediaQuery } from "react-responsive";
// // import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// // import HackerRoom from "./Man/page.jsx";
// // import Progress from "../Hero/Progress/page.jsx";
// // import { IoHandLeftSharp } from "react-icons/io5";
// // import { FaCircle } from "react-icons/fa6";
// // import HeroCamera from "../Hero/Cemra/page.jsx";
// // import { Link } from "react-scroll";

// // const Hero = () => {
// //   const isSmall = useMediaQuery({ maxWidth: 440 });
// //   const isMobile = useMediaQuery({ maxWidth: 768 });
// //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

// //   return (
// //     <div
// //       name="Home"
// //       className="intro h-full md:h-screen text- flex flex-col text-center md:text-start  md:flex-row justify-center items-center"
// //     >
// //       <div className="flex flex-col p-6 mt-12 md:mt-0  justify-center items-centr md:items-start max-w-lg sm:mx-auto">
// //         <h1 className="font-extrabold flex flex-col text-2xl md:text-4xl lg:text-5xl text-center md:text-left">
// //           <span className="flex items-center text-lg md:text-2xl lg:text-3xl gap-2">
// //             Greetings{" "}
// //             <IoHandLeftSharp className="waving-hand text-yellow-300" />
// //           </span>
// //           <span className="font-extrabold lg:text-6xl creepster">
// //             Hammad Hussain,
// //           </span>
// //         </h1>

// //         <p className="text-gray-600 p-4 mt-2 opacity-80 rounded text-center md:text-left">
// //           "Bringing creativity and code together for impactful solutions. Your
// //           vision, my expertise."
// //         </p>

// //         <Link
// //           activeClass="active"
// //           to="Services"
// //           spy={true}
// //           smooth={true}
// //           duration={500}
// //           className="text-white hover:text-gray-300"
// //         >
// //           <button className="button-41 font-bold uppercase text-center flex items-center px-6 py-3 w-full gap-6">
// //             Explore More
// //             <span className="animate-ping duration-700 font-extrabold transition-all">
// //               <FaCircle />
// //             </span>
// //           </button>
// //         </Link>
// //       </div>

// //       <div className="w-full md:w-[600px] h-full md:h-[90vh] flex justify-center items-center">
// //         <Suspense fallback={<Progress />}>
// //           <Canvas>
// //             <OrbitControls />
// //             <PerspectiveCamera makeDefault position={[0, 0, 30]} />
// //             <HeroCamera>
// //               <HackerRoom
// //                 scale={6}
// //                 position={[0, -5, 0]}
// //                 rotation={[0.3, 0, 0]}
// //               />
// //             </HeroCamera>
// //             <ambientLight intensity={1} />
// //             <directionalLight position={[10, 10, 10]} intensity={0.5} />
// //           </Canvas>
// //         </Suspense>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// // // // import React from "react";
// // // // import { Suspense } from "react";
// // // // import { Canvas } from "@react-three/fiber";
// // // // import { useMediaQuery } from "react-responsive";
// // // // import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// // // // import HackerRoom from "./Man/page.jsx";
// // // // import HeroCamera from "../Hero/Cemra/page.jsx";
// // // // import Progress from "../Hero/Progress/page.jsx";
// // // // import { IoHandLeftSharp } from "react-icons/io5";
// // // // // import {Button} from '@mui/material/Button';
// // // // import Button from '@mui/material'

// // // // const Hero = () => {
// // // //   const isSmall = useMediaQuery({ maxWidth: 440 });
// // // //   const isMobile = useMediaQuery({ maxWidth: 768 });
// // // //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
// // // //   let calculateSizes = (isSmall, isMobile, isTablet) => {
// // // //     return {
// // // //       deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
// // // //       deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
// // // //       cubePosition: isSmall
// // // //         ? [4, -5, 0]
// // // //         : isMobile
// // // //         ? [5, -5, 0]
// // // //         : isTablet
// // // //         ? [5, -5, 0]
// // // //         : [9, -5.5, 0],
// // // //       reactLogoPosition: isSmall
// // // //         ? [3, 4, 0]
// // // //         : isMobile
// // // //         ? [5, 4, 0]
// // // //         : isTablet
// // // //         ? [5, 4, 0]
// // // //         : [12, 3, 0],
// // // //       ringPosition: isSmall
// // // //         ? [-5, 7, 0]
// // // //         : isMobile
// // // //         ? [-10, 10, 0]
// // // //         : isTablet
// // // //         ? [-12, 10, 0]
// // // //         : [-24, 10, 0],
// // // //       targetPosition: isSmall
// // // //         ? [-5, -10, -10]
// // // //         : isMobile
// // // //         ? [-9, -10, -10]
// // // //         : isTablet
// // // //         ? [-11, -7, -10]
// // // //         : [-13, -13, -10],
// // // //     };
// // // //   };
// // // //   const sizes = calculateSizes(isSmall, isMobile, isTablet);

// // // //   return (
// // // //     <div
// // // //       name="Home"
// // // //       className="intro h-screen  text-white flex justify-center items-center  "
// // // //     >
// // // //       <div class="  flex relative  justify-center items-start flex-col w-fit h-fit">
// // // //         <h1 class="font-extrabold flex flex-col items- text-5xl">
// // // //           <span className=" flex items-center  gap-2">
// // // //             Greetings{" "}
// // // //             <IoHandLeftSharp className="waving-hand text-yellow-300 -rotate-45" />
// // // //           </span>
// // // //           <span class="font-extrabold relative left-14  text-7xl">Hammad Hussain ,</span>
// // // //         </h1>

// // // //         <p class="text-stone-200 p-4 mt-2 opacity-25 italic rounded w-[700px]">
// // // //           "Bringing creativity and code together for impactful solutions. Your
// // // //           vision, my expertise."
// // // //         </p>
// // // //         <Button variant="contained" color="primary">
// // // //             Click Me
// // // //         </Button>
// // // //       </div>

// // // //       <div className="w-[600px] h-full">
// // // //         <Suspense fallback={<Progress />}>
// // // //           <Canvas className="  flex justify-center items-center">
// // // //             <OrbitControls />
// // // //             {/* To hide controller */}
// // // //             {/* <Leva hidden /> */}
// // // //             <PerspectiveCamera makeDefault position={[0, 0, 30]} />

// // // //             {/* <HeroCamera isMobile={isMobile}> */}
// // // //             <HackerRoom
// // // //               scale={10}
// // // //               // scale={sizes.deskScale}
// // // //               position={[0, -9, 0]}
// // // //               rotation={[0.3, 0, 0]}
// // // //               // scale={0.1}  rotation={[0.2, 3.1, 0]}
// // // //             />
// // // //             {/* </HeroCamera> */}

// // // //             <ambientLight intensity={1} />
// // // //             <directionalLight position={[10, 10, 10]} intensity={0.5} />

// // // //             <ambientLight intensity={1} />
// // // //             <directionalLight position={[10, 10, 10]} intensity={0.5} />
// // // //           </Canvas>{" "}
// // // //         </Suspense>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Hero;

// // // import React, { Suspense } from "react";
// // // import { Canvas } from "@react-three/fiber";
// // // import { useMediaQuery } from "react-responsive";
// // // import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// // // import HackerRoom from "./Man/page.jsx";
// // // import Progress from "../Hero/Progress/page.jsx";
// // // import { IoHandLeftSharp } from "react-icons/io5";
// // // import { FaCircle } from "react-icons/fa6";
// // // import HeroCamera from "../Hero/Cemra/page.jsx";
// // // import { Link } from "react-scroll";

// // // const Hero = () => {
// // //   const isSmall = useMediaQuery({ maxWidth: 440 });
// // //   const isMobile = useMediaQuery({ maxWidth: 768 });
// // //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

// // //   return (
// // //     <div
// // //       name="Home"
// // //       className="intro h-full sm:h-screen  text-white flex justify-center items-center"
// // //     >
// // //       <div className="flex relative justify-center items-start flex-col w-fit h-fit">
// // //         <h1 className="font-extrabold flex flex-col items text-5xl">
// // //           <span className="flex items-center gap-2">
// // //             Greetings{" "}
// // //             <IoHandLeftSharp className="waving-hand text-yellow-300 " />
// // //           </span>
// // //           <span className="font-extrabold relative left-14 text-7xl">
// // //             Hammad Hussain,
// // //           </span>
// // //         </h1>

// // //         <p className="text-stone-200 p-4 mt-2 opacity-25 rounded w-[700px]">
// // //           "Bringing creativity and code together for impactful solutions. Your
// // //           vision, my expertise."
// // //         </p>
// // //         <Link
// // //           activeClass="active"
// // //           to="Services"
// // //           spy={true}
// // //           smooth={true}
// // //           duration={500}
// // //           href="#"
// // //           className="text-white hover:text-gray-300"
// // //         >
// // //           <button className=" button-41  font-bold uppercase text-center flex items-center  px-7 py-3  w-fit gap-5">
// // //             Explore More
// // //             <span className=" animate-ping duration-700 font-extrabold transition-all">
// // //               <FaCircle />
// // //             </span>
// // //           </button>
// // //         </Link>
// // //       </div>

// // //       <div className="w-[600px] h-ful  h-[90vh]">
// // //         <Suspense fallback={<Progress />}>
// // //           <Canvas className="flex justify-center  items-center">
// // //             <OrbitControls />
// // //             <PerspectiveCamera makeDefault position={[0, 0, 30]} />
// // //             <HeroCamera>
// // //               <HackerRoom
// // //                 scale={5}
// // //                 position={[0, -5, 0]}
// // //                 rotation={[0.3, 0, 0]}
// // //               />
// // //             </HeroCamera>
// // //             <ambientLight intensity={1} />
// // //             <directionalLight position={[10, 10, 10]} intensity={0.5} />
// // //           </Canvas>
// // //         </Suspense>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;

// // {
// //   /* <div className="flex flex-col p24 border justify-center items-center md:items-start w-[2000p max-w-lg px4 md:px0">
// //         <h1 className="font-extrabold flex flex-col text-xl md:text-3xl lg:text-4xl">
// //           <span className="flex items-center text-lg md:text-2xl lg:text-3xl gap-2">
// //             Greetings{" "}
// //             <IoHandLeftSharp className="waving-hand text-yellow-300" />
// //           </span>
// //           <span className="font-extrabold relative md:left-0 lg:text-6xl">
// //             Hammad Hussain,
// //           </span>
// //         </h1>

// //         <p className="text-stone-200 p-4 mt-2 opacity-75 rounded">
// //           "Bringing creativity and code together for impactful solutions. Your vision, my expertise."
// //         </p>
// //         <Link
// //           activeClass="active"
// //           to="Services"
// //           spy={true}
// //           smooth={true}
// //           duration={500}
// //           href="#"
// //           className="text-white hover:text-gray-300"
// //         >
// //           <button className="button-41 font-bold uppercase text-center flex items-center px-6 py-3 w-fit gap-2">
// //             Explore More
// //             <span className="animate-ping duration-700 font-extrabold transition-all">
// //               <FaCircle />
// //             </span>
// //           </button>
// //         </Link>
// //       </div> */
// // }
