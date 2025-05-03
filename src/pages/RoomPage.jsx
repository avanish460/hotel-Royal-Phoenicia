import React, { useState, useEffect } from 'react';
import NumberButton from '../components/NumberButton';
import RoomImage1 from '../assets/rPool.png';
import RoomImage2 from '../assets/rbed.png';
import RoomImage3 from '../assets/rDrawing.png';
import ArrowButton from '../assets/hoverArrow.svg';
import Card from '../components/Card';
import HotelPage from './HotelPage';
import HoverBtn from '../components/HoverBtn';

const roomImages = [RoomImage1, RoomImage2, RoomImage3];

function RoomPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showIntroText, setShowIntroText] = useState(false);

  useEffect(() => {
    // Show intro text after 5 seconds
    const introTextTimeout = setTimeout(() => {
      setShowIntroText(true);
    }, 5000);

    // Set up image carousel interval
    const imageCarouselInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % roomImages.length);
    }, 4000); // Change image every 4 seconds

    return () => {
      clearTimeout(introTextTimeout);
      clearInterval(imageCarouselInterval);
    };
  }, []);

  return (
    <div className="bg-orange-50">
      <div className="bg-gray-50">
        <div className="flex justify-center w-full -mt-65 md:-mt-0 h-40 sm:h-50 md:h-60">
          <div className="mt-20 md:mt-0">
            <NumberButton number={"I"} className={"text-gray-400 font-serif"} />
          </div>
        </div>

        {/* Intro Text */}
        <div
          className={`text-center font-serif tracking-wider text-xs p-5 z-20 transition-opacity duration-5000 ${
            showIntroText ? 'opacity-100' : 'opacity-0'
          } sm:text-2xl md:text-3xl lg:text-4xl`}
        >
          <h1 className="text-gray-800 opacity-90">
            The stay at Wellness & pool Hotel
          </h1>
          <h1 className="text-gray-800 text-xs sm:text-2xl md:text-3xl lg:text-4xl opacity-70">
            Royal Phoenicia means enjoying every moment.
            <br />
            Relax. Find inspiration. Be fascinated.
          </h1>
        </div>

        <div className="flex justify-center w-full p-20 mt-10 mb-20">
          <HoverBtn
            imgUrl={ArrowButton}
            title={"Hotel"}
            className="h-19 sm:h-20 md:h-25 left-0 ml-2 sm:ml-2 md:ml-0"
            className1={"px-5 py-3"}
            className2={"text-gray-500"}
          />
        </div>
        
      </div>
      <div className="absolute -bottom-135 sm:-bottom-150 md:-bottom-170 left-0 w-full h-15 bg-gradient-to-t from-orange-50 to-transparent" />
      

      <div className="relative flex justify-center h-screen p-4 sm:p-8 md:p-12 lg:p-20">
        {/* Image Carousel */}
        {roomImages.map((image, index) => (
          <div
            key={index}
            className={`absolute w-[90%] h-[25%] sm:w-[90%] sm:h-[50%] md:w-[90%] md:h-[70%] lg:w-[80%] lg:h-[90%] transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: '100%',
              backgroundPosition: 'center',
            }}
          >
          </div>
        ))}
        <Card>
          <p className="text-[5px] sm:text-xs md:text-sm lg:text-[16px]">Favorite hotel</p>
          <br />
          <p className="text-[5px] sm:text-xs md:text-sm lg:text-[16px]">Business and Event Spaces</p>
          <br />
          <p className="text-[5px] sm:text-xs md:text-sm lg:text-[16px]">Diverse Dining Options</p>
          <br />
          <p className="text-[5px] sm:text-xs md:text-sm lg:text-[16px]">Multiple Swimming Pools</p>
          <br />
          <p className="text-[5px] sm:text-xs md:text-sm lg:text-[16px]">Family-Friendly Amenities</p>
        </Card>
      </div>
      <div className="w-full bg-orange-50 -mt-30 sm:-mt-30 md:mt-40">
        <HotelPage />
      </div>
    </div>
  );
}

export default RoomPage;
