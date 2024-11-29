import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../deskroom.js";
import HeroCamera from "./Cemra/page.jsx";
import Progress from "./Progress/page.jsx";

const Hero = () => {
  // const isSmall = useMediaQuery({ maxWidth: 440 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // const calculateSizes = (isSmall, isMobile, isTablet) => {
  //   return {
  //     deskScale: isSmall ? 0.05 : isMobile ? 1.6 : 0.065,
  //     deskPosition: isMobile ? [0, -12, 0] : [0.25, -6, 0],
  //     cubePosition: isSmall
  //       ? [4, -5, 0]
  //       : isMobile
  //       ? [5, -15, 0]
  //       : isTablet
  //       ? [5, -5, 0]
  //       : [9, -5.5, 0],
  //     reactLogoPosition: isSmall
  //       ? [3, 4, 0]
  //       : isMobile
  //       ? [5, 4, 0]
  //       : isTablet
  //       ? [5, 4, 0]
  //       : [12, 3, 0],
  //     ringPosition: isSmall
  //       ? [-5, 7, 0]
  //       : isMobile
  //       ? [-10, 10, 0]
  //       : isTablet
  //       ? [-12, 10, 0]
  //       : [-24, 10, 0],
  //     targetPosition: isSmall
  //       ? [-5, -10, -10]
  //       : isMobile
  //       ? [-9, -10, -10]
  //       : isTablet
  //       ? [-11, -7, -10]
  //       : [-13, -13, -10],
  //   };
  // };

  // const sizes = calculateSizes(isSmall, isMobile, isTablet);
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


  return (
    <div
      name="Services"
      className="h-full sm:h-screen text- flex flex-col-reverse md:flex-row justify-center items-center"
    >
      <div className="w-full h-96 sm:h-screen  flex justify-center items-center">
        <Suspense fallback={<Progress />}>
          <Canvas className="flex justify-center items-center">
            <OrbitControls />
            <PerspectiveCamera  />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
               scale={scaleValue} // Dynamic scale based on screen size
               position={positionValue} 
                // scale={sizes.deskScale} // Dynamically set scale based on screen size
                // position={sizes.deskPosition} // Dynamically set position based on screen size
                rotation={[0.5, 0.2, 0]} // You can adjust rotation based on needs
              />
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Canvas>
        </Suspense>
      </div>

      <div className="flex flex-col justify-end text-end items- p-4 md:w-1/2">
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
          Meet Our Next.js Full Stack Developer
        </h1>
        <p className="p-4 mt-2 rounded w-full max-w-lg text-center">
          Specializing in Next.js, our full stack developer creates dynamic,
          high-performance web applications. With expertise in both frontend and
          backend, they turn complex requirements into elegant solutions. Let’s
          explore modern web development together!
        </p>
      </div>
    </div>
  );
};

export default Hero;








// import React, { Suspense, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";
// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import HackerRoom from "../deskroom.js";
// import HeroCamera from "./Cemra/page.jsx";
// import Progress from "./Progress/page.jsx";

// const Hero = () => {
//   const isSmall = useMediaQuery({ maxWidth: 440 });
//   const isMobile = useMediaQuery({ maxWidth: 768 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

//   const [scale, setScale] = useState(0.9);  // Dynamic scale
//   const [position, setPosition] = useState([5, -5, 0]); // Dynamic position

//   const calculateSizes = (isSmall, isMobile, isTablet) => {
//     return {
//       deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
//       deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
//       cubePosition: isSmall
//         ? [4, -5, 0]
//         : isMobile
//         ? [5, -5, 0]
//         : isTablet
//         ? [5, -5, 0]
//         : [9, -5.5, 0],
//       reactLogoPosition: isSmall
//         ? [3, 4, 0]
//         : isMobile
//         ? [5, 4, 0]
//         : isTablet
//         ? [5, 4, 0]
//         : [12, 3, 0],
//       ringPosition: isSmall
//         ? [-5, 7, 0]
//         : isMobile
//         ? [-10, 10, 0]
//         : isTablet
//         ? [-12, 10, 0]
//         : [-24, 10, 0],
//       targetPosition: isSmall
//         ? [-5, -10, -10]
//         : isMobile
//         ? [-9, -10, -10]
//         : isTablet
//         ? [-11, -7, -10]
//         : [-13, -13, -10],
//     };
//   };

//   const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   return (
//     <div
//       name="Services"
//       className="h-screen flex flex-col-reverse md:flex-row justify-center items-center"
//     >
//       <div className="w-full h-full flex justify-center items-center">
//         <Suspense fallback={<Progress />}>
//           <Canvas className="flex justify-center items-center">
//             <OrbitControls />
//             <PerspectiveCamera makeDefault position={[0, 0, 20]} />
//             <HeroCamera isMobile={isMobile}>
//               <HackerRoom
//                 scale={scale}
//                 position={position}
//                 rotation={[0.5, 0.2, 0]}
//               />
//             </HeroCamera>
//             <ambientLight intensity={1} />
//             <directionalLight position={[10, 10, 10]} intensity={0.5} />
//           </Canvas>
//         </Suspense>
//       </div>
//       <div className="flex flex-col justify-end text-end items-center p-4 md:w-1/2">
//         <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
//           Meet Our Next.js Full Stack Developer
//         </h1>
//         <p className="p-4 mt-2 rounded w-full max-w-lg text-center">
//           Specializing in Next.js, our full stack developer creates dynamic,
//           high-performance web applications. With expertise in both frontend and
//           backend, they turn complex requirements into elegant solutions. Let’s
//           explore modern web development together!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;







// // import React, { Suspense } from "react";
// // import { Canvas } from "@react-three/fiber";
// // import { useMediaQuery } from "react-responsive";
// // import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// // import HackerRoom from "../deskroom.js";
// // import HeroCamera from "./Cemra/page.jsx";
// // import Progress from "./Progress/page.jsx";

// // const Hero = () => {
// //   const isSmall = useMediaQuery({ maxWidth: 440 });
// //   const isMobile = useMediaQuery({ maxWidth: 768 });
// //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

// //   const calculateSizes = (isSmall, isMobile, isTablet) => {
// //     return {
// //       deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
// //       deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
// //       cubePosition: isSmall
// //         ? [4, -5, 0]
// //         : isMobile
// //         ? [5, -5, 0]
// //         : isTablet
// //         ? [5, -5, 0]
// //         : [9, -5.5, 0],
// //       reactLogoPosition: isSmall
// //         ? [3, 4, 0]
// //         : isMobile
// //         ? [5, 4, 0]
// //         : isTablet
// //         ? [5, 4, 0]
// //         : [12, 3, 0],
// //       ringPosition: isSmall
// //         ? [-5, 7, 0]
// //         : isMobile
// //         ? [-10, 10, 0]
// //         : isTablet
// //         ? [-12, 10, 0]
// //         : [-24, 10, 0],
// //       targetPosition: isSmall
// //         ? [-5, -10, -10]
// //         : isMobile
// //         ? [-9, -10, -10]
// //         : isTablet
// //         ? [-11, -7, -10]
// //         : [-13, -13, -10],
// //     };
// //   };

// //   const sizes = calculateSizes(isSmall, isMobile, isTablet);

// //   return (
// //     <div
// //       name="Services"
// //       className="h-screen text- flex flex-col-reverse md:flex-row justify-center items-center"
// //     >
// //       <div className="w-full h-full flex justify-center items-center">
// //         <Suspense fallback={<Progress />}>
// //           <Canvas className="flex justify-center items-center">
// //             <OrbitControls />
// //             <PerspectiveCamera makeDefault position={[0, 0, 20]} />
// //             <HeroCamera isMobile={isMobile}>
// //               {" "}
// //               <HackerRoom
// //                 scale={0.9}
// //                 position={[5, -5, 0]}
// //                 rotation={[0.5, 0.2, 0]}
// //               />
// //             </HeroCamera>
// //             <ambientLight intensity={1} />
// //             <directionalLight position={[10, 10, 10]} intensity={0.5} />
// //           </Canvas>
// //         </Suspense>
// //       </div>
// //       <div className="flex flex-col justify-end text-end items- p-4 md:w-1/2">
// //         <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl">
// //           Meet Our Next.js Full Stack Developer
// //         </h1>
// //         <p className=" p-4 mt-2 rounded w-full max-w-lg text-center">
// //           Specializing in Next.js, our full stack developer creates dynamic,
// //           high-performance web applications. With expertise in both frontend and
// //           backend, they turn complex requirements into elegant solutions. Let’s
// //           explore modern web development together!
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;



// // // import React from "react";
// // // import { Leva } from "leva";
// // // import { Suspense } from "react";
// // // import { Canvas } from "@react-three/fiber";
// // // import { useMediaQuery } from "react-responsive";
// // // import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// // // import HackerRoom from "../deskroom.js";
// // // import HeroCamera from "./Cemra/page.jsx";
// // // import Progress from "./Progress/page.jsx";

// // // const Hero = () => {
// // //   const isSmall = useMediaQuery({ maxWidth: 440 });
// // //   const isMobile = useMediaQuery({ maxWidth: 768 });
// // //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
// // //   let calculateSizes = (isSmall, isMobile, isTablet) => {
// // //     return {
// // //       deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
// // //       deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
// // //       cubePosition: isSmall
// // //         ? [4, -5, 0]
// // //         : isMobile
// // //         ? [5, -5, 0]
// // //         : isTablet
// // //         ? [5, -5, 0]
// // //         : [9, -5.5, 0],
// // //       reactLogoPosition: isSmall
// // //         ? [3, 4, 0]
// // //         : isMobile
// // //         ? [5, 4, 0]
// // //         : isTablet
// // //         ? [5, 4, 0]
// // //         : [12, 3, 0],
// // //       ringPosition: isSmall
// // //         ? [-5, 7, 0]
// // //         : isMobile
// // //         ? [-10, 10, 0]
// // //         : isTablet
// // //         ? [-12, 10, 0]
// // //         : [-24, 10, 0],
// // //       targetPosition: isSmall
// // //         ? [-5, -10, -10]
// // //         : isMobile
// // //         ? [-9, -10, -10]
// // //         : isTablet
// // //         ? [-11, -7, -10]
// // //         : [-13, -13, -10],
// // //     };
// // //   };
// // //   const sizes = calculateSizes(isSmall, isMobile, isTablet);

// // //   return (
// // //     <div name="Services" className=" h-screen text-white flex justify-center items-center">
// // //       <div className="w-full h-full flex justify-center items-center">
// // //         <Suspense fallback={<Progress />}>
// // //           <Canvas className="flex justify-center  items-center">
// // //             <OrbitControls />
// // //             <PerspectiveCamera makeDefault position={[0, 0, 20]} />
// // //             <HackerRoom scale={0.9} position={[5, -5, 0]}  rotation={[0.5, 0.2, 0]} />
// // //             <ambientLight intensity={1} />
// // //             <directionalLight position={[10, 10, 10]} intensity={0.5} />
// // //           </Canvas>
// // //         </Suspense>
// // //       </div>
// // //       <div class=" flex  justify-center text-center items-center flex-col">
// // //         <h1 class="font-extrabold text-2xl">
// // //           Meet Our Next.js Full Stack Developer
// // //         </h1>
// // //         <p class="text-stone-200 p-4 mt-2 rounded w-[700px]">
// // //           Specializing in Next.js, our full stack developer creates dynamic,
// // //           high-performance web applications. With expertise in both frontend and
// // //           backend, they turn complex requirements into elegant solutions. Let’s
// // //           explore modern web development together!
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Hero;

