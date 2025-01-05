import React, { useEffect, useState } from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApp = () => {
  const [showActionRow, setShowActionRow] = useState(null);

  const handleActionShow = (rowId) => {
    setShowActionRow((prev) => (prev === rowId ? null : rowId));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both the button and dropdown
      if (
        !event.target.closest(".action-button") &&
        !event.target.closest(".action-dropdown")
      ) {
        setShowActionRow(null);
      }
    };

    if (showActionRow !== null) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showActionRow]);

  return (
    <>
      <div className="my-10 p-8 w-full">
        <table className="border p-4 w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Job Title</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Resume</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((item, idx) => (
              <tr key={idx}>
                <td className="p-4">{item._id}</td>
                <td className="p-4 flex items-center gap-2">
                  <span>
                    <img src={item.imgSrc} alt="logo" className="w-6 h-6" />
                  </span>
                  <span>
                    <p>{item.name}</p>
                  </span>
                </td>
                <td className="p-4">{item.jobTitle}</td>
                <td className="p-4">{item.location}</td>
                <td className="p-4">
                  <a
                    href="#"
                    target="_blank"
                    download={`${item.name}-Resume.pdf`}
                    className="md:bg-blue-200 text-blue-500 p-1 text-sm flex items-center justify-center rounded-md gap-1"
                  >
                    <img src={assets.resume_download_icon} alt="" />
                    <span className="md:text-base text-sm">Resume</span>
                  </a>
                </td>
                <td className="p-4 text-center relative">
                  <button
                    className="action-button"
                    onClick={() => handleActionShow(item._id)}
                  >
                    ...
                  </button>
                  {showActionRow === item._id && (
                    <div className="absolute top-12 z-30 rounded-md right-0 left-0 p-2 flex flex-col gap-1 items-start bg-gray-100 border action-dropdown">
                      <button
                        onClick={() => setShowActionRow(null)}
                        className="text-blue-500"
                      >
                        Accept
                      </button>
                      <hr />
                      <button
                        onClick={() => setShowActionRow(null)}
                        className="text-red-500"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewApp;
