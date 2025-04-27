import React from 'react'

function Card({children}){
    return (
        <div className="absolute flex justify-center w-70 h-70 mt-17 border border-gray-400">
           <div className="flex justify-center w-60 h-60 mt-5 bg-white">
            <div className="text-center w-50 h-50 mt-5 border border-gray-400 text-xs text-gray-500 p-6">
                {children}
            </div>
           </div>
        </div>
    )
}

export default Card;