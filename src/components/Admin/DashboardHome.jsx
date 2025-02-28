import React, { useState } from "react";
import { FaHome, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import Dashboard from "./Dashboard";
import Athletes from "./Athletes";
import ThemeContext from "../Context/ThemeContext/ThemeContext";
import { EditProfile } from "./EditProfile";
import { useContext } from "react";

const DashboardHome = () => {
    const [activeTab, setActiveTab] = useState("dashboard");
    const { setEditProfile, editProfile } = useContext(ThemeContext)


    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-gray-200 p-6 flex flex-col justify-between">
                <div>
                    <h1 className="text-lg font-bold mb-6">Athlete</h1>
                    <nav>
                        <button
                            onClick={() => { setActiveTab("dashboard"); setEditProfile(false) }}
                            className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg transition ${activeTab === "dashboard" ? "bg-[#0832DE] text-white" : "text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            <FaHome className="mr-2" /> Dashboard
                        </button>
                        <button
                            onClick={() => { setActiveTab("athletes"); setEditProfile(false) }}
                            className={`flex items-center w-full px-4 py-3 rounded-lg transition ${activeTab === "athletes" ? "bg-[#0832DE] text-white" : "text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            <FaUserAlt className="mr-2" /> Athletes
                        </button>
                    </nav>
                </div>
                <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-lg">
                    <FaSignOutAlt className="mr-2" /> Sign out
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {editProfile ? (
                    <EditProfile />
                ) : (
                    <>
                        {activeTab === "dashboard" && <Dashboard />}
                        {activeTab === "athletes" && <Athletes />}
                    </>
                )}
            </div>
        </div >
    );
};

export default DashboardHome;
