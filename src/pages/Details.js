import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import JobDetails from "../components/JobDetails";
import { useLocation } from "react-router-dom";

export default function Details() {
  const [theme, setTheme] = useState(false);
  // const { q } = useParams();
  const location = useLocation();
  const jobState = location.state;
  const [job, setJob] = useState(null);
  const me = useRef(null);
  useEffect(() => {
    if (theme) {
      me.current.classList.add("theme-dark");
      me.current.classList.remove("theme-light");
    } else {
      me.current.classList.add("theme-light");
      me.current.classList.remove("theme-dark");
    }
  }, [theme]);

  // useEffect(() => {
  //   setJob(jobState);
  // }, [jobState]);

  return (
    <div className="" ref={me}>
      <Header setTheme={setTheme} />
      <JobDetails job={jobState} />
    </div>
  );
}
