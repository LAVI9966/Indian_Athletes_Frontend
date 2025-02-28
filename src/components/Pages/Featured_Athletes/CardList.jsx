import React, { useRef, useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import { IoIosArrowRoundForward } from "react-icons/io";

const CardList = ({ athlete }) => {
    const scrollRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    // Handle resize to toggle mobile/desktop view
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
    }, []);

    // Handle scrolling to show/hide arrows
    useEffect(() => {
        if (!isMobile && scrollRef.current) {
            const checkScroll = () => {
                setShowLeftArrow(scrollRef.current.scrollLeft > 0);
                setShowRightArrow(
                    scrollRef.current.scrollLeft + scrollRef.current.clientWidth <
                    scrollRef.current.scrollWidth
                );
            };
            scrollRef.current.addEventListener("scroll", checkScroll);
            checkScroll();

        }
    }, [isMobile]);

    return (
        <div className="flex flex-col space-y-4 relative">
            {/* Title Section */}
            <div className="flex py-4 justify-between items-center">
                <p className="text-2xl font-semibold">{athlete.meters}m
                    <hr /><hr /></p>
                <button className="text-[#287CEC] px-2  text-xl group flex items-center">
                    View All
                    <span className="ml-1 text-[#287CEC] opacity-0 text-xl group-hover:opacity-100 transition-opacity duration-200">
                        ➜
                    </span>
                </button>
            </div>


            {/* Mobile: Show 2 Cards WITHOUT Carousel */}
            {isMobile ? (
                <div className="flex justify-center space-x-4">
                    {athlete.athletes.slice(0, 2).map((profile, index) => (
                        <ProfileCard key={index} profile={profile} />
                    ))}
                </div>
            ) : (
                // Desktop: Show ALL Cards in Carousel WITH Left/Right Buttons
                <div className="relative">
                    {/* Scrollable Cards */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-scroll scrollbar-hide whitespace-nowrap space-x-4 py-10 relative"
                        style={{ scrollBehavior: "smooth" }}
                    >
                        {athlete.athletes.map((profile, index) => (
                            <div key={index} className="inline-block">
                                <ProfileCard profile={profile} />
                            </div>
                        ))}
                    </div>

                    {/* Left Scroll Button (Hide when at start) */}
                    {showLeftArrow && (
                        <button
                            onClick={() => (scrollRef.current.scrollLeft -= 300)}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md z-10"
                        >
                            ◀
                        </button>
                    )}

                    {/* Right Scroll Button (Hide when at end) */}
                    {showRightArrow && (
                        <button
                            onClick={() => (scrollRef.current.scrollLeft += 300)}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white p-2 rounded-full shadow-md z-10"
                        >
                            ▶
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default CardList;
