import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="px-4 md:px-10 w-full gap-4 md:flex-row flex flex-col-reverse items-center justify-between my-6">
      <div className="flex md:flex-row flex-col gap-4 md:items-center">
        <img src={assets.logo} alt="" />
        <p className="text-gray-500 text-sm">
          All right reserved. Copyright @job-portal
        </p>
      </div>
      <div className="flex items-center gap-2">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
}

export default Footer;
