// import React from "react";
// import Clients from "./Clients/page";
// import Globe from "react-globe.gl";
// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";

// const About = () => {
//   // const ref = useRef()

//   // useFrame((_, delta) => {
//   //   ref.current.rotation.x += 1 * delta
//   //   ref.current.rotation.y += 0.5 * delta
//   // })
//   return (
//     <div className="h-scree">
//       <div>
//         {/*
//       <Canvas><mesh
//       // {...props}
//       ref={ref} */}
//         {/* > */}
//         <Globe
//           objectRotation={[20, 2, 0]} // Use an array instead of comma-separated values
//           height={326}
//           width={326}
//           backgroundColor="rgba(0, 0, 0, 0)"
//           backgroundImageOpacity={0.5}
//           showAtmosphere
//           showGraticules
//           globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//           bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
//           labelsData={[
//             {
//               lat: 40,
//               lng: -100,
//               text: "Rjieka, Croatia",
//               color: "white",
//               size: 15,
//             },
//           ]}
//         />
//         {/* </mesh></Canvas> */}
//       </div>
//       <Clients />
//     </div>
//   );
// };

// export default About;

import React from "react";
import Clients from "./Clients/page";
import Globe from "react-globe.gl";
import "./../../App.css";

const About = () => {
  const N = 10;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    maxR: Math.random() * 20 + 3,
    propagationSpeed: (Math.random() - 0.5) * 20 + 1,
    repeatPeriod: Math.random() * 2000 + 200,
  }));

  const colorInterpolator = (t) => `rgba(200,10,50,${Math.sqrt(1 - t)})`;
  return (
    <div className="h-sreen">
      <div className="grid-container">
        <div className="item1">
          <div className="globe-continer  flex justify-center items-center  rounded-2xl w-fit  overflow-hidden">
            <div className="  overflow-hidden">
              <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                ringsData={gData}
                ringColor={() => colorInterpolator}
                ringMaxRadius="maxR"
                ringPropagationSpeed="propagationSpeed"
                ringRepeatPeriod="repeatPeriod"
                height={326}
                width={326}
                backgroundColor="#050607"
              />
            </div>
            <div className=" text-lg">
              <h1 className=" font-extrabold">
                I’m very flexible with time zone communications & locations
              </h1>
              <p className=" text-stone-200">
                I'm based in Rjieka, Croatia and open to remote work worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="item2">
          {" "}
          <div className="grid1 w-72 h-72"></div>
          <div className=" text-lg">
            <h1 className=" font-extrabold">
              I’m very flexible with time zone communications & locations
            </h1>
            <p className=" text-stone-200">
              I'm based in Rjieka, Croatia and open to remote work worldwide.
            </p>
          </div>
        </div>
        <div className="item3">
          <div className="grid2 w-72 h-72"></div>
          <div className=" text-lg">
            <h1 className=" font-extrabold">
              I’m very flexible with time zone communications & locations
            </h1>
            <p className=" text-stone-200">
              I'm based in Rjieka, Croatia and open to remote work worldwide.
            </p>
          </div>
        </div>
        <div className="item4">
          <div className="grid3 w-44 h-44"></div>
          <div className=" text-lg">
            <h1 className=" font-extrabold">
              I’m very flexible with time zone communications & locations
            </h1>
            <p className=" text-stone-200">
              I'm based in Rjieka, Croatia and open to remote work worldwide.
            </p>
          </div>
        </div>
        <div className="item5">
          <div className="grid4 w-full h-72"></div>
          <div className=" text-lg">
            <h1 className=" font-extrabold">
              I’m very flexible with time zone communications & locations
            </h1>
            <p className=" text-stone-200">
              I'm based in Rjieka, Croatia and open to remote work worldwide.
            </p>
          </div>
        </div>
      </div>
      <Clients />
    </div>
  );
};

export default About;

// import React, { useRef, useEffect, useState } from "react";
// import Clients from "./Clients/page";
// import Globe from "react-globe.gl";
// import "./../../App.css";

// const About = () => {
//   const N = 10;
//   const gData = [...Array(N).keys()].map(() => ({
//     lat: (Math.random() - 0.5) * 180,
//     lng: (Math.random() - 0.5) * 360,
//     maxR: Math.random() * 20 + 3,
//     propagationSpeed: (Math.random() - 0.5) * 20 + 1,
//     repeatPeriod: Math.random() * 2000 + 200,
//   }));

//   const colorInterpolator = (t) => `rgba(200,10,50,${Math.sqrt(1 - t)})`;

//   return (
//     <div className="h-sceen">
//       {/* <div className="globe-continer border overflow-hidden bg-red-50 rounded-2xl -fit">
//         <Globe
//           globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//           ringsData={gData}
//           ringColor={() => colorInterpolator}
//           ringMaxRadius="maxR"
//           ringPropagationSpeed="propagationSpeed"
//           ringRepeatPeriod="repeatPeriod"
//           height={326}
//           width={326}
//         />
//       </div>
//        */}
//       <div className="globe-coniner bg-red-20 rounded-2xl w-fit ">
//         <Globe
//           globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
//           ringsData={gData}
//           ringColor={() => colorInterpolator}
//           ringMaxRadius="maxR"
//           ringPropagationSpeed="propagationSpeed"
//           ringRepeatPeriod="repeatPeriod"
//           height={326}
//           width={326}
//           backgroundColor="#07090b"
//         />
//       </div>
//       <Clients />
//     </div>
//   );
// };

// export default About;
