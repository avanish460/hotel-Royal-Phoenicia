import React from "react";
import VerticalScrollbar from "../components/VerticalScrollbar";
import checkIn from '../assets/gastroImg1.png';
import room from '../assets/gastroImg2.png';
import dining from '../assets/gastroImg3.png';
import restaurant from '../assets/restaurantIcon.svg';
import pool from '../assets/poolIcon.svg';
import door from '../assets/roomIcon.svg';
import NumberButton from "../components/NumberButton";

function GastroPage() {
    return (
        <div>
            <div className="flex justify-center p-6 sm:p-8 md:p-10 mt-6 sm:mt-8 md:mt-10">
                <NumberButton number={"IV"} className="text-md font-serif text-gray-400" />
            </div>
            <div className="text-center p-4 sm:p-6 md:p-8 lg:p-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif tracking-widest">
                    Exceptional gastronomy
                    <br />
                    served in elegant spaces.
                </h1>
            </div>
            <div className="flex flex-row justify-center p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="mr-0 md:mr-10 lg:mr-16 sm:ml-10 md:ml-0 w-full md:w-auto">
                    <VerticalScrollbar>
                        {checkIn}
                        {room}
                        {dining}
                    </VerticalScrollbar>
                </div>
                <div className="w-[80%] sm:w-[70%] md:w-[30%] lg:w-[25%] md:ml-20">
                    <h2 className="text-2xl font-serif tracking-widest font-light">About Us</h2>
                    <div className="flex flex-row">
                        <span className="text-[8px] sm:text-xs text-gray-500 font-medium font-sans pt-2">
                            Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest. The hotel features a
                            luxurious spa and wellness center, where guests can indulge in soothing treatments and rejuvenating massages. For those seeking to maintain
                            their fitness routine, the fully equipped gym provides a space for exercise, while the outdoor pool offers a relaxing environment to unwind.
                            Dining at the hotel is a pleasure, with an on-site restaurant offering a diverse selection of cuisines in an elegant atmosphere. Additionally,
                            the hotel provides business facilities, including meeting rooms and event spaces, ideal for corporate travelers. With its comprehensive range of
                            services.
                        </span>
                    </div>

                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-[90%] sm:w-[80%] md:w-[80%] lg:w-[80%] border-t border-gray-400 mt-6 sm:mt-8 md:mt-10"></div>
            </div>

            <div className="flex flex-row justify-around md:w-[90%] lg:w-[95%] p-4 sm:p-6 md:p-8 lg:p-10 sm:ml-8 md:ml-15">
                <div className="w-full sm:w-auto mb-6 sm:mb-0">
                    <div className="text-center">
                        <div className="flex justify-center p-1">
                            <img src={restaurant} alt="restaurant icon" className="w-8 h-8" />
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-serif tracking-widest sm:p-2 hover:scale-120 hover:text-sky-800 transition-all">Restaurant</h1>
                        <div className="flex justify-center">
                            <p className="w-[85%] sm:w-[85%] md:w-[85%] lg:w-[75%] text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-gray-700 pt-2">
                                Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto mb-6 sm:mb-0">
                    <div className="text-center ">
                        <div className="flex justify-center p-1">
                            <img src={pool} alt="pool icon" className="w-8 h-8" />
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-serif tracking-widest sm:p-2 hover:scale-120 hover:text-sky-800 transition-all">Pool</h1>
                        <div className="flex justify-center">
                            <p className="w-[85%] sm:w-[77%] md:w-[75%] lg:w-[65%] text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-gray-700 pt-2">
                                Royal Phoenicia Hotel features multiple outdoor swimming pools, including a dedicated children&apos;s pool, offering relaxation for all guests.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <div className="text-center">
                        <div className="flex justify-center p-1">
                            <img src={door} alt="door icon" className="w-6 h-6" />
                        </div>
                        <h1 className="text-lg sm:text-xl md:text-2xl font-serif tracking-widest sm:p-2 hover:scale-120 hover:text-sky-800 transition-all pt-2 sm:pt-4">Room</h1>
                        <div className="flex justify-center">
                            <p className="w-[85%] sm:w-[75%] md:w-[75%] lg:w-[65%] text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-gray-700 pt-2">
                                Royal Phoenicia Hotel in Manama, Bahrain, offers a variety of spacious and well-equipped rooms to suit diverse guest preferences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default GastroPage;
