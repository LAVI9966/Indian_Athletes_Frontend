import React, { useState } from 'react'
import { FaHome, FaUserAlt, FaSignOutAlt, FaPaperclip } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import AdminNavbar from './AdminNavbar';
const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
            {/* Main Content */}
            <div className="flex-1">
                {/* Navbar */}
                <AdminNavbar />

                {/* Stats Cards */}
                <div className="grid p-8 grid-cols-6 gap-4 mb-6">
                    <div className="p-6 py-10 bg-white shadow-md rounded-lg text-center">
                        <p className="text-gray-600">Total Athletes</p>
                        <h2 className="text-3xl font-bold text-blue-600">1200</h2>
                    </div>
                    <div className="p-6 py-10 bg-white shadow-md rounded-lg text-center">
                        <p className="text-gray-600">New Entries</p>
                        <h2 className="text-3xl font-bold text-blue-600">24</h2>
                    </div>
                    <div className="col-span-3"></div>
                    <div className="flex items-end justify-end">
                        <button className="bg-gray-300 text-black px-5 py-3 rounded-lg w-auto" onClick={() => setShowModal(true)}>
                            Add Manually +
                        </button>
                    </div>
                </div>
                {/* Upload Section */}
                <div className="bg-white m-8 p-8 shadow-md rounded-lg">
                    <div className="flex justify-center mb-4">
                        <h2 className="text-lg items-center font-semibold">Upload Athlete Data</h2>
                    </div>
                    <div className="border-dashed border-2 border-gray-300 p-10 text-center text-gray-500 rounded-lg">
                        <span className="text-2xl pt-4 pb-6 block">Drag and Drop CSV File Here</span>
                        <div className="mt-6 mb-10 text-sm">
                            <input type="file" className="hidden" id="fileUpload" />
                            <label htmlFor="fileUpload" className="cursor-pointer px-4 py-4 border bg-gray-300 rounded-lg">Choose File</label>
                            <span className="ml-2 text-black">No File Chosen</span>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <button className="bg-[#0832DE] text-white text-base px-20 py-3 rounded-lg">Upload</button>
                    </div>
                </div>
                {/* <div class="bg-gray-400 min-h-screen flex items-center justify-center">
                            <div class="bg-white rounded-3xl p-8 w-80 shadow-lg">
                                <div class="text-xl font-semibold">Admin Name</div>
                                <div class="text-gray-600">admin@gmail.com</div>
                                <hr class="my-4" />
                                <div class="text-blue-600 font-medium cursor-pointer">Manage Profile</div>
                                <div class="mt-4">
                                    <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg">
                                        Log Out
                                    </button>
                                </div>
                            </div>
                        </div> */}
            </div>
            {/* Popup Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl shadow-lg w-[1245px] h-[650px] relative">
                        <div className="flex items-center justify-between mt-6">
                            {/* Left-aligned element */}
                            <h2 className="text-xl my-6 font-semibold">Enter Athlete Details</h2>

                            {/* Right-aligned elements */}
                            <div className="flex items-center space-x-4 ml-auto">
                                <button className="bg-gray-200 text-lg text-gray-700 px-5 py-3 rounded-lg flex items-center hover:bg-gray-300">
                                    Upload Image<FaPaperclip className="mr-2" />
                                </button>

                                <button className="bg-[#0832DE] text-lg text-white px-20 py-3 rounded-lg hover:bg-blue-700">
                                    Add
                                </button>

                                <button className="text-gray-600 px-2 hover:text-gray-800" onClick={() => setShowModal(false)}>
                                    <MdClose size={40} />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">UID</label>
                                <input className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Full Name</label>
                                <input className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Date of Birth</label>
                                <input type="date" className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Event Name</label>
                                <input className="border p-3 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Personal Best</label>
                                <input className="border p-3 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Seasonal Best</label>
                                <input className="border p-3 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                        <button className="mt-4 text-lg w-full bg-gray-200 py-3 rounded-lg hover:bg-gray-300">+ Add Event</button>

                        <div className="grid grid-cols-3 gap-4 mt-4">
                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">AFI No.</label>
                                <input className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Imagination Name</label>
                                <input className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Position</label>
                                <input className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Phone</label>
                                <input className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">Email</label>
                                <input className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div className="flex flex-col">
                                <label className="text-gray-600 mb-2">DOR</label>
                                <input type="date" className="border border-gray-500 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                        </div>

                    </div>
                </div>
            )}

        </>
    )
}

export default Dashboard