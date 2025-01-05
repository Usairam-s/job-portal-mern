import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full flex items-center md:px-10 px-4 justify-between shadow-md h-20">
        <div className="w-full flex items-center justify-between">
          <img src={assets.logo} alt="logo" />

          <div className="flex items-center gap-2">
            <span>Welcome, Usairam</span>

            {/* Profile Dropdown */}
            <div className="relative group">
              <img
                src={assets.company_icon}
                alt="icon"
                className="cursor-pointer w-10 h-10 rounded-full"
              />
              {/* Dropdown Menu */}
              <div className="absolute right-0  w-40 bg-white shadow-lg rounded-md hidden group-hover:block">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main page */}
      <div className="w-full flex ">
        {/* sidebar */}
        <div className="md:w-1/5 pt-6 w-1/12  h-screen border-r flex flex-col gap-4 md:gap-6 ">
          <NavLink
            to="/dashboard/add-job"
            className={({ isActive }) =>
              `flex items-center gap-2  p-2  ${
                isActive
                  ? "text-blue-500 bg-blue-200 font-bold border-r-4  border-blue-500"
                  : "text-gray-500"
              }`
            }
          >
            <img src={assets.suitcase_icon} alt="icon" />
            <span className="md:block hidden">Add Job</span>
          </NavLink>
          <NavLink
            to="/dashboard/manage-jobs"
            className={({ isActive }) =>
              `flex items-center gap-2  p-2  ${
                isActive
                  ? "text-blue-500 bg-blue-200 font-bold border-r-4  border-blue-500"
                  : "text-gray-500"
              }`
            }
          >
            <img src={assets.home_icon} alt="icon" />
            <span className="md:block hidden">Manage Jobs</span>
          </NavLink>
          <NavLink
            to="/dashboard/view-applications"
            className={({ isActive }) =>
              `flex items-center gap-2  p-2  ${
                isActive
                  ? "text-blue-500 bg-blue-200 font-bold border-r-4  border-blue-500"
                  : "text-gray-500"
              }`
            }
          >
            <img src={assets.person_tick_icon} alt="icon" />
            <span className="md:block hidden">View Applications</span>
          </NavLink>
        </div>
        {/* main page */}
        <div className="w-full h-screen p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
