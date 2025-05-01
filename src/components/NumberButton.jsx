import React from 'react'

function NumberButton({number, className}){
    return (
        <div>
            <div className="flex justify-center w-10 h-14 mt-22 border border-gray-300">
                <div className="flex justify-center w-6 h-10 mt-2 border border-gray-400">
                    <span className={`mt-2 ${className}`}>{number}</span>
                </div>
            </div>
        </div>
    )
}

export default NumberButton;