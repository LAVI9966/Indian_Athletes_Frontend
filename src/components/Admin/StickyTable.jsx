import React, { useState, useRef, useEffect } from 'react';
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Link } from 'react-router-dom';

const StickyTable = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [users] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      department: "Product",
      role: "Product Manager",
      location: "New York",
      joinDate: "Jan 15, 2023",
      manager: "Sarah Phillips",
      team: "Core Platform",
      salary: "$120,000",
      performance: "Excellent",
      projects: "Dashboard Redesign",
      skills: "Agile, Leadership",
      certifications: "PMP, CSM",
      status: "Active",
      actions: "Edit/Delete"
    },
    {
      id: 2,
      name: "Samantha Chen",
      email: "samantha.chen@example.com",
      department: "Design",
      role: "UI Designer",
      location: "San Francisco",
      joinDate: "Mar 3, 2022",
      manager: "David Wong",
      team: "User Experience",
      salary: "$105,000",
      performance: "Good",
      projects: "Mobile App",
      skills: "Figma, UI/UX",
      certifications: "Adobe Certified",
      status: "Offline",
      actions: "Edit/Delete"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      email: "michael.r@example.com",
      department: "Engineering",
      role: "Senior Developer",
      location: "Austin",
      joinDate: "Jun 12, 2020",
      manager: "Jennifer Lee",
      team: "Backend",
      salary: "$135,000",
      performance: "Outstanding",
      projects: "API Integration",
      skills: "Python, Node.js",
      certifications: "AWS Solutions Architect",
      status: "In a meeting",
      actions: "Edit/Delete"
    },
    {
      id: 4,
      name: "Emma Williams",
      email: "emma.w@example.com",
      department: "Marketing",
      role: "Marketing Lead",
      location: "Chicago",
      joinDate: "Oct 5, 2021",
      manager: "Robert Johnson",
      team: "Growth",
      salary: "$110,000",
      performance: "Good",
      projects: "Q4 Campaign",
      skills: "SEO, Analytics",
      certifications: "Google Analytics",
      status: "Active",
      actions: "Edit/Delete"
    },
    {
      id: 5,
      name: "Raj Patel",
      email: "raj.patel@example.com",
      department: "Data",
      role: "Data Analyst",
      location: "Seattle",
      joinDate: "Feb 28, 2022",
      manager: "Lisa Chen",
      team: "Business Intelligence",
      salary: "$108,000",
      performance: "Good",
      projects: "Reporting Dashboard",
      skills: "SQL, Tableau",
      certifications: "Tableau Certified",
      status: "Away",
      actions: "Edit/Delete"
    }
  ]);

  const scrollContainerRef = useRef(null);

  // Generate placeholder initials for user avatar
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div id='h' className="bg-white w-full p-3 rounded-xl max-w-[1400px] mx-auto">
      {/* Custom scrollbar styles */}
      <style jsx>{`
          /* Apply these styles to the component */
          .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
            background-color: #f5f5f5;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #a0aec0;
            border-radius: 4px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #718096;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background-color: #f5f5f5;
            border-radius: 4px;
          }
          
          /* Ensure row heights are consistent */
          .row-height {
            height: 72px; /* Set a fixed height for all rows */
          }
          
          .header-height {
            height: 56px; /* Set a fixed height for the header */
          }
        `}</style>

      {/* Table with fixed columns */}
      <div className="flex">
        {/* Fixed left column */}
        <div className="sticky left-0 z-20 bg-white ">
          <table className="w-full">
            <thead>
              <tr className="header-height">
                <th className="p-4 shadow-right text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    {/* Checkbox */}
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span>USER</span>
                  </div>
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={`left-${user.id}`} className="row-height hover:bg-gray-50 shadow-right">
                  <td className="bg-white p-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      {/* Checkbox */}
                      <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />

                      {/* Profile Image */}
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-medium overflow-hidden">
                        <img
                          className="h-10 w-10 rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww"
                          alt="Profile"
                        />
                      </div>

                      {/* Name */}
                      <div>
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scrollable middle columns */}
        <div className="overflow-x-auto custom-scrollbar" ref={scrollContainerRef}>
          <table className="w-full">
            <thead>
              <tr className="header-height">
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">UID</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">DOB</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">State</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Gender</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Event</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Event 2</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">PB</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">SB</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">AFI NO</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Name of Competition</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Performance</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Position</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Phone</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Email</th>
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">DOR</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={`middle-${user.id}`} className="row-height hover:bg-gray-50">
                  <td className="p-4 whitespace-nowrap">{user.department}</td>
                  <td className="p-4 whitespace-nowrap">{user.role}</td>
                  <td className="p-4 whitespace-nowrap">{user.location}</td>
                  <td className="p-4 whitespace-nowrap">{user.joinDate}</td>
                  <td className="p-4 whitespace-nowrap">{user.manager}</td>
                  <td className="p-4 whitespace-nowrap">{user.team}</td>
                  <td className="p-4 whitespace-nowrap">{user.salary}</td>
                  <td className="p-4 whitespace-nowrap">{user.performance}</td>
                  <td className="p-4 whitespace-nowrap">{user.projects}</td>
                  <td className="p-4 whitespace-nowrap">{user.skills}</td>
                  <td className="p-4 whitespace-nowrap">{user.certifications}</td>
                  <td className="p-4 whitespace-nowrap">Referral</td>
                  <td className="p-4 whitespace-nowrap">Jan 2025</td>
                  <td className="p-4 whitespace-nowrap">Jan 2025</td>
                  <td className="p-4 whitespace-nowrap">Jan 2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fixed right column */}
        <div className="sticky right-0 z-20 bg-white">
          <table className="w-full">
            <thead>
              <tr className=" header-height">
                <th className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={`right-${user.id}`} className="row-height hover:bg-gray-50">
                  <td className="bg-white p-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <button className="cursor-pointer"
                        onClick={() =>
                          setOpenMenuId(openMenuId === user.id ? null : user.id)
                        }
                      ><IoEllipsisHorizontal /></button>
                      {/* Action Menu */}
                      {openMenuId === user.id && (
                        <div
                          ref={menuRef}
                          className="absolute right-15 mt-25 w-32 bg-white rounded-lg shadow-lg z-10"
                        >
                          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-500 
                          " >
                            Edit
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-500">
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StickyTable;