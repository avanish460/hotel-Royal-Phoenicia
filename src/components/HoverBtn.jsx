import React, {useState} from "react";

function HoverBtn({imgUrl, title, className, className1, className2}){

    const [isImageVisible, setIsImageVisible] = useState(false);
      
          const handelMouseEnter = () => {
              setIsImageVisible(true);
          };
      
          const handelMouseLeave = () => {
              setIsImageVisible(false);
          };
    return (
        <div className="flex justify-center">
            <button
                onMouseEnter={handelMouseEnter}
                onMouseLeave={handelMouseLeave}
                className={`relative rounded-full border border-gray-400 hover:invisible ${className1}`}
            >
            <span className={`p-3 text-xs font-sans ${className2}`}>{title}</span>
            {isImageVisible && (
                <img src={imgUrl} alt="Arrow button image" className={`absolute top-0 -mt-6 hover:visible ${className}`}/>
            )}
          </button>
        </div>
    )
}

export default HoverBtn;