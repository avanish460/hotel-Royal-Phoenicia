import React from 'react'

function NumberButton({number, className}){
    return (
        <div>
            <div className="flex justify-center w-9 h-13 mt-0 sm:mt-10 md:mt-13 border border-gray-300">
                <div className="flex justify-center w-5 h-9 sm:w-5 sm:h-9 md:w-6 md:h-9 mt-2 border border-gray-400">
                    <span className={`mt-2 ${className}`}>{number}</span>
                </div>
            </div>
        </div>
    )
}

export default NumberButton;