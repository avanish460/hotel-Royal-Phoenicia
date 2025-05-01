import React from "react";
import royalLogo from '../assets/hotelLogo.svg';
import insta from '../assets/InstaIcon.svg';
import facebook from '../assets/facebookIcon.svg';
import youtube from '../assets/youtubeIcon.svg';

function FooterInfo(){
    return(
        <div>
            <div className="h-120 flex flex-row mt-55">
                <div className="flex justify-between bg-sky-900 opacity-80 w-200 h-120 p-10 text-gray-300">
                    <div className="text-xl font-serif mt-10 ml-20">
                        <h1 className="p-3 pl-5"><span className="p-5 mr-1">I</span> Rooms</h1>
                        <h1 className="p-3 pl-4"><span className="p-5 mr-1">II</span>Wellness</h1>
                        <h1 className="p-3"><span className="p-5">III</span>Gastro</h1>
                        <h1 className="p-3"><span className="p-5">IV</span>Hotel</h1>
                        <h1 className="p-3"><span className="p-5 mr-1">V</span>Events</h1>
                    </div>
                    <div className="flex flex-col mt-10 mr-10">
                        <h1 className="p-5 text-lg font-serif tracking-wider">More about rooms</h1>
                        <div className="flex flex-col ml-8 text-xs font-sans">
                           <span className="pl-2">120 comfortable rooms</span> 
                           <span className="p-2">Dinings</span> 
                           <span className="pl-2">Packages</span> 
                           <span className="p-2">Pools</span> 
                        </div>
                    </div>
                </div>
                <div className="w-120 h-120 bg-sky-950 text-center p-20">
                    <div>
                        <div className="flex justify-center p-2">
                            <img src={royalLogo} alt="Hotel Logo" className="size-12" />
                        </div>
                        <div>
                            <h1 className="text-white text-xl font-serif tracking-widest p-2">
                                Wellness & Pools
                                <br />
                                Hotel Royal Phoenicia 
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-gray-400 text-sm p-1 tracking-wider font-normal">
                                Building 1288 
                                <br />
                                Road 3931, Block 339
                                <br />
                                Umm Al Hasam – Manama
                                <br />
                                Bahrain
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-gray-400 text-sm p-5 tracking-wider font-normal leading-6">
                                +973 1730 7307
                                <br />
                                info@royalphoeniciahotel.com 
                                <br />
                                Contacts →
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <div className="p-2 mr-2">
                                <img src={insta} alt="Instagram Logo" className="size-5"/>
                            </div>
                            <div className="p-2 mr-2">
                                <img src={facebook} alt="Facebook Logo" className="size-5" />
                            </div>
                            <div className="p-2">
                                <img src={youtube} alt="YouTube Logo" className="size-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterInfo;