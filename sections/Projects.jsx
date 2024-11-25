import React, { Suspense, useState } from "react";
import { myProjects } from "./constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1; // Corrected condition
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];
  return (
    <section id="work" className="c-space my-20">
      <h3
        className="head-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
          from-indigo-400 
          via-purple-500 
          to-pink-600 
          bg-clip-text 
          text-transparent"
      >
        My Work
      </h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 w-full gap-5 ">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0 ">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-blur-3xl backdeop-filter w-fit rounded-lg "
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {" "}
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div className="texh-logo" key={index}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              rel="noreferrer"
              href={currentProject.href}
              target="_blank"
              className="flex items-center gap-2 cursor-pointer text-white-600 "
            >
              <p>Check Live Site</p>
              <img className="w-3 h-3" src="assets/arrow-up.png" alt="arrow" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="arrow-left"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="arrow-right"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full ">
          <Canvas>
            <ambientLight intensity={Math.Pi} />
            <directionalLight position={[10, 10, 5]} angle={0.3} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject?.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;