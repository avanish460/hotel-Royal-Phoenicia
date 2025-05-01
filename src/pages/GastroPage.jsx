import React from "react";
import VerticalScrollbar from "../components/VerticalScrollbar";
import checkIn from '../assets/gastroImg1.png';
import room from '../assets/gastroImg2.png';
import dining from '../assets/gastroImg3.png';
import restaurant from '../assets/restaurantIcon.svg'
import pool from '../assets/poolIcon.svg';
import door from '../assets/roomIcon.svg';
import NumberButton from "../components/NumberButton";

function GastroPage(){
    return (
        <div>
            <div className="flex justify-center p-10 mt-10">
                <NumberButton number={"IV"} className="text-gray-400"/>
            </div>
            <div className="text-center p-10">
                <h1 className="text-5xl font-serif tracking-widest">
                Exceptional gastronomy
                <br />
                served in elegant spaces.
                </h1>
            </div>
            <div className="flex justify-center p-20">
                <div className="mr-50">
                    <VerticalScrollbar >
                        {checkIn}
                        {room}
                        {dining}
                    </VerticalScrollbar>
                </div>
                <div className="w-65 h-70">
                    <h2 className="text-2xl font-serif tracking-widest font-light">About Us</h2>
                    <div className="flex flex-row">
                        <span className="text-xs text-gray-500 font-medium font-sans pt-5">
                            Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest. The hotel features a luxurious spa and wellness center, where guests can indulge in soothing treatments and rejuvenating massages. For those seeking to maintain their fitness routine, the fully equipped gym provides a space for exercise, while the outdoor pool offers a relaxing environment to unwind. Dining at the hotel is a pleasure, with an on-site restaurant offering a diverse selection of cuisines in an elegant atmosphere. Additionally, the hotel provides business facilities, including meeting rooms and event spaces, ideal for corporate travelers. With its comprehensive range of services.
                        </span> 
                    </div>
                    
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-250 border-t border-gray-400"></div>
            </div>

            <div className="flex justify-between w-250 ml-10 p-20">
                <div>
                    <div className="w-70 h-30 text-center">
                        <div className="flex justify-center p-1">
                          <img src={restaurant} alt="restaurant icon" className="size-7"/>
                        </div>
                        <h1 className="text-2xl font-serif tracking-widest p-2 hover:scale-120 hover:text-sky-800">Restaurant</h1>
                        <p className="text-xs text-gray-700 pt-2">
                        Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="w-70 h-30 text-center pl-6 ml-21">
                        <div className="flex justify-center p-1">
                          <img src={pool} alt="pool icon" className="size-7"/>
                        </div>
                        <h1 className="text-2xl font-serif tracking-widest p-2 hover:scale-120 hover:text-sky-800">Pool</h1>
                        <p className="text-xs text-gray-700 pt-2">
                        Royal Phoenicia Hotel features multiple outdoor swimming pools, including a dedicated children's pool, offering relaxation for all guests.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="w-70 h-30 text-center pl-6 ml-21">
                        <div className="flex justify-center p-1">
                          <img src={door} alt="door icon" className="size-5"/>
                        </div>
                        <h1 className="text-2xl font-serif tracking-widest p-2 hover:scale-120 hover:text-sky-800">Room</h1>
                        <p className="text-xs text-gray-700 pt-2">
                        Royal Phoenicia Hotel in Manama, Bahrain, offers a variety of spacious and well-equipped rooms to suit diverse guest preferences. 
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default GastroPage;