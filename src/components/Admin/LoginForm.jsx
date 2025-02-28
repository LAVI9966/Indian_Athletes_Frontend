import React from "react";

const LoginForm = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-gray-700 font-semibold mb-4">Username</h2>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <h2 className="text-gray-700 font-semibold mb-2">Password</h2>
                <input
                    type="password"
                    className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="flex items-center mb-4">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-gray-600">Remember Me</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700">
                    Signin
                </button>

                <div className="flex justify-between mt-4 text-sm">
                    <a href="#" className="text-blue-600 hover:underline">
                        Create An Account
                    </a>
                    <a href="#" className="text-gray-600 hover:underline">
                        Forgot Password
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
