import React from 'react';
import Card from "../components/Card";
import HoverBtn from "../components/HoverBtn";
import arrowBtn from '../assets/hoverArrow.svg'

function EventVerticalScroll(){

  return (
    <div>
    <div className="absolute z-10 flex justify-center p-25 sm:p-40 w-40 h-62.5 sm:w-60 sm:h-50 md:w-80 md:h-100 lg:w-100 lg:h-125 overflow-y-auto scroll-smooth ml-30 sm:ml-35 md:ml-60 lg:ml-75"
    style={{
        scrollbarWidth: 'none', 
        WebkitOverflowScrolling: 'touch', 
        msOverflowStyle: 'none', 
        }}
    >
        <div className="absolute flex justify-center w-110 h-110 sm:w-160 sm:h-120 md:w-240 md:h-130 lg:w-320 lg:h-140 -mt-15 sm:-mt-33 md:-mt-40 p-2">
            <Card>
                <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl font-serif text-black tracking-wider pb-2">For Companies</h1>
                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-xs">
                    Host your formal business meetings in a unique and refreshing setting. Enjoy elegant venues, comfortable accommodations, and exceptional cuisine that elevate every professional gathering. 
                </p>
                <HoverBtn imgUrl={arrowBtn} title={"More"} className1={"px-1 py-1 sm:px-2 sm:py-1 mt-4 sm:mt-5"} className="left-2 sm:left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            </Card>
        </div>
        <div className="absolute flex justify-center w-110 h-110 sm:w-160 sm:h-120 md:w-240 md:h-130 lg:w-320 lg:h-140 mt-100">
            <Card>
                <h1 className="text-md sm:text-lg md:text-xl lg:text-2xl font-serif text-black">Family gatherings</h1>
                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-xs pt-2">
                    we know how much your event means to you-be it a jubilee, anniversary, or wedding, we're here to make every detail count with elegance, care, and unforgettable experience tailored just for you.
                </p>
                <HoverBtn imgUrl={arrowBtn} title={"More"} className1={"px-1 py-1 sm:px-2 sm:py-1 mt-4 sm:mt-5"} className="left-2 sm:left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
            </Card>
        </div>
        <div className="absolute flex justify-center mt-200 w-70 h-100"></div>
    </div>
    </div>
  );
};

export default EventVerticalScroll;