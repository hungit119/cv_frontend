import React, { useState } from "react";

const ZoomableElement = ({ children }) => {
  const [scale, setScale] = useState(1);

  const handleWheel = (event) => {
    // Determine the scroll direction (positive: zoom in, negative: zoom out)
    const scrollDelta = event.deltaY > 0 ? -0.1 : 0.1;

    // Calculate the new scale with a minimum and maximum limit
    const newScale = Math.min(Math.max(scale + scrollDelta, 0.5), 3);

    // Update the scale state
    setScale(newScale);
  };

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top left",
        border: "1px solid black",
      }}
      onWheel={handleWheel}
    >
      {children}
    </div>
  );
};

export default ZoomableElement;
