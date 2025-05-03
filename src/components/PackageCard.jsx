import React from "react";
import HoverBtn from "./HoverBtn";
import HoverBookingBtn from '../assets/hoverBookingBtn.png';
import BookingBtn from '../assets/bookingBtn.png';

function PackageCard({ packageImgUrl, btnUrl, title, subtitle }) {
  return (
    <div className="inline-block p-2 sm:p-3 md:p-4 lg:p-5">
      <div className="relative flex justify-center w-[280px] h-[210px] sm:w-[320px] sm:h-[240px] md:w-[360px] md:h-[270px] lg:w-[400px] lg:h-[300px] border border-gray-500">
        <img
          src={packageImgUrl}
          alt={title}
          className="w-full h-full object-cover" // Ensure image covers the entire card
        />
        <div className="absolute flex flex-col w-[95%] h-[90%] mt-2 sm:mt-3 md:mt-4 lg:mt-5 border border-gray-500">
          <span className="flex justify-center text-white text-xs sm:text-sm md:text-md lg:text-lg p-2 sm:p-3 md:p-4 lg:p-5">
            All season
          </span>

          <div className="flex flex-col p-5 mt-5 sm:p-7 md:p-8 lg:p-8">
            <h2 className="flex justify-center text-xs sm:text-md md:text-lg lg:text-xl text-white font-serif">
              {title}
            </h2>
            <span className="flex justify-center text-[6px] sm:text-[7px] md:text-[8px] lg:text-[9px] text-gray-300 font-sans tracking-wide">
              {subtitle}
            </span>
          </div>

          <div className="flex justify-center items-center gap-2">
            <HoverBtn
              imgUrl={btnUrl}
              title={"MORE"}
              className="w-10 h-10 left-2 top-1 sm:w-12 sm:h-12 md:w-12 md:h-12 md:left-4 lg:w-12 lg:h-12 lg:left-6"
              className1={"px-1 sm:px-2 sm:py-1 md:px-3 lg:px-4 backdrop-blur-[1px]"}
              className2={"text-[8px] sm:text-[9px] md:text-xs lg:text-sm text-white"}
            />
            <HoverBtn
              imgUrl={HoverBookingBtn}
              btnIcon={BookingBtn}
              className="w-11 h-11 sm:w-12 sm:h-12 md:w-12 md:h-12 lg:w-12 lg:h-12"
              className1={"px-2 w-12 h-12 top-2 sm:px-1.5 md:px-1 lg:px-1 py-1 sm:py-1 md:py-1 lg:py-1"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
