// import React from "react";
// import royalLogo from '../assets/hotelLogo.svg';
// import insta from '../assets/InstaIcon.svg';
// import facebook from '../assets/facebookIcon.svg';
// import youtube from '../assets/youtubeIcon.svg';

// function FooterInfo(){
//     return(
//         <div>
//             <div className="h-120 flex flex-row mt-70">
//                 <div className="flex justify-between bg-sky-900 opacity-80 w-200 h-120 p-10 text-gray-300">
//                     <div className="text-xl font-serif mt-10 ml-20">
//                         <h1 className="p-3 pl-5"><span className="p-5 mr-1">I</span> Rooms</h1>
//                         <h1 className="p-3 pl-4"><span className="p-5 mr-1">II</span>Wellness</h1>
//                         <h1 className="p-3"><span className="p-5">III</span>Gastro</h1>
//                         <h1 className="p-3"><span className="p-5">IV</span>Hotel</h1>
//                         <h1 className="p-3"><span className="p-5 mr-1">V</span>Events</h1>
//                     </div>
//                     <div className="flex flex-col mt-10 mr-10">
//                         <h1 className="p-5 text-lg font-serif tracking-wider">More about rooms</h1>
//                         <div className="flex flex-col ml-8 text-xs font-sans">
//                            <span className="pl-2">120 comfortable rooms</span> 
//                            <span className="p-2">Dinings</span> 
//                            <span className="pl-2">Packages</span> 
//                            <span className="p-2">Pools</span> 
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-120 h-120 bg-sky-950 text-center p-20">
//                     <div>
//                         <div className="flex justify-center p-2">
//                             <img src={royalLogo} alt="Hotel Logo" className="size-12" />
//                         </div>
//                         <div>
//                             <h1 className="text-white text-xl font-serif tracking-widest p-2">
//                                 Wellness & Pools
//                                 <br />
//                                 Hotel Royal Phoenicia 
//                             </h1>
//                         </div>
//                         <div className="flex justify-center">
//                             <span className="text-gray-400 text-sm p-1 tracking-wider font-normal">
//                                 Building 1288 
//                                 <br />
//                                 Road 3931, Block 339
//                                 <br />
//                                 Umm Al Hasam – Manama
//                                 <br />
//                                 Bahrain
//                             </span>
//                         </div>
//                         <div className="flex justify-center">
//                             <span className="text-gray-400 text-sm p-5 tracking-wider font-normal leading-6">
//                                 +973 1730 7307
//                                 <br />
//                                 info@royalphoeniciahotel.com 
//                                 <br />
//                                 Contacts →
//                             </span>
//                         </div>
//                         <div className="flex justify-center">
//                             <div className="p-2 mr-2">
//                                 <img src={insta} alt="Instagram Logo" className="size-5"/>
//                             </div>
//                             <div className="p-2 mr-2">
//                                 <img src={facebook} alt="Facebook Logo" className="size-5" />
//                             </div>
//                             <div className="p-2">
//                                 <img src={youtube} alt="YouTube Logo" className="size-5" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FooterInfo;

import React from 'react';
import royalLogo from '../assets/hotelLogo.svg';
import insta from '../assets/InstaIcon.svg';
import facebook from '../assets/facebookIcon.svg';
import youtube from '../assets/youtubeIcon.svg';

function FooterInfo() {
    return (
        <div>
            <div className="flex flex-row mt-70 sm:mt-70 md:mt-70 lg:mt-70">
                <div className="flex justify-between bg-sky-900 opacity-80 w-[58%] md:w-[80%] lg:w-[90%] h-auto p-4 sm:p-6 md:p-8 lg:p-20 text-gray-300">
                    <div className="text-md sm:text-lg md:text-xl lg:text-2xl mt-10 sm:mt-15 md:mt-6 lg:mt-10 w-full font-serif">
                        <h1 className="p-1 sm:p-2 md:p-3 pl-2 sm:pl-3 md:pl-4 lg:pl-7"><span className="p-1 sm:p-2 md:p-5 md:ml-3 lg:ml-0 mr-1 text-sm font-thin">I</span> Rooms</h1>
                        <h1 className="p-1 sm:p-2 md:p-3 pl-1 sm:pl-2 md:pl-3 lg:pl-6"><span className="p-1 sm:p-2 md:p-5 md:ml-3 lg:ml-0 mr-1 text-sm font-thin">II</span>Wellness</h1>
                        <h1 className="p-1 sm:p-2 md:p-5"><span className="p-1 sm:p-2 md:p-5 mr-1 -ml-1 sm:-ml-0 sm:mr-0 text-sm font-thin">III</span>Gastro</h1>
                        <h1 className="p-1 sm:p-2 md:p-5"><span className="p-1 sm:p-2 md:p-5 mr-1 -ml-1 sm:-ml-0 sm:mr-0 text-sm font-thin">IV</span>Hotel</h1>
                        <h1 className="p-1 sm:p-2 md:p-5"><span className="p-1 sm:p-2 md:p-5 mr-1 sm:mr-0 text-sm font-thin">V</span>Events</h1>
                    </div>
                    <div className="flex flex-col mt-10 sm:mt-15 md:mt-6 lg:mt-10 md:ml-40 w-full">
                        <h1 className="p-2 sm:p-3 text-xs sm:text-sm lg:text-lg font-serif tracking-wider">More about rooms</h1>
                        <div className="flex flex-col ml-2 sm:ml-4 text-[10px] sm:text-xs font-sans">
                            <span className="p-1 sm:p-2 pl-1 sm:pl-2">120 comfortable rooms</span>
                            <span className="p-1 sm:p-2">Dinings</span>
                            <span className="p-1 sm:p-2 pl-1 sm:pl-2">Packages</span>
                            <span className="p-1 sm:p-2">Pools</span>
                        </div>
                    </div>
                </div>

                <div className="w-[42%] md:w-[50%] lg:w-[50%] bg-sky-950 text-center p-4 sm:p-6 md:p-8 lg:p-10 lg:pt-20">
                    <div>
                        <div className="flex justify-center p-2">
                            <img src={royalLogo} alt="Hotel Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
                        </div>
                        <div>
                            <h1 className="text-white text-xs sm:text-xl font-serif tracking-widest p-2">
                                Wellness & Pools
                                <br />
                                Hotel Royal Phoenicia
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <span className="text-gray-400 text-[10px] sm:text-sm p-1 tracking-wider font-normal">
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
                            <span className="text-gray-400 text-[10px] sm:text-sm p-4 sm:p-7 tracking-wider font-normal leading-6">
                                +973 1730 7307
                                <br />
                                info@royalphoeniciahotel.com
                                <br />
                                Contacts →
                            </span>
                        </div>
                        <div className="flex justify-center">
                            <div className="p-1 mr-2">
                                <img src={insta} alt="Instagram Logo" className="w-5 h-5" />
                            </div>
                            <div className="p-1 mr-2">
                                <img src={facebook} alt="Facebook Logo" className="w-5 h-5" />
                            </div>
                            <div className="p-1">
                                <img src={youtube} alt="YouTube Logo" className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterInfo;
