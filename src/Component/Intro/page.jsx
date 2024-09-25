import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "./Man/page.jsx";
import HeroCamera from "../Hero/Cemra/page.jsx";
import Progress from "../Hero/Progress/page.jsx";
import { IoHandLeftSharp } from "react-icons/io5";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  let calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6, 0],
      cubePosition: isSmall
        ? [4, -5, 0]
        : isMobile
        ? [5, -5, 0]
        : isTablet
        ? [5, -5, 0]
        : [9, -5.5, 0],
      reactLogoPosition: isSmall
        ? [3, 4, 0]
        : isMobile
        ? [5, 4, 0]
        : isTablet
        ? [5, 4, 0]
        : [12, 3, 0],
      ringPosition: isSmall
        ? [-5, 7, 0]
        : isMobile
        ? [-10, 10, 0]
        : isTablet
        ? [-12, 10, 0]
        : [-24, 10, 0],
      targetPosition: isSmall
        ? [-5, -10, -10]
        : isMobile
        ? [-9, -10, -10]
        : isTablet
        ? [-11, -7, -10]
        : [-13, -13, -10],
    };
  };
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <div
      name="Home"
      className="intro h-screen  text-white flex justify-center items-center  "
    >
      <div class="  flex relative  justify-center items-start flex-col w-fit h-fit">
        <h1 class="font-extrabold flex flex-col items- text-5xl">
          <span className=" flex items-center  gap-2">
            Greetings{" "}
            <IoHandLeftSharp className=" text-yellow-200 -rotate-45" />
          </span>
          <span class="font-extrabold relative left-14 text-7xl">Hammad Hussain,</span>
        </h1>

        <p class="text-stone-200 p-4 mt-2 rounded w-[700px]">
          "Bringing creativity and code together for impactful solutions. Your
          vision, my expertise."
        </p>
      </div>

      <div className="w-[600px] h-full">
        <Suspense fallback={<Progress />}>
          <Canvas className="  flex justify-center items-center">
            <OrbitControls />
            {/* To hide controller */}
            {/* <Leva hidden /> */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            {/* <HeroCamera isMobile={isMobile}> */}
            <HackerRoom
              scale={10}
              // scale={sizes.deskScale}
              position={[0, -9, 0]}
              rotation={[0.3, 0, 0]}
              // scale={0.1}  rotation={[0.2, 3.1, 0]}
            />
            {/* </HeroCamera> */}

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Canvas>{" "}
        </Suspense>
      </div>
    </div>
  );
};

export default Hero;
