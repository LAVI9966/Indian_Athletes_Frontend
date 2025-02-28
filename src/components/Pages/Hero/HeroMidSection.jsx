import React from "react";
import { Link } from "react-router-dom";

const HeroMidSection = () => {
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            {/* Heading */}
            <p className="text-white font-bold text-3xl sm:text-5xl leading-tight">
                Discover Top Athletes
            </p>

            {/* Subheading */}
            <p className="text-white text-lg sm:text-2xl mt-2">
                Search by UID or Name to explore <br /> detailed profiles.
            </p>

            {/* Button */}
            <Link to="/discover_athlete">
                <button className="mt-4 bg-blue-500 text-white 
                    px-6 py-3 rounded-lg text-lg 
                    hover:bg-blue-600 transition">
                    Discover Athlete
                </button>
            </Link>
        </div>
    );
};

export default HeroMidSection;
