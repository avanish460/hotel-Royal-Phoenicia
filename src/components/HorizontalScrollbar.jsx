import React, { useRef, useState } from 'react';

function HorizontalScrollbar({ children }){
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
      containerRef.current.style.cursor = 'grabbing';
    };
  
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1; // Adjust multiplier for sensitivity
      containerRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
      containerRef.current.style.cursor = 'grab';
    };
  
    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        containerRef.current.style.cursor = 'grab';
      }
    };
  
    return (
      <div
        ref={containerRef}
        className="overflow-x-auto whitespace-nowrap scroll-smooth pl-30"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          WebkitOverflowScrolling: 'touch', /* iOS Safari */
          msOverflowStyle: 'none', /* IE and Edge */
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    );
  };
  

export default HorizontalScrollbar;