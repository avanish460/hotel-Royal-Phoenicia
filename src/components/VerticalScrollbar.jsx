import React from 'react';

function VerticalScrollbar({ children }){

  return (
    <div className="w-50 h-60 sm:w-70 sm:h-85 md:w-90 md:h-105 overflow-y-auto scroll-smooth"
    style={{
      scrollbarWidth: 'none', 
      WebkitOverflowScrolling: 'touch', 
      msOverflowStyle: 'none', 
    }}
    >
      <img src={children[0]} alt="Checkin img" className="mb-20" />
      <img src={children[1]} alt="Room img" className="mb-20"/>
      <img src={children[2]} alt="Dining img" />
    </div>
  );
};

export default VerticalScrollbar;

