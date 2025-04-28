import React, { useState } from 'react';
import NumberButton from '../components/NumberButton';
import Pool from '../assets/hoverPool.png'
import Room from '../assets/hoverRoom.png'
import Dining from '../assets/hoverDining.png'
import ArrowButton from '../assets/hoverArrow.svg';
import HoverCard from '../components/HoverCards';
import Button from '../components/Button';
import HoverBtn from '../components/HoverBtn';

function HotelPage(){
    
    return (
        <div>
            <div className="flex justify-center">
                <NumberButton number={"II"}/>
            </div>
            <div className="flex justify-between ml-1 mr-1">
                <HoverCard imgUrl={Room} title={"Rooms"}/>
                <HoverCard imgUrl={Pool} title={"Pools"}/>
                <HoverCard imgUrl={Dining} title={"Dining"}/>
            </div>
            <div className="flex justify-center p-10">
                <HoverBtn imgUrl={ArrowButton} title={"Accommodation"} className="h-25"/>
            </div>
        </div>
    )
}

export default HotelPage;