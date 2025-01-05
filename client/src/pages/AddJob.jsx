import React, { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Import Quill styles for the Snow theme
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState(""); // To store the editor's content
  const [location, setLocation] = useState("");
  const [category, setCatgeory] = useState("");
  const [level, setLevel] = useState("");
  const [salary, setSalary] = useState("");
  const editorRef = useRef(null); // Reference for the editor container
  const quillInstanceRef = useRef(null); // Reference for the Quill instance

  useEffect(() => {
    // Initialize Quill editor only if it hasn't been initialized yet
    if (!quillInstanceRef.current) {
      quillInstanceRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        },
      });

      // Handle content changes
      quillInstanceRef.current.on("text-change", () => {
        setJobDescription(quillInstanceRef.current.root.innerHTML);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Title:", jobTitle);
    console.log("Job Description:", jobDescription);
  };

  return (
    <div className="p-4">
      <div>
        <p className="mb-4 text-xl">Job Details</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            {/* Job Title */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-500" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                type="text"
                placeholder="Ex Web Developer"
                required
                id="jobTitle"
                className="border p-2 rounded-md"
              />
            </div>

            {/* Job Description (Quill Editor) */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-500">Job Description</label>
              <div
                ref={editorRef}
                className="border rounded-md p-2"
                style={{ minHeight: "150px" }}
              ></div>
            </div>

            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 w-full ">
              <div className="flex flex-col gap-1">
                <label className="text-gray-500" htmlFor="jobCategory">
                  Job Category
                </label>
                <select
                  onChange={(e) => setCatgeory(e.target.value)}
                  name="category"
                  id="jobCategory"
                  className="border p-2"
                  required
                >
                  <option value="" selected disabled>
                    Select a category
                  </option>
                  {JobCategories.map((item, idx) => (
                    <option value={item} key={idx}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-500" htmlFor="jobLocation">
                  Job Location
                </label>
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  name="location"
                  id="jobLocation"
                  className="border p-2"
                  required
                >
                  <option value="" selected disabled>
                    Select a Location
                  </option>
                  {JobLocations.map((item, idx) => (
                    <option value={item} key={idx}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-gray-500" htmlFor="jobLevel">
                  Job Level
                </label>
                <select
                  onChange={(e) => setLevel(e.target.value)}
                  name="level"
                  id="jobLevel"
                  className="border p-2"
                  required
                >
                  <option value="" selected disabled>
                    Select a level
                  </option>
                  <option value="Beginner Level">Beginner Level</option>
                  <option value="Intermediate Level">Intermediate Level</option>
                  <option value="Senior Level">Senior Level</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                placeholder="2500"
                min={10}
                className="border p-2 w-fit"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
