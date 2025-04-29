import React from 'react';

function HorizontalScrollbar({ children }){
  return (
    <div className="overflow-x-auto whitespace-nowrap scroll-smooth pl-30"
    style={{
      scrollbarWidth: 'none', /* Firefox */
      WebkitOverflowScrolling: 'touch', /* iOS Safari */
      msOverflowStyle: 'none', /* IE and Edge */
    }}
    >
      {children}
    </div>
  );
};

export default HorizontalScrollbar;