import React from "react";


function SpaWellnessCard(props){
    return(
        <div>
            <div className="relative w-105 h-screen border border-gray-500">
                <div className="flex flex-col text-center">
                    <div className="flex justify-center">
                    <span className="absolute text-3xl text-white font-serif tracking-widest mt-70">{props.title1}</span>
                    <span className="absolute text-5xl text-white font-serif tracking-wider p-10 mt-70">{props.title2}</span>
                    </div>
                    <div className="flex justify-center">
                        <span className="absolute w-50 h-50 text-xs text-center text-white mt-95 p-2 opacity-0 hover:opacity-100 shadow-xs">{props.content}</span>
                    </div>
                </div>
                <div>
                <img src={props.bgImg} alt="background wellness image" />
                <div className="absolute -bottom-27.5 left-0 w-full h-60 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
            </div>
        </div>
    )
}

export default SpaWellnessCard;