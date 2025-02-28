import Layout from "../../Layout/Layout";
import React from "react";

const ContactForm = () => {
    return (
        <Layout>
            <div className="relative min-h-screen bg-gray-100 flex justify-center items-center p-4">
                {/* Main Contact Card */}
                <div
                    className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden w-full max-w-[1196px] md:h-[667px]"
                >
                    {/* Left Side - Contact Info */}
                    <div className="w-full md:w-[491px] bg-gradient-to-b from-[#287CEC] to-[#517DB3] text-white p-8 md:p-12 flex flex-col justify-center items-center md:items-start">
                        <h2 className="text-2xl md:text-3xl font-bold">Contact Information</h2>
                        <p className="mt-2 text-center md:text-left">Send us a Message</p>

                        <div className="mt-6 space-y-4 text-center md:text-left">
                            <p className="flex items-center gap-3 text-lg">
                                📞 <span>+1012 3456 789</span>
                            </p>
                            <p className="flex items-center gap-3 text-lg">
                                📧 <span>demo@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="w-full md:w-[705px] p-6 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-gray-600 text-sm">First Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b-2 p-2 focus:outline-none"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 text-sm">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full border-b-2 p-2 focus:outline-none"
                                    placeholder="Doe"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 text-sm">Email</label>
                                <input
                                    type="email"
                                    className="w-full border-b-2 p-2 focus:outline-none"
                                    placeholder="example@mail.com"
                                />
                            </div>
                            <div>
                                <label className="text-gray-600 text-sm">Phone Number</label>
                                <input
                                    type="text"
                                    className="w-full border-b-2 p-2 focus:outline-none"
                                    placeholder="+1012 3456 789"
                                />
                            </div>
                        </div>

                        {/* Select Subject */}
                        <div className="mt-8">
                            <p className="text-gray-600 text-sm font-medium">Select Subject?</p>
                            <div className="flex flex-wrap gap-4 mt-3">
                                {[1, 2, 3, 4].map((item) => (
                                    <label key={item} className="flex items-center gap-2">
                                        <input type="radio" name="subject" />
                                        <span className="text-sm">General Inquiry</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message Box */}
                        <div className="mt-8">
                            <label className="text-gray-600 text-sm">Message</label>
                            <textarea
                                className="w-full border-b-2 p-2 focus:outline-none"
                                placeholder="Write your message.."
                                rows="3"
                            />
                        </div>

                        {/* Send Button */}
                        <div className="mt-8 text-center md:text-right">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ContactForm;
