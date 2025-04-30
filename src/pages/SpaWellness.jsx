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
            <div className="absolute left-150 z-10 -mt-10">
            <NumberButton number={"III"} className="text-white" />
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
            <HoverBtn imgUrl={MoreBtn} title={"Spa & Wellness"} className={"-mt-10 w-25 h-25 opacity-100"} className1={"px-5 py-2 backdrop-blur-xs opacity-100"} className2={"text-white p-2 font-sans tracking-wider"}/>
        </div>
        </div>
    )
}

export default SpaWellness;