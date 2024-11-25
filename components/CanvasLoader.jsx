import React from "react";
import { Loader, useProgress, Html } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14, // Corrected typo from 'fontSice' to 'fontSize'
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress !== 0 ? (
          `${progress.toFixed(2)}%`
        ) : (
          <Loader size={40} /> // Corrected typo from 'anmate-spin' to 'animate-spin'
        )}
      </p>
    </Html>
  );
};

export default CanvasLoader;
