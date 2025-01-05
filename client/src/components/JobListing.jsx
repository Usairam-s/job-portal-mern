import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

function JobListing() {
  const { setIsSearched, searchFilter, isSearched, setSearchFilter, jobs } =
    useContext(AppContext);

  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination variables
  const JobsPerPage = 6;
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Paginated jobs
  const lastIndexJob = currentPage * JobsPerPage;
  const firstIndexJob = lastIndexJob - JobsPerPage;
  const currentJobs = filteredJobs.slice(firstIndexJob, lastIndexJob);

  // Handle pagination page change
  const handleJobChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Handle location change
  const handleLocationChange = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  // Update filtered jobs based on filters and search
  useEffect(() => {
    const matchedCategory = (job) =>
      selectedCategories.length === 0 ||
      selectedCategories.includes(job.category);

    const matchedLocation = (job) =>
      selectedLocations.length === 0 ||
      selectedLocations.includes(job.location);

    const matchedTitle = (job) =>
      searchFilter.title === "" ||
      job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

    const matchedLocationSearch = (job) =>
      searchFilter.location === "" ||
      job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs.filter(
      (job) =>
        matchedCategory(job) &&
        matchedLocation(job) &&
        matchedTitle(job) &&
        matchedLocationSearch(job)
    );

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1); // Reset pagination when filters are applied
  }, [jobs, selectedCategories, selectedLocations, searchFilter]);

  // Render filters
  const renderFilters = () => (
    <div>
      {isSearched && (searchFilter.title || searchFilter.location) && (
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="font-semibold">Current Search</h2>
          <div className="flex items-center gap-2">
            {searchFilter.title && (
              <span className="flex items-center gap-2 bg-blue-100 py-[5px] px-[18px] rounded-md border-b border-gray-500 text-gray-500 shadow-sm">
                {searchFilter.title}
                <img
                  src={assets.cross_icon}
                  alt="cross"
                  onClick={() =>
                    setSearchFilter((prev) => ({ ...prev, title: "" }))
                  }
                  className="size-3 cursor-pointer"
                />
              </span>
            )}
            {searchFilter.location && (
              <span className="flex items-center gap-2 px-[18px] py-[5px] border-b border-gray-500 text-gray-500 bg-red-100 rounded-md shadow-sm">
                {searchFilter.location}
                <img
                  src={assets.cross_icon}
                  alt="cross"
                  onClick={() =>
                    setSearchFilter((prev) => ({ ...prev, location: "" }))
                  }
                  className="size-3 cursor-pointer"
                />
              </span>
            )}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3">
        <h2 className="font-semibold">Search by Category</h2>
        <ul className="flex flex-col gap-3">
          {JobCategories.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2 text-gray-500">
              <input
                onChange={() => handleCategoryChange(item)}
                checked={selectedCategories.includes(item)}
                type="checkbox"
              />
              {item}
            </span>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <h2 className="font-semibold">Search by Location</h2>
        <ul className="flex flex-col gap-3">
          {JobLocations.map((item, idx) => (
            <span key={idx} className="flex items-center gap-2 text-gray-500">
              <input
                type="checkbox"
                onChange={() => handleLocationChange(item)}
                checked={selectedLocations.includes(item)}
              />
              {item}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="w-full grid grid-cols-3 px-4 md:px-10">
      {/* Sidebar */}
      <div className="col-span-1 sm:block hidden">{renderFilters()}</div>

      {/* Job listing */}
      <div className="col-span-2">
        {/* Mobile filter toggle */}
        <div className="sm:hidden block mb-6">
          <button
            className="border p-1 text-sm"
            onClick={() => setShowFilter((prev) => !prev)}
          >
            {showFilter ? "Close Filters" : "Show Filters"}
          </button>
          {showFilter && <div className="my-4">{renderFilters()}</div>}
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-lg font-semibold">Latest Jobs</h2>
          <p className="text-gray-500">
            Get your favorite job from top companies
          </p>
        </div>

        {/* Job Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentJobs.map((item, idx) => (
            <JobCard job={item} key={idx} />
          ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
          <div className="my-8 flex items-center justify-center space-x-3">
            <button
              onClick={() => handleJobChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <img src={assets.left_arrow_icon} alt="icon" />
            </button>
            {Array.from(
              { length: Math.ceil(filteredJobs.length / JobsPerPage) },
              (_, index) => (
                <button
                  key={index + 1}
                  className={`border w-8 h-8 flex justify-center items-center text-sm rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-transparent"
                  }`}
                  onClick={() => handleJobChange(index + 1)}
                >
                  {index + 1}
                </button>
              )
            )}
            <button
              onClick={() => handleJobChange(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(filteredJobs.length / JobsPerPage)
              }
            >
              <img src={assets.right_arrow_icon} alt="icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobListing;
