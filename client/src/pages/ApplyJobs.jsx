import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import kconvert from "k-convert";
import moment from "moment";
import JobCard from "../components/Jobcard";
import Navbar from "../components/Navbar";

const ApplyJobs = () => {
  const { id } = useParams(); // Access URL parameters
  const { jobs } = useContext(AppContext);
  const [JobData, setJobData] = useState({});

  useEffect(() => {
    if (id) {
      const fetchJob = jobs.filter((job) => id == job._id)[0]; // Corrected job_id to job.id
      setJobData(fetchJob); // Moved setJobData inside useEffect
      console.log(fetchJob);
    }
  }, [id, jobs]); // Added dependencies for useEffect

  return (
    <div>
      <Navbar />
      {JobData && (
        <div className="my-10 px-4  md:px-10 w-full">
          {/* top section */}
          <div className="shadow-sm bg-blue-100 border border-blue-500 rounded-sm w-full md:flex-row flex-col flex gap-6 md:items-center justify-between md:p-12 p-8">
            {/* logo */}
            <div className="flex items-center gap-8">
              {JobData.companyId && ( // Check if companyId is defined
                <img
                  src={JobData.companyId.image}
                  alt="logo"
                  className="w-[50px] h-[50px]"
                />
              )}
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl">{JobData.title}</h2>
                <div className="flex items-center space-x-3 md:space-x-8">
                  <span className="flex items-center gap-1">
                    <img
                      src={assets.suitcase_icon}
                      alt="icon"
                      className="w-3 h-3"
                    />
                    <span className="text-gray-500 text-sm">
                      {JobData.companyId ? JobData.companyId.name : "N/A"}{" "}
                      {/* Fallback for company name */}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <img
                      src={assets.location_icon}
                      alt="icon"
                      className="w-3 h-3"
                    />
                    <span className="text-gray-500 text-sm">
                      {JobData.location}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <img
                      src={assets.person_icon}
                      alt="icon"
                      className="w-3 h-3"
                    />
                    <span className="text-gray-500 text-sm">
                      {JobData.level}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <img
                      src={assets.money_icon}
                      alt="icon"
                      className="w-3 h-3"
                    />
                    <span className="text-gray-500 text-sm">
                      {kconvert.convertTo(JobData.salary)}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-6  py-2 bg-blue-500 text-white rounded-md">
                Apply now
              </button>
              <h2 className="text-sm text-gray-500 text-right">
                {moment(JobData.date).fromNow()}
              </h2>
            </div>
          </div>

          {/* job description parts */}
          <div className="w-full grid grid-cols-3 gap-12 my-14">
            <div className="md:col-span-2 w-full col-span-3">
              <h2 className="text-2xl font-semibold mb-4 ">Job Desription</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: JobData.description,
                }}
                className="w-full  text- leading-8 "
              ></p>
              <button className="px-6 mt-4 py-2 bg-blue-500 text-white rounded-md">
                Apply now
              </button>
            </div>
            <div className="md:col-span-1 col-span-3 w-full  ">
              <h2 className="text-2xl mb-6">More Related Jobs</h2>
              <div className="flex w-full flex-col gap-2">
                {jobs.slice(0, 2).map(
                  (
                    relatedJob,
                    idx // Added mapping to render related jobs
                  ) => (
                    <JobCard job={relatedJob} key={idx} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyJobs;
