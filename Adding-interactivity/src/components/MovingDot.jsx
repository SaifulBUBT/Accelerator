import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "400px",
        height: "400px",
        border: "1px solid black",
      }}
      data-x={position.x}
      data-y={position.y}
    >
      <div
        style={{
          position: "absolute",
          top: "-10px",
          left: "-10px",
          backgroundColor: "red",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
}
