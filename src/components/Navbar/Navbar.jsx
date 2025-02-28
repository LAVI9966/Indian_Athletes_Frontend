import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-[#333333] shadow-md relative">
            <div className="w-full px-8 md:px-14 p-6 lg:px-12 flex justify-between items-center">

                <Link to="/">
                    <h1 className="text-2xl text-white">Indian Athletes</h1>
                </Link>
                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <a href="#" className="text-white">About us</a>
                    </li>
                    <li>
                        <a href="#" className="text-white">Athletes</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-white">Contact Us</a>
                    </li>
                </ul>

                {/* Search Bar (Desktop) */}
                <div className="hidden md:flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search by UID or Name"
                        className="p-2 rounded-md text-black bg-white border border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Search
                    </button>
                </div>

                {/* Hamburger Icon */}
                <button className="md:hidden text-white text-2xl relative z-50" onClick={() => setOpen(!open)}>
                    ☰
                </button>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {open && (
                <div className="absolute top-full left-0 w-full bg-[#333333] bg-opacity-95 p-4 z-50">
                    <ul className="flex flex-col space-y-2">
                        <li><a href="#" className="text-white block p-2">About us</a></li>
                        <li><a href="#" className="text-white block p-2">Athletes</a></li>
                        <li>
                            <Link to="/contact" className="text-white block p-2">Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* Search Bar (Mobile) */}
                    <div className="mt-4 flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search by UID or Name"
                            className="p-2 rounded-md text-black bg-white border border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Search
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
