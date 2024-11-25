import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { workExperiences } from "./constants";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const Expereince = () => {
  const [animationName, setAnimationName] = useState("idle");
  return (
    <section id="work" className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] 
          from-indigo-400 
          via-purple-500 
          to-pink-600 
          bg-clip-text 
          text-transparent">Journey Through My Career</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  animationName={animationName}
                  position-y={-3}
                  scale={3}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2 5">
              {workExperiences.map(
                ({ id, name, pos, duration, title, icon, animation }) => (
                  <div
                    onPointerOut={() => setAnimationName("idle")}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    key={id}
                    className="work-content_container group"
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img className="w-full h-full" alt="logo" src={icon} />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} --{duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expereince;
