import React from "react";
import { jobsApplied } from "../assets/assets";
import moment from "moment";
import Navbar from "../components/Navbar";

const Applications = () => {
  function customButon(title) {
    switch (title) {
      case "Pending":
        return (
          <button className="px-4 py-[2px] bg-blue-200 text-blue-500 rounded-md">
            Pending
          </button>
        );

      case "Rejected":
        return (
          <button className="px-4 py-[2px] bg-red-200 text-red-500 rounded-md">
            Rejected
          </button>
        );

      case "Accepted":
        return (
          <button className="px-4 py-[2px] bg-green-200 text-green-500 rounded-md">
            Accepted
          </button>
        );

      default:
        return null; // Return null for any other cases
    }
  }
  return (
    <>
      <Navbar />

      <div className=" my-10 p-8 w-full">
        <h2 className="text-2xl mb-6"> Job Applied</h2>
        <table className="border p-4 w-full">
          <thead>
            <tr>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Job Title</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((item, idx) => (
              <tr key={idx}>
                <td className="p-4 flex items-center gap-2">
                  <span>
                    <img src={item.logo} alt="logo" className="w-6 h-6" />
                  </span>
                  <span>
                    <p>{item.company} </p>
                  </span>
                </td>
                <td className="p-4">{item.title}</td>
                <td className="p-4">{item.location}</td>
                <td className="p-4">{moment(item.date).format("ll")}</td>
                <td className="p-4 text-right">{customButon(item.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Applications;
