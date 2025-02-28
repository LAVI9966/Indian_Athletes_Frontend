import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full px-8 md:px-14 p-6 lg:px-12 bg-[#0C3C7C] text-white py-6">
            <div className="container  flex flex-col md:flex-row items-center justify-between px-4">

                <p className="text-sm text-center md:text-left  whitespace-nowrap">
                    © 2025 Indian Athletics. All rights reserved.
                </p>


                <div className="flex space-x-4 text-sm my-2 md:mx-0 py-2">
                    <a href="#" className="hover:underline  whitespace-nowrap">About Us</a>
                    <span>|</span>
                    <a href="#" className="hover:underline  whitespace-nowrap">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:underline  whitespace-nowrap">Terms & Conditions</a>
                </div>


                <div className="flex space-x-4 text-3xl">
                    <a href="#" className="hover:text-gray-400"><FaFacebook /></a>
                    <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                    <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                    <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
