import React, { useState } from "react";

function HoverCard({imgUrl, title}){

    const [isImageVisible, setIsImageVisible] = useState(false);

    const handelMouseEnter = () => {
        setIsImageVisible(true);
    };

    const handelMouseLeave = () => {
        setIsImageVisible(false);
    };

    return (
        <div>
            <div className="flex justify-center p-2">
                <div 
                    onMouseEnter={handelMouseEnter}
                    onMouseLeave={handelMouseLeave}
                    className="flex justify-center w-100 h-100 border border-gray-500"
                >
                    <span className="absolute mt-40 text-7xl text-sky-900 font-serif tracking-wider font-thin hover:text-white hover:scale-120">{title}</span>
                    {isImageVisible && (
                        <img src={imgUrl} alt="pool image"/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HoverCard;