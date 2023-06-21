import React, { useEffect } from "react";
import FloatingJobBar from "./FloatingJobBar";
import JobMainSection from "./JobMainSection";
import JobFooter from "./JobFooter";

export default function JobDetails({ job }) {
  return (
    <div className="job-details">
      <FloatingJobBar job={job} />
      <JobMainSection job={job} />
      <JobFooter job={job} />
    </div>
  );
}
