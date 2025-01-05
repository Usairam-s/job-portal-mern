import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState({
    title: "",
    location: "",
  });

  const [isSearched, setIsSearched] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [isShowLogin, setIsShowLogin] = useState(false);

  const getJobs = async () => {
    setJobs(jobsData);
  };
  //get jobs
  useEffect(() => {
    getJobs();
  }, []);
  const value = {
    setSearchFilter,
    searchFilter,
    isSearched,
    setIsSearched,
    jobs,
    setJobs,
    isShowLogin,
    setIsShowLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
