import React, {useState} from "react";

function HoverBtn({imgUrl, title, btnIcon, className, className1, className2}){

    const [isImageVisible, setIsImageVisible] = useState(false);
      
          const handelMouseEnter = () => {
              setIsImageVisible(true);
          };
      
          const handelMouseLeave = () => {
              setIsImageVisible(false);
          };
    return (
        <div>
            {title && (<button
                onMouseEnter={handelMouseEnter}
                onMouseLeave={handelMouseLeave}
                className={`relative rounded-full border border-gray-400 mt-3 hover:invisible cursor-pointer ${className1}`}
            >
            <span className={`p-3 text-xs font-sans ${className2}`}>{title}</span>
            {isImageVisible && (
                <img src={imgUrl} alt="Arrow button image" className={`absolute top-0 -mt-3 hover:visible ${className}`}/>
            )}
            </button>
          )}
          {!title && (
            <div
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
            className={`relative hover:invisible cursor-pointer ${className1}`}
            >
                <img src={btnIcon} alt="Booking Button" />
                {isImageVisible && (
                <img src={imgUrl} alt="Booking Button" className={`absolute top-0 hover:visible ${className}`}/>
            )}
            </div>
          )}
        </div>
    )
}

export default HoverBtn;