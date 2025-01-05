import React, { createContext, useContext, useState } from "react";
import { assets } from "../assets/assets";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import RecLogin from "./RecLogin";

function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();
  const { isShowLogin, setIsShowLogin } = useContext(AppContext);

  return (
    <>
      <div className="w-full flex items-center md:px-10 px-4 justify-between shadow-md h-20">
        <div className=" w-full flex items-center justify-between">
          <img src={assets.logo} alt="logo" />
          <div
            className="flex items-center gap-4
          "
          >
            {isSignedIn ? (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Link className="hidden md:block" to={"/appliations"}>
                  Applied Jobs
                </Link>
                <div className="border-r hidden md:block border-gray-500 h-6" />
                <UserButton />
                <h2 className="hidden md:block">{user.firstName}</h2>
              </div>
            ) : (
              <>
                <button onClick={() => setIsShowLogin((prev) => !prev)}>
                  Recuriter Login
                </button>
                <div className="bg-blue-500 text-white px-4 py-1 rounded-full">
                  <SignInButton mode="modal">Login</SignInButton>
                </div>
              </>
            )}
            {/* <button className="text-gray-500">Recruter Login</button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
