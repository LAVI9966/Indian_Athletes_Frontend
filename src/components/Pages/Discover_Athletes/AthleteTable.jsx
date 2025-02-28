import React from "react";
import { Link } from "react-router-dom";

const athletes = [
    {
        id: 1,
        uid: "AWBFI04589",
        name: "Bidisha Kundu",
        dob: "3/19/2005",
        gender: "F",
        event: "22nd National Federation Cup U20",
        country: "🇮🇳",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Drtlkzh_lfvd2ImxXyeCtQC6uFO_z4hpzQ&s"
    }
];

const AthleteTable = () => {
    return (
        <div className="w-full px-8 md:px-14 p-6 lg:px-12">
            {/* Hide table on mobile, show on md and larger */}
            <div className="hidden md:block bg-white shadow-lg rounded-xl overflow-hidden">
                <table className="w-full border-collapse">
                    {/* Table Header */}
                    <thead className="bg-gray-100 text-gray-700 font-semibold">
                        <tr>
                            <th className="py-3 px-6 text-[18px] text-left"></th>
                            <th className="py-3 px-6 text-[18px] text-left">UID</th>
                            <th className="py-3 px-6 text-[18px] text-left">Name</th>
                            <th className="py-3 px-6 text-[18px] text-left">DOB</th>
                            <th className="py-3 px-6 text-[18px] text-left">Gender</th>
                            <th className="py-3 px-6 text-[18px] text-left">Event Name</th>
                            <th className="py-3 px-6 text-[18px] text-left">Country</th>
                            <th className="py-3 px-6 text-[18px] text-left"></th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {athletes.map((athlete) => (
                            console.log(athlete),
                            <tr key={athlete.id} className="border-t">
                                <td className="p-[16px] flex items-center ">
                                    <img src={athlete.image} alt={athlete.name} className="w-[135px] h-[135px] rounded-full" />
                                </td>
                                <td className="py-4  text-base px-6">{athlete.uid}</td>
                                <td className="py-4 text-base  px-6">{athlete.name}</td>
                                <td className="py-4  text-base px-6">{athlete.dob}</td>
                                <td className="py-4 text-base  px-6">{athlete.gender}</td>
                                <td className="py-4 text-base  px-6">{athlete.event}</td>
                                <td className="py-4 text-base  px-6">{athlete.country}</td>
                                <td className="py-4 text-base  px-6">
                                    <Link to={`/profile/:${athlete.uid}`}>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">View Profile</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AthleteTable;
