import React, { useState } from 'react';
import NumberButton from '../components/NumberButton';
import Pool from '../assets/hoverPool.png'
import Room from '../assets/hoverRoom.png'
import Dining from '../assets/hoverDining.png'
import ArrowButton from '../assets/hoverArrow.svg';
import HoverCard from '../components/HoverCards';
import PackageImg1 from '../assets/PackageImg1.png'
import PackageImg2 from '../assets/PackageImg2.png'
import PackageImg3 from '../assets/PackageImg3.png'
import MoreBtn from '../assets/moreBtn1.png'
import Button from '../components/Button';
import HoverBtn from '../components/HoverBtn';
import PackageCard from '../components/PackageCard';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

function HotelPage(){
    
    return (
        <div>
            <div className="flex justify-center">
                <NumberButton number={"II"} className={"text-gray-400"}/>
            </div>
            <div className="flex justify-between ml-1 mr-1">
                <HoverCard imgUrl={Room} title={"Rooms"}/>
                <HoverCard imgUrl={Pool} title={"Pools"}/>
                <HoverCard imgUrl={Dining} title={"Dining"}/>
            </div>
            <div className="flex justify-center p-10">
                <HoverBtn imgUrl={ArrowButton} title={"Accommodation"} className="h-25" className1={"px-5 py-3"} className2={"text-gray-500"}/>
            </div>
            <div className="w-full h-full bg-red-50">
                <div className="flex justify-center">
                <h1 className="text-5xl text-gray-950 font-serif tracking-widest mt-20 p-15">Stay packages</h1>
                </div>
                
                <HorizontalScrollbar>
                    <PackageCard packageImgUrl={PackageImg1} btnUrl={MoreBtn} title={"Royal Weekend Escape Package"} subtitle={"FROM BHD 250 / Per Person / 3 Night"}/>
                    <PackageCard packageImgUrl={PackageImg3} btnUrl={MoreBtn} title={"Family Fun Staycation"} subtitle={"FROM BHD 150 / 4 Person / 2 Night"}/>
                    <PackageCard packageImgUrl={PackageImg2} btnUrl={MoreBtn} title={"Family Fun Staycation"} subtitle={"FROM BHD 150 / 4 Person / 2 Night"}/>
                </HorizontalScrollbar>
                
                <div className="flex justify-center">
                    <div className="w-250 border-t border-gray-500 mt-10 p-5"></div>
                </div>
                
            </div>
        </div>
    )
}

export default HotelPage;