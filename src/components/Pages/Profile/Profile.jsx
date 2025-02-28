import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
import AthleteProfileCard from "./AthleteProfileCard";
import { Trophy } from "lucide-react";
import { MdOutlineLeaderboard } from "react-icons/md";

const Profile = () => {
    const { uid } = useParams();
    console.log(uid);

    const bgImage = "https://s3-alpha-sig.figma.com/img/9258/02e3/cb5b8f1c99aae5035a806f179e291cb2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KFDjJgEI0uokNEE0RFfE94jge111OmXQNEG1uixcySnHYxb0~PY4dYCKojSd5fJTtlvpbGPyAzB-9p-H~htxHAB3rb3b-NZjGqgL~mQ5arM1pVlvHpq4Gl6PFQnnmSZ6rXCETOMEkv2~gRJLCYuJa93R520kLNCelRabfIwNofxMYIaJeNAKVETslwpWJgZbXy6AtMf5QGF9qj~bgDz3cIAarByzP2t6V4CQV5uTWC4WM3ELoinN6pSGdOCkBaZjMmBQZ2OIuJFNmnC6P86mgKeg2TJbTWs78YQloPCWLh-2Ow5HQwTWKY3LPOOlU1S0c5UcO1xKCB2NK99uYQIMyQ__";

    // State for active tab
    const [activeTab, setActiveTab] = useState("Overview");

    // Function to render content based on active tab
    const renderContent = () => {
        switch (activeTab) {
            case "Overview":

                return (
                    <div className="flex md:flex-row gap-4 mt-4 md:h-80">
                        <div className="w-full md:w-1/2 rounded-lg flex flex-col items-start p-4 py-6 md:py-10 shadow-xl">
                            <Trophy size={41} className="text-[#287CEC] p-1 mb-2" />
                            <p className="font-bold p-1 text-lg text-[#287CEC]">Event</p>
                            <p className="text-xl font-semibold p-1 text-gray-900 mt-1">100mH</p>
                            <hr className="w-full my-2 border-gray-400" />
                            <p className="w-full font-semibold p-1 text-xl text-gray-800">
                                22nd National Federation Cup U20
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col gap-4">
                            <div className="w-full md:w-1/2 flex-1 rounded-lg h-32 p-4 flex flex-col justify-between items-center shadow-xl">
                                <div className="flex flex-col items-start gap-1">
                                    <MdOutlineLeaderboard className="text-3xl text-[#287CEC]" />
                                    <span className="text-lg font-bold text-[#287CEC]">Personal Best</span>
                                    <span className="text-xl font-bold text-black">14.60s</span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex-1 rounded-lg h-32 p-4 flex flex-col justify-between items-center shadow-xl">
                                <div className="flex flex-col items-start gap-1">
                                    <MdOutlineLeaderboard className="text-3xl text-[#287CEC]" />
                                    <span className="text-lg font-bold text-[#287CEC]">Season Best</span>
                                    <span className="text-xl font-bold text-black">14.60s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case "Performance Stats":
                return (
                    <div className="overflow-x-auto p-4">
                        <table className="w-full border-separate border-spacing-y-2">
                            <thead>
                                <tr className="bg-gray-200 text-gray-800 rounded-lg font-bold">
                                    <th className="px-6 py-4 text-left font-bold rounded-l-lg">Year</th>
                                    <th className="px-6 py-4 text-left font-bold">Event</th>
                                    <th className="px-6 py-4 text-left font-bold">Name</th>
                                    <th className="px-6 py-4 text-left font-bold">Performance</th>
                                    <th className="px-6 py-4 text-left font-bold rounded-r-lg">Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white shadow-md rounded-lg">
                                    <td className="px-6 py-4 text-gray-900 rounded-l-lg">2024/2025</td>
                                    <td className="px-6 py-4 text-gray-900">1</td>
                                    <td className="px-6 py-4 text-gray-900">
                                        22nd National Federation Cup U20
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">4037 pts</td>
                                    <td className="px-6 py-4 text-gray-900 rounded-r-lg">3</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            case "Injury Status":
                return (
                    // when the table is empty show the NO data found 
                    // but table is present the table will shown here just like upper table
                    <div className="mt-4 text-lg text-gray-800">
                        NO Result Found
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Layout>
            <div>
                {/* 🔹 Background Section */}
                <div
                    className="w-full h-40 md:h-56 bg-cover bg-center flex items-center px-4 md:px-8 relative"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <button className="bg-blue-600 text-white px-4 py-2 md:px-5 md:py-2 rounded-lg text-sm ml-auto md:mr-6">
                        Download as PDF
                    </button>

                </div>

                {/* 🔹 Profile Section */}
                <div className="relative -top-10 md:-top-22 mx-auto w-11/12 flex flex-col md:flex-row gap-4">
                    {/* Athlete Profile Card */}
                    <div className="w-full md:w-auto">
                        <AthleteProfileCard />
                    </div>

                    {/* 🔹 Details Section */}
                    <div className="flex-1 rounded-lg md:p-6">
                        {/* 🔹 Tabs */}
                        <div className="mt-24">
                            <div className="flex gap-1 overflow-x-auto md:overflow-visible pb-2">
                                <div className="flex w-full gap-1">
                                    <button
                                        className={`w-full px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-lg font-bold transition 
        ${activeTab === "Overview" ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-blue-100"}`}
                                        onClick={() => setActiveTab("Overview")}
                                    >
                                        Overview
                                    </button>
                                    <button
                                        className={`w-full px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-lg font-bold transition 
        ${activeTab === "Performance Stats" ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-blue-100"}`}
                                        onClick={() => setActiveTab("Performance Stats")}
                                    >
                                        Performance Stats
                                    </button>
                                    <button
                                        className={`w-full px-3 py-1 md:px-4 md:py-2 rounded-lg text-sm md:text-lg font-bold transition 
        ${activeTab === "Injury Status" ? "bg-blue-500 text-white" : "text-blue-500 hover:bg-blue-100"}`}
                                        onClick={() => setActiveTab("Injury Status")}
                                    >
                                        Injury Status
                                    </button>
                                </div>

                            </div>

                            {/* 🔹 Dynamic Content Section */}
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
