import React from "react";
import AdminNavbar from "./AdminNavbar";
import { CiFilter } from "react-icons/ci";
import StickyTable from "./StickyTable";

const Athletes = () => {
    const inputStyles =
        "border border-gray-300 rounded-lg px-4 py-2 w-full md:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500";

    return (
        <div className="w-full h-screen flex flex-col">
            <AdminNavbar />

            {/* Search & Filters */}
            <div className="m-6 flex flex-wrap justify-between gap-4 p-6 bg-white shadow-md rounded-lg">
                <input
                    type="text"
                    placeholder="Search UID or Name"
                    className={inputStyles}
                    aria-label="Search UID or Name"
                />

                {["All", "Select Discipline", "Sort"].map((option, index) => (
                    <select key={index} className={inputStyles} aria-label={option}>
                        <option>{option}</option>
                    </select>
                ))}

                <button
                    className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
                    aria-label="Filter"
                >
                    <CiFilter className="text-xl" />
                </button>

                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
                    Search
                </button>
            </div>

            {/* Table Wrapper */}
            <StickyTable />
        </div>
    );
};

export default Athletes;
