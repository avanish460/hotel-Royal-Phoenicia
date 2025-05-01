import React from 'react';
import Card from "../components/Card";
import HoverBtn from "../components/HoverBtn";
import arrowBtn from '../assets/hoverArrow.svg'

function EventVerticalScroll(){

  return (
    <div className="absolute z-10 flex justify-center p-40 w-100 h-110 overflow-y-auto scroll-smooth"
    style={{
        scrollbarWidth: 'none', 
        WebkitOverflowScrolling: 'touch', 
        msOverflowStyle: 'none', 
        }}
    >
        <div className="absolute flex justify-center p-20 -mt-50">
            <Card>
                <h1 className="text-xl font-serif text-black tracking-wider pb-1">For Companies</h1>
                <p className="text-[9px] font-medium">
                    Host your formal business meetings in a unique and refreshing setting. Enjoy elegant venues, comfortable accommodations, and exceptional cuisine that elevate every professional gathering. 
                </p>
                <HoverBtn imgUrl={arrowBtn} title={"More"} className1={"px-2 py-1 mt-5"} className="w-14 h-14" />
            </Card>
        </div>
        <div className="absolute flex justify-center mt-100">
            <Card>
                <h1 className="text-lg font-serif text-black">Family gatherings</h1>
                <p className="text-[9px] font-medium mt-2">
                    we know how much your event means to you-be it a jubilee, anniversary, or wedding, we're here to make every detail count with elegance, care, and unforgettable experience tailored just for you.
                </p>
                <HoverBtn imgUrl={arrowBtn} title={"More"} className1={"px-2 py-1 mt-5"} className="w-14 h-14" />
            </Card>
        </div>
        <div className="absolute flex justify-center mt-200 w-70 h-100"></div>
    </div>
  );
};

export default EventVerticalScroll;

