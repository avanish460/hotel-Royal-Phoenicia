import React, { useState } from "react";

function HoverCard({ imgUrl, title }) {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsImageVisible(true);
  };

  const handleMouseLeave = () => {
    setIsImageVisible(false);
  };

  return (
    <div className="flex justify-center p-2">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex justify-center w-[100px] h-[120px] sm:w-[190px] sm:h-[250px] md:w-[260px] md:h-[300px] lg:w-[400px] lg:h-[390px] border-b border-l border-gray-500 relative" // Added relative for absolute positioning of elements inside
      >
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-sky-900 font-serif tracking-wider font-thin transition-all duration-300 hover:text-white hover:scale-120 z-10">
          {title}
        </span>
        {isImageVisible && (
          <img
            src={imgUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300" // Make image fill the container
            style={{ opacity: isImageVisible ? 1 : 0 }}
          />
        )}
      </div>
    </div>
  );
}

export default HoverCard;
