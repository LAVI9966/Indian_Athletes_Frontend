import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X, Paperclip, Trash } from "lucide-react";

const UserModal = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
            <div className="bg-white w-3/4 max-w-4xl rounded-xl shadow-xl p-6 relative">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
                    <X size={24} />
                </button>

                {/* Title */}
                <h2 className="text-xl font-semibold mb-4">Update User</h2>

                {/* Upload Image & Buttons */}
                <div className="flex items-center gap-4 mb-6">
                    <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                        <Paperclip size={18} /> Upload Image
                    </button>
                    <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">
                        <Trash size={18} /> Delete
                    </button>
                    <button className="ml-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Update</button>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="text-sm text-gray-600">UID</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Full Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Date of Birth</label>
                        <input type="date" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Event Name</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Personal Best</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Seasonal Best</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                </div>

                {/* Add Event Button */}
                <div className="my-4">
                    <button className="w-full bg-gray-100 py-2 rounded-md">Add Event +</button>
                </div>

                {/* Additional Fields */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="text-sm text-gray-600">AFI No.</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Name of Imagination</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Position</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Phone</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input type="text" className="w-full p-2 border rounded-md" />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600">DOR</label>
                        <input type="date" className="w-full p-2 border rounded-md" />
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default UserModal;
