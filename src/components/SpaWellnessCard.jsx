import React from "react";

function SpaWellnessCard(props) {
  return (
    <div className="overflow-hidden">
      <div className="relative w-[34vw] sm:w-[35vw] md:w-[35vw] lg:w-[33vw] h-[30vh] sm:h-[75vh] md:h-[95vh] lg:h-[120vh] border border-gray-500 transition-transform duration-300 hover:scale-105">
        <div>
          <div className="flex flex-col text-center">
            <div className="flex justify-center">
              <span className="absolute text-sm sm:text-2xl md:text-3xl text-white font-serif tracking-widest mt-[55%] sm:mt-[65%] md:mt-[60%]">
                {props.title1}
              </span>
              <span className="absolute text-md sm:text-4xl md:text-5xl text-white font-serif tracking-wider p-4 sm:p-6 md:p-8 lg:p-10 mt-[55%] sm:mt-[65%] md:mt-[60%]">
                {props.title2}
              </span>
            </div>
            <div className="flex justify-center">
              <span className="absolute w-[80%] sm:w-[80%] md:w-[80%] text-[7px] text-[7px] sm:text-xs md:text-sm text-center text-white mt-[80%] sm:mt-[90%] md:mt-[90%] p-2 opacity-0 hover:opacity-100 transition-all duration-300">
                {props.content}
              </span>
            </div>
          </div>
          <div>
            <img
              src={props.bgImg}
              alt="background wellness image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaWellnessCard;
