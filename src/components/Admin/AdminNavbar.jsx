import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext/ThemeContext';
import { useState } from 'react'
const AdminNavbar = () => {
    const [showPopup, setShowPopup] = useState(false);
    const { setEditProfile, editProfile } = useContext(ThemeContext)
    return (
        <>
            <div className="h-[99px] flex justify-end p-8 items-center shadow-md w-full">
                <button
                    className="h-[60px] w-[60px] bg-gray-300 flex justify-center items-center cursor-pointer rounded-full font-bold text-lg"
                    onClick={() => setShowPopup(!showPopup)}
                >
                    AN
                </button>
            </div>
            {showPopup && (
                <div className="absolute top-16 right-8 bg-white w-[260px] rounded-2xl shadow-xl p-5 flex flex-col gap-4">
                    <div className="flex flex-col items-start">
                        <h3 className="font-bold text-gray-900 text-lg">Admin Name</h3>
                        <p className="text-gray-400 text-sm">admin@gmail.com</p>
                    </div>
                    <hr className="border-gray-200" />
                    <button className="text-gray-800 font-medium cursor-pointer hover:text-black"
                        onClick={() => setEditProfile(true)}
                    >Manage Profile</button>
                    <button className="w-full border border-gray-300 text-blue-600 font-semibold py-2 rounded-lg text-sm hover:bg-gray-100 transition">
                        Log Out
                    </button>
                </div>
            )}
        </>
    )
}

export default AdminNavbar