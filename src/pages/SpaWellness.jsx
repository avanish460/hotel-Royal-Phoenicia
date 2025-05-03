import React from "react";
import SpaWellnessCard from "../components/SpaWellnessCard";
import FitnessImg from '../assets/spaWellnessImg1.png';
import DiningImg from '../assets/spaWellnessImg2.png';
import WellnessImg from '../assets/spaWellnessImg3.png';
import NumberButton from "../components/NumberButton";
import HoverBtn from "../components/HoverBtn";
import MoreBtn from "../assets/moreBtn1.png"

function SpaWellness(){
    
    return (
        <div className="mt-30">
            <div className="flex justify-center">
                <div className="absolute z-10 mt-1">
                <NumberButton number={"III"} className="text-xs sm:text-sm text-white font-serif" />
                </div>
            </div>
            
            <div className="relative flex p-0.5 z-0">
                <SpaWellnessCard bgImg={FitnessImg} title1={"Fitness"} title2={"Center"} 
                content={"For those looking to maintain their fitness routine while traveling, the hotel offers a well-equipped fitness center."} />
                <SpaWellnessCard bgImg={DiningImg} title1={"On-Site"} title2={"Dining"} 
                content={"The hotel features an on-site restaurant serving a variety of cuisines, diverse dining experience without leaving the premises."} />
                <SpaWellnessCard bgImg={WellnessImg} title1={"Wellness Center"} title2={"& Spa"} 
                content={"Guest can unwind with various spa services, including full-body massages, steam rooms, and other spa facilities."} />
            </div>
            <div className="flex justify-center">
                <div className="absolute z-10 -mt-15 sm:-mt-20 md:-mt-25">
                    <HoverBtn imgUrl={MoreBtn} title={"Spa & Wellness"} className={"left-5 top-2 w-10 h-10 sm:w-15 sm:h-15 md:w-22 md:h-22 sm:top-0 md:-top-3 sm:left-5 md:left-5 opacity-100"} className1={"px-1 py-1 sm:px-2 sm:py-2 md:px-3 md:py-2 backdrop-blur-xs opacity-100"} className2={"text-[8px] sm:text-[10px] md:text-xs text-white font-sans tracking-wider"}/>
                </div>
            </div>
        </div>
    )
}

export default SpaWellness;