import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function JobCard({ job }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full sm:max-w-[290px] h-[280px] p-4 border rounded-md shadow-sm flex flex-col justify-between">
        <img src={assets.company_icon} alt="" className="w-[28px] h-[28px]" />
        <h2>{job.title}</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs rounded-md px-[10px] py-[3px] bg-blue-100 border border-blue-400 text-gray-500">
            {job.location}
          </span>
          <span className="text-xs rounded-md bg-red-100 border px-[10px] py-[3px] border-red-400 text-gray-500">
            {job.level}
          </span>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: job.description.slice(0, 100) }}
          className="w-full text-gray-500 text-left text-sm"
        ></p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(`/apply-job/${job._id}`)}
            className="bg-blue-500 text-sm text-white rounded-md px-[10px] py-[5px]"
          >
            Apply now
          </button>
          <button className="bg-transparent rounded-md border px-[10px] py-[5px] text-sm">
            Apply now
          </button>
        </div>
      </div>
    </>
  );
}

export default JobCard;
