import React from "react";

const AthleteProfileCard = () => {
    return (
        <div className="bg-white shadow-xl z-50 px-6 sm:px-8 md:px-8 lg:px-12 p-6 md:p-6 shadow-lg rounded-xl w-full md:w-[400px] h-auto md:h-[500px] mx-auto md:ml-[124px] text-center">
            {/* Profile Image */}
            <div className="relative w-[150px] h-[150px] md:w-[212px] md:h-[212px] mx-auto">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Drtlkzh_lfvd2ImxXyeCtQC6uFO_z4hpzQ&s"
                    alt="Athlete"
                    className="w-[150px] h-[150px] md:w-[212px] md:h-[212px] rounded-full border-2 border-white shadow-md"
                />
            </div>

            {/* Name & Age */}
            <h2 className="mt-3 md:mt-5 text-base md:text-lg font-bold text-gray-800">
                Bidisha Kundu <span className="text-gray-600">20 (F)</span>
            </h2>

            {/* Country, State, DOB */}
            <div className="my-3 md:my-5 text-gray-600 flex flex-wrap md:flex-nowrap item-start gap-2 justify-center text-sm md:text-sm">
                <div className="flex flex-col px-1 justify-center gap-1 md:gap-2">
                    <span className="text-sm md:text-base text-gray-500">Country</span>
                    <span className="text-sm md:text-base font-semibold text-black flex items-center justify-center md:justify-center">
                        India 🇮🇳
                    </span>
                </div>
                <div className="flex flex-col px-1 items-center md:items-start justify-center gap-1 md:gap-2">
                    <span className="text-sm md:text-base text-gray-500">State</span>
                    <span className="text-sm md:text-base font-semibold text-black">West Bengal</span>
                </div>
                <div className="flex flex-col px-1 items-center md:items-start justify-center gap-1 md:gap-2">
                    <span className="text-sm md:text-base text-gray-500">DOB</span>
                    <span className="text-sm md:text-base font-semibold text-black">3/19/2005</span>
                </div>
            </div>

            {/* Tags */}
            <div className="mt-4 md:mt-6 flex  md:flex-nowrap flex-row justify-center gap-2">
                <span className="bg-[#517DB3] font-bold text-white text-sm md:text-base px-3 py-1 flex items-center justify-center md:px-3 md:py-2 rounded-lg">
                    100mH
                </span>
                {/* <span className="bg-[#517DB3] font-bold text-white text-sm md:text-base px-3  md:px-4 md:py-1 whitespace-nowrap rounded-lg">
                    22nd National Federation Cup U20
                </span> */}
                <span className="bg-[#517DB3] font-bold text-white text-sm md:text-base px-4 py-2 rounded-lg flex items-center justify-center  whitespace-nowrap">
                    22nd National Federation Cup U20
                </span>

            </div>
        </div>
    );
};
export default AthleteProfileCard;