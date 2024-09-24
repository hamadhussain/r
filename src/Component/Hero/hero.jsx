import React from "react";
import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../deskroom.js";
import Target from "./Models/Target.jsx";

import Cube from "./Models/Cube.jsx";
import Rings from "./Models/Rings.jsx";
import ReactLogo from "./Models/ReactLogo.jsx";
// import Button from '../components/Button.jsx';
// import Target from "../components/Target.jsx";
// import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from './Cemra/page.jsx';
import Progress from './Progress/page.jsx'

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
    <div className=" h-screen  text-white flex justify-center items-center flex-col ">
      <div className="text-center flex relative top-44 justify-center border items-center">adsasd</div>
      
      <div className="w-full h-full">
      <Suspense fallback={<Progress/>}>
      <Canvas className="w-full h-full ">
        
        {/* <OrbitControls /> */}
          {/* To hide controller */}
          {/* <Leva hidden /> */}
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <HeroCamera isMobile={isMobile}>
          <HackerRoom
            scale={sizes.deskScale}
            position={sizes.deskPosition}
            rotation={[0.1, -Math.PI, 0]}
            // scale={0.1}  rotation={[0.2, 3.1, 0]}
          />
          </HeroCamera>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />

          <group>
            <Target position={sizes.targetPosition} />
            <ReactLogo position={sizes.reactLogoPosition} />

            <Rings position={sizes.ringPosition} />
            <Cube position={sizes.cubePosition} />
          </group>

          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
      </Canvas>        </Suspense>

      </div>
    </div>
  );
};

export default Hero;
