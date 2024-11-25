import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5, // Access the y property for position
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  return (
    <mesh scale={1.5} rotation={[0, Math.PI / 5, 0]} ref={targetRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;