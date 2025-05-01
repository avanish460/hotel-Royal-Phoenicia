import React from 'react';

function VerticalScrollbar({ children }){

  return (
    <div className="w-90 h-105 overflow-y-auto whitespace-nowrap scroll-smooth"
    style={{
      scrollbarWidth: 'none', /* Firefox */
      WebkitOverflowScrolling: 'touch', /* iOS Safari */
      msOverflowStyle: 'none', /* IE and Edge */
    }}
    >
      <img src={children[0]} alt="Checkin img" className="mb-20" />
      <img src={children[1]} alt="Room img" className="mb-20"/>
      <img src={children[2]} alt="Dining img" />
    </div>
  );
};

export default VerticalScrollbar;

