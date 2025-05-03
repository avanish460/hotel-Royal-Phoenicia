import React from 'react';
import NumberButton from '../components/NumberButton';
import Pool from '../assets/hoverPool.png';
import Room from '../assets/hoverRoom.png';
import Dining from '../assets/hoverDining.png';
import ArrowButton from '../assets/hoverArrow.svg';
import HoverCard from '../components/HoverCards';
import PackageImg1 from '../assets/packageImg1.png';
import PackageImg2 from '../assets/packageImg2.png';
import PackageImg3 from '../assets/packageImg3.png';
import MoreBtn from '../assets/moreBtn1.png';
import HoverBtn from '../components/HoverBtn';
import PackageCard from '../components/PackageCard';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

function HotelPage() {
  return (
    <div>
      <div className="flex justify-center">
        <NumberButton number={"II"} className={"text-gray-400 font-serif"} />
      </div>
      <div className="flex justify-between">
        <HoverCard imgUrl={Room} title={"Rooms"} />
        <HoverCard imgUrl={Pool} title={"Pools"} />
        <HoverCard imgUrl={Dining} title={"Dining"} />
      </div>
      <div className="flex justify-center p-6 sm:p-8 md:p-10 lg:p-12">
        <HoverBtn
          imgUrl={ArrowButton}
          title={"Accommodation"}
          className="h-19 sm:h-20 md:h-25 ml-4 sm:ml-4 md:ml-2"
          className1={"px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-7 lg:py-5"}
          className2={"text-gray-500"}
        />
      </div>
      <div className="w-full h-full bg-red-50">
        <div className="flex justify-center">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-950 font-serif tracking-widest mt-8 sm:mt-12 md:mt-16 lg:mt-20 p-4 sm:p-6 md:p-8 lg:p-10">
            Stay packages
          </h1>
        </div>

        <HorizontalScrollbar>
          <PackageCard
            packageImgUrl={PackageImg1}
            btnUrl={MoreBtn}
            title={"Royal Weekend Escape Package"}
            subtitle={"FROM BHD 250 / Per Person / 3 Night"}
          />
          <PackageCard
            packageImgUrl={PackageImg3}
            btnUrl={MoreBtn}
            title={"Family Fun Staycation"}
            subtitle={"FROM BHD 150 / 4 Person / 2 Night"}
          />
          <PackageCard
            packageImgUrl={PackageImg2}
            btnUrl={MoreBtn}
            title={"Family Fun Staycation"}
            subtitle={"FROM BHD 150 / 4 Person / 2 Night"}
          />
        </HorizontalScrollbar>

        <div className="flex justify-center">
          <div className="w-[65%] sm:w-[70%] md:w-[65%] lg:w-[72%] border-t border-gray-500 mt-6 sm:mt-8 md:mt-10 lg:mt-12 p-3 sm:p-4 md:p-5 lg:p-6"></div>
        </div>
      </div>
    </div>
  );
}

export default HotelPage;
