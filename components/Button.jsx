import React from "react";

const Button = ({ name, isBeam, containerClassname }) => {
  return (
    <button className={`btn ${containerClassname}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <soan className="btn-ping" />
          <soan className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
