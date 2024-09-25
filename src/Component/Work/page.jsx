import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Developer from "./Three/page";

import React from "react";

const Work = () => {
  const [animationName, setAnimationName] = useState("idle");
  const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];
  return (
    // <div>
    //   <Canvas>
    //     <ambientLight intensity={7} />
    //     <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    //     <directionalLight position={[10, 10, 10]} intensity={1} />
    //     <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

    //     <Suspense fallback={"loading ..."}>
    //       <Developer position-y={-3} scale={3} animationName={animationName} />
    //     </Suspense>
    //   </Canvas>
    // </div>

    <section className="c-space my-20" id="work" name="Work">
    <div className="w-full text-white-600">
      <p className="head-text">My Work Experience</p>

      <div className="work-container">
        <div className="work-canvas">
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

            <Suspense fallback={"loading ..."}>
              <Developer position-y={-3} scale={3} animationName={animationName} />
            </Suspense>
          </Canvas> 
        </div>

        <div className="work-content">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {workExperiences.map((item, index) => (
              <div
                key={index}
                onClick={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                onPointerOut={() => setAnimationName('idle')}
                className="work-content_container group">
                <div className="flex flex-col h-full justify-start items-center py-2">
                  <div className="work-content_logo">
                    <img className="w-full h-full" src={item.icon} alt="" />
                  </div>

                  <div className="work-content_bar" />
                </div>

                <div className="sm:p-5 px-2.5 py-5">
                  <p className="font-bold text-white-800">{item.name}</p>
                  <p className="text-sm mb-5">
                    {item.pos} -- <span>{item.duration}</span>
                  </p>
                  <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>

  );
};

export default Work;
