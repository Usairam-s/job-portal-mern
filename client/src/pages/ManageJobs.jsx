import React from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJobs = () => {
  const naviagte = useNavigate();
  return (
    <>
      <div className="my-10 p-8 w-full">
        <table className="border p-4 w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Job Title</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Applicants</th>
              <th className="p-4 text-right">Visible</th>
            </tr>
          </thead>

          <tbody>
            {manageJobsData.map((item, idx) => (
              // {
              //   _id: 4,
              //   title: "UI/UX Designer",
              //   date: 1729102298497,
              //   location: "Dubai",
              //   applicants: 25,
              // },
              <tr key={idx}>
                <td className="p-4">{item._id}</td>

                <td className="p-4">{item.title}</td>
                <td className="p-4">{moment(item.date).format("ll")}</td>
                <td className="p-4">{item.location}</td>
                <td className="p-4">{item.applicants}</td>
                <td className="p-4 text-center">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="w-full flex items-end justify-end mt-4
        "
        >
          <button
            onClick={() => naviagte("/dashboard/add-job")}
            className="p-2 rounded-md text-white bg-black w-fit"
          >
            Add New Job
          </button>
        </div>
      </div>
    </>
  );
};

export default ManageJobs;
