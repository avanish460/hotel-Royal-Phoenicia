import React, { useRef, useEffect } from 'react';

function ScrollingText({ text, textColor = 'text-gray-300', fontSize = 'text-base', fontWeight = 'font-normal' }){
    const containerRef = useRef(null);
    const textRef = useRef(null);
  
    useEffect(() => {
      const textElement = textRef.current;
      if (!textElement) return;
  
      const duration = `${text.length * 0.10}s`;
      textElement.style.setProperty('--animation-duration', duration);
    }, [text]);
  
    return (
      <div
        ref={containerRef}
        className={`overflow-hidden whitespace-nowrap ${textColor} ${fontSize} ${fontWeight} w-full`}
      >
        <span
          ref={textRef}
          className="inline-block animate-scroll-text"
          style={{
            paddingLeft: '100%',
          }}
        >
          {text}
        </span>
      </div>
    );
  };

export default ScrollingText;