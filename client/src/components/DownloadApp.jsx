import React from "react";
import { assets } from "../assets/assets";

function DownloadApp() {
  return (
    <div>
      <div className="w-full  rounded-md  mb-20 h-full px-4 md:px-10">
        <div
          className="
    md:p-14 p-12  md:flex-row gap-6 flex-col flex items-center justify-between "
          style={{ background: "linear-gradient(to right, #F5F2FF, #FBF6FF)" }}
        >
          {/* left side */}
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-semibold ">
              {" "}
              Download Mobile App For Better Experience
            </h2>
            <div className="flex flex-col  md:flex-row gap-4 items-center">
              <img src={assets.play_store} alt="logo" />
              <img src={assets.app_store} alt="logo" />
            </div>
          </div>
          {/* right side */}
          <div>
            <img src={assets.app_main_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
