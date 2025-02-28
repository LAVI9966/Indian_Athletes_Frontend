import React from "react";
import { Search } from "lucide-react"; // For the search icon

const FilterBar = () => {
    return (
        <div className="relative w-full px-4 md:px-8 lg:px-12 py-6 min-h-[204px] md:h-[250px] flex flex-col justify-end">
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full">
                <img
                    src="https://images.unsplash.com/photo-1538146888063-3ecf5e002d7c?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="w-full h-full object-cover md:object-center"
                    alt="Background"
                />
            </div>

            {/* Filter Bar - Stick to Bottom */}
            <div className="relative z-10 bg-opacity-80 rounded-xl w-full">
                <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-3 md:gap-2  p-4 md:p-6 rounded-lg ">

                    {/* Search Input */}
                    <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg shadow w-full md:flex-1">
                        <input
                            type="text"
                            placeholder="Search by Name, UID"
                            className="w-full outline-none bg-transparent"
                        />
                        <Search className="text-gray-500" size={20} />
                    </div>

                    {/* Dropdowns */}
                    <select className="px-4 py-2 bg-gray-100 rounded-lg shadow w-full md:w-[200px]">
                        <option>Select Discipline</option>
                    </select>
                    <select className="px-4 py-2 bg-gray-100 rounded-lg shadow w-full md:w-[200px]">
                        <option>Select State</option>
                    </select>
                    <select className="px-4 py-2 bg-gray-100 rounded-lg shadow w-full md:w-[200px]">
                        <option>Select Gender</option>
                    </select>
                    <select className="px-4 py-2 bg-gray-100 rounded-lg shadow w-full md:w-[200px]">
                        <option>Sort</option>
                    </select>

                    {/* Clear Filters Button */}
                    <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg shadow text-gray-700 w-full md:w-auto">
                        Clear Filters <span className="ml-2">✖</span>
                    </button>

                    {/* Search Button */}
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 w-full md:w-auto">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
