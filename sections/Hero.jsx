import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "./constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/cube";
import Rings from "../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  // Controls for manipulating the HackerRoom's position and rotation

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minwidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="min-h-screen   w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col c-space gap-3 sm:mt-36 mt-20">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Peter <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag  bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
          from-indigo-400 
          via-purple-500 
          to-pink-600 
          bg-clip-text 
          text-transparent">
          Crafting Products & Brands
          <span className="hidden ml-2 sm:inline transition-opacity duration-300 ease-in-out">
            That Stand the Test of Time
          </span>
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                position={sizes.deskPosition}
                rotation={[0, Math.PI, 0]}
                scale={sizes.deskScale} // Updated to use the correct control values
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} /> // Ambient light for overall
            illumination
            <directionalLight position={[10, 10, 10]} intensity={0.5} /> //
            Directional light for shadows and highlights
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
        <a href="#about" className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClassname="sm:w-fit w-full sm:min-w-p6"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
