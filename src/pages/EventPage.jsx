import React from "react";
import venueImg from "../assets/EventImg.png";
import NumberButton from "../components/NumberButton";
import ScrollingText from "../components/ScrollingText";
import EventVerticalScroll from "../components/EventVerticalScroll";

function EventTicker({ EventItems }) {
    const spacedText = EventItems.map((item, index) =>
        index > 0 ? `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${item}` : item
    ).join('');

    return (
        <div>
            <ScrollingText
                text={spacedText}
                textColor="text-gray-200 opacity-100"
                fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-8xl"
                fontWeight="font-serif"
            />
        </div>
    );
};

function EventPage() {
    const EventItems = [
        'Corporate Event',
        'Social Celebrations',
    ];

    return (
        <div className="relative z-0">
            <div className="flex justify-center p-6 sm:p-8 md:p-10">
                <div className="flex justify-center w-full w-[300px] sm:w-[600px] md:w-[800px] lg:w-[1000px] h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px]">
                    <div className="absolute mt-0 sm:-mt-6 sm:-mt-8 md:-mt-10">
                        <NumberButton number={"V"} className="text-gray-400 font-serif" />
                    </div>
                    <EventVerticalScroll />

                    <img
                        src={venueImg}
                        alt="Event venue img"
                        className="w-full h-full object-cover"
                    />

                </div>
            </div>
            <div className="-mt-40 sm:-mt-50 md:-mt-60 lg:-mt-80">
                <EventTicker EventItems={EventItems} />
            </div>
            <div className="absolute inset-x-0 -bottom-70 h-100 sm:h-90 md:h-80 lg:h-80 bg-gradient-to-t from-sky-800 to-transparent" />
        </div>
    )
}

export default EventPage;
