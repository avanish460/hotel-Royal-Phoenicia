import React from 'react'

function Card({children}){
    return (
        <div className="absolute flex justify-center w-[40%] h-[16%] sm:w-[40%] sm:h-[40%] md:w-[30%] md:h-[50%] lg:w-[25%] lg:h-[55%] mt-3 sm:mt-8 md:mt-17 lg:mt-17 border border-gray-400">
           <div className="flex justify-center w-[90%] h-[90%] sm:w-[90%] sm:h-[90%]  md:w-[90%] md:h-[90%] lg:w-[90%] lg:h-[92%] mt-1.5 sm:mt-3 bg-white">
            <div className="text-center w-[90%] h-[90%] sm:w-[90%] sm:h-[90%] md:w-[90%] md:h-[90%] lg:w-[90%] lg:h-[92%] mt-2 border border-gray-400 text-[7px] sm:text-xs text-gray-500 p-2 sm:p-3 md:p-5 lg:p-8">
                {children}
            </div>
           </div>
        </div>
    )
}

export default Card;