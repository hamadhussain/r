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
      name: "Framer",
      pos: "Lead Web Developer",
      duration: "2022 - Present",
      title:
        "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: "/assets/framer.svg",
      animation: "victory",
    },
    {
      id: 2,
      name: "Figma",
      pos: "Web Developer",
      duration: "2020 - 2022",
      title:
        "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: "/assets/figma.svg",
      animation: "clapping",
    },
    {
      id: 3,
      name: "Notion",
      pos: "Junior Web Developer",
      duration: "2019 - 2020",
      title:
        "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: "/assets/notion.svg",
      animation: "salute",
    },
  ];
  return (
    <>
      <section className="c-space my-20 hidden sm:block " id="work" name="Work">
        <div className="w-full p-24">
          <p className="head-tet text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text- ">
            My Work Experience
          </p>
          <br />
          <div className="work-container ">
            <div
              className="    nt       
 work-canvas rounded-xl"
            
            >
              <Canvas>
                <ambientLight intensity={7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                <Suspense fallback={"loading ..."}>
                  <Developer
                    position={[0, -9, 0]}
                    rotation={[0.3, 0, 0]}
                    position-y={-3}
                    scale={2.6}
                    animationName={animationName}
                  />
                </Suspense>
              </Canvas>
            </div>

            <div className="work-conent relative -top-10">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5 space-y-3">
                {workExperiences.map((item, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      setAnimationName(item.animation.toLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(item.animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                    className="work-content_container group w-[700px] nt gap-20 flex items-center p-10 rounded-xl cursor-pointer"
                  >
                    <div className="flex flex-col  h-full justify-start items-center py-2">
                      <div className="work-content_lgo">
                        <img className="w-44 h-14" src={item.icon} alt="" />
                      </div>

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-sm mb-5">
                        {item.pos} -- <span>{item.duration}</span>
                      </p>
                      <p className="group-hover:tex-white transition-all ease-in-out duration-500">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="c-space my-20 block sm:hidden" id="work" name="Work">
        <div className="w-full text-stone-200 p-6 md:p-24">
          <p className="head-tet text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center">
            My Work Experience
          </p>
          <br />
          <div className="work-container flex flex-col space-y-3 md:space-y-0 md:flex-row">
            <div
              className="                      bg-gradient-to-bl bg-opacity-35 dark:from-slate-800 dark:to-slate-950 
 
 work-canvas rounded-xl w-full md:w-1/2"
            >
              <Canvas>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

                <Suspense fallback={"loading ..."}>
                  <Developer
                    position={[0, -9, 0]}
                    rotation={[0.3, 0, 0]}
                    position-y={-3}
                    scale={2}
                    animationName={animationName}
                  />
                </Suspense>
              </Canvas>
            </div>

            <div className="work-content relative -top-10 w-full md:w-1/2">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5 space-y-3">
                {workExperiences.map((item, index) => (
                  <div
                    key={index}
                    onClick={() =>
                      setAnimationName(item.animation.toLowerCase())
                    }
                    onPointerOver={() =>
                      setAnimationName(item.animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                    className="work-content_container group w-full            bg-slate-950 
 gap-20 flex items-center p-5 rounded-xl"
                  >
                    <div className="flex hidden sm:block flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img className="w-32 h-10" src={item.icon} alt="" />
                      </div>
                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-sm mb-5">
                        {item.pos} -- <span>{item.duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
