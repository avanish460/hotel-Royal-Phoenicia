import React from "react";
import venueImg from "../assets/EventImg.png";
import NumberButton from "../components/NumberButton";
import ScrollingText from "../components/ScrollingText";
import Card from "../components/Card";
import HoverBtn from "../components/HoverBtn";
import arrowBtn from '../assets/hoverArrow.svg'
import EventVerticalScroll from "../components/EventVerticalScroll";

function EventTicker({EventItems}){
    const spacedText = EventItems.map((item, index) =>
      index > 0 ? `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${item}` : item
    ).join('');
  
    return (
      <div>
        <ScrollingText 
          text={spacedText}
          textColor="text-gray-200 opacity-100"
          fontSize="text-8xl"
          fontWeight="font-serif"
        />
      </div>
    );
};

function EventPage(){
    const EventItems = [
        'Corporate Event',
        'Social Celebrations',
    ];

    return (
        <div className="relative z-0">
            <div className="flex justify-center p-10">
                <div className="flex justify-center w-220 h-110">
                    <EventVerticalScroll />
                    
                    <img src={venueImg} alt="Event venue img"/>
                </div>
            </div>
            <div className="-mt-70">
                <EventTicker EventItems={EventItems}/>
            </div>
            <div className="absolute -bottom-55 left-0 w-full h-80 bg-gradient-to-t from-sky-800 to-transparent" />
        </div>
    )
}

export default EventPage;