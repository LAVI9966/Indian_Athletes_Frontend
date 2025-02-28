import React from "react";
import { Link } from "react-router-dom";
const ProfileCard = ({ profile }) => {
    return (
        <div className="bg-white shadow-xl flex flex-col items-center overflow-hidden
            w-[178.22px] h-[184px] rounded-[9.63px] 
            md:w-[370px] md:h-[382px] md:rounded-[20px] transition-all duration-300">

            {/* Top Half with Background */}
            <div className="w-full h-[40%] bg-[#B4BCD6] flex justify-center relative">
                {/* Circular Image */}
                <div className="absolute bottom-[-20px] md:bottom-[-40px] w-14 h-14 md:w-24 md:h-24 
                    bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                    <img
                        src={profile.image}
                        alt="Profile"
                        className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover"
                    />
                </div>
            </div>

            {/* Bottom Half with Content */}
            <div className="w-full flex flex-col items-center justify-center mt-6 md:mt-12">
                <h2 className="text-sm md:text-lg font-semibold">{profile.name}</h2>
                <p className="text-gray-500 text-xs md:text-sm">UID : {profile.uid}</p>
                <Link to={`/profile/${profile.id}`}>
                    <button className="mt-2 md:mt-4 bg-blue-500 text-white px-3 py-1 md:px-6 md:py-2 
                    rounded-lg shadow-lg hover:bg-blue-600 text-xs md:text-sm">
                        View Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProfileCard;
