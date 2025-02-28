import React from "react";
import AdminNavbar from "./AdminNavbar";

export const EditProfile = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <AdminNavbar />
            <div className="flex-grow flex items-center justify-center ">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                    <h2 className="text-center text-xl font-semibold mb-6">Edit Profile</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Username</label>
                            <input
                                type="text"
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
