import React, {useState} from "react";

function HoverBtn({imgUrl, title, className}){

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
                className="relative rounded-full px-5 py-3 border border-gray-400 hover:invisible"
            >
            <span className="p-3 text-xs text-gray-500 font-sans">{title}</span>
            {isImageVisible && (
                <img src={imgUrl} alt="Arrow button image" className={`absolute top-0 -mt-6 hover:visible ${className}`}/>
            )}
          </button>
        </div>
    )
}

export default HoverBtn;