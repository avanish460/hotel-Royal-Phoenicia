import React from "react";
import HoverBtn from "./HoverBtn";

function PackageCard({packageImgUrl, btnUrl, title, subtitle}){
    return (
        <div className="inline-block p-3">
            <div className="relative flex justify-center w-120 h-90 border border-gray-500">
                    <img src={packageImgUrl} alt={title} />
                        <div className="absolute flex flex-col w-114 h-84 mt-3 border border-gray-500">
                            <span className="flex justify-center text-white text-xs p-10">All season</span>
                            
                            <div className="flex flex-col p-12">
                                <h2 className="flex justify-center text-xl text-white font-serif">{title}</h2>
                                <span className="flex justify-center text-[9px] text-gray-300 font-sans tracking-wide">{subtitle}</span>
                            </div>

                            <div>
                                <HoverBtn imgUrl={btnUrl} title={"MORE"} className="left-0" className1={"px-4 py-1 backdrop-blur-[1px]"} className2={"text-[10px] text-white"}/>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default PackageCard;