import React, { useRef, useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Hero() {
  //access search filter an is Searche dhere
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });

    setIsSearched(true);

    // console.log(titleRef.current.value, locationRef.current.value);
  };
  return (
    <div className="md:px-10 my-10 px-4 w-full">
      <div
        className="max-w-[1200px] mx-auto h-[354px] rounded-lg  flex items-center justify-center "
        style={{ background: "linear-gradient(to right, #4F0487, #130121)" }}
      >
        <div className="max-w-lg px-4  mx-auto flex flex-col  items-center justify-center gap-6">
          <h2 className="text-4xl text-center text-white font-semibold">
            Over 10,000+ jobs to apply
          </h2>
          <p className="text-center text-white text-sm tracking-wide">
            Your Next Big Career Move Starts Right Here - Explore the Best Job
            Opportunities and Take the First Step Toward Your Future!
          </p>
          <div className="p-1 w-full items-center h-10 px-2 rounded-md shadow-lg grid grid-cols-3 bg-white gap-2">
            <div className="flex items-center gap-2 col-span-1">
              <img src={assets.search_icon} alt="search_icon" />
              <input
                type="text"
                className="bg-transparent outline-none sm:text-base text-sm focus:bg-none truncate w-full"
                placeholder="Search..."
                // value={searchTerm.text}
                // onChange={handleInputChange}
                // name="text"
                ref={titleRef}
              />
            </div>
            <div className="flex items-center justify-between col-span-2 gap-2">
              <div className="flex items-center gap-2 w-full">
                <img src={assets.location_icon} alt="location_icon" />
                <input
                  type="text"
                  className="bg-transparent outline-none focus:bg-none sm:text-base text-sm truncate w-full"
                  placeholder="Location"
                  // value={searchTerm.lot}
                  // onChange={handleInputChange}
                  // name="lot"
                  ref={locationRef}
                />
              </div>
              <button
                onClick={onSearch}
                className="bg-blue-500 text-white px-4 py-1 rounded-md"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative shadow-md rounded-lg my-6 border p-4 w-full overflow-hidden flex items-center">
        {/* Static Trusted By text */}
        <p className="mr-4 whitespace-nowrap font-semibold">Trusted By</p>

        {/* Sliding Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-slider flex items-center gap-20 animate-marquee">
            <img className="h-6" src={assets.adobe_logo} alt="adobe_logo" />
            <img className="h-6" src={assets.amazon_logo} alt="amazon_logo" />
            <img className="h-6" src={assets.app_store} alt="app_store" />
            <img
              className="h-6"
              src={assets.accenture_logo}
              alt="accenture_logo"
            />
            <img className="h-6" src={assets.walmart_logo} alt="walmart_logo" />
            <img className="h-6" src={assets.samsung_logo} alt="samsung_logo" />
            {/* Duplicate logos for seamless looping */}
            <img className="h-6" src={assets.adobe_logo} alt="adobe_logo" />
            <img className="h-6" src={assets.amazon_logo} alt="amazon_logo" />
            <img className="h-6" src={assets.app_store} alt="app_store" />
            <img
              className="h-6"
              src={assets.accenture_logo}
              alt="accenture_logo"
            />
            <img className="h-6" src={assets.walmart_logo} alt="walmart_logo" />
            <img className="h-6" src={assets.samsung_logo} alt="samsung_logo" />
          </div>

          {/* Fade effect on the edges */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
