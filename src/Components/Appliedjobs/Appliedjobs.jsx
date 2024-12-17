import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getstoreJoBApplication } from "../../Utility/Utility";
import Appliedjob from "../Appliedjob/Appliedjob";

const Appliedjobs = () => {
  const [applied, setapplied] = useState([[]]);
  const [displayjobs, setdispalyjobs] = useState([]);
  const handeljobfilter = (filter) => {
    if (filter === "all") {
      setdispalyjobs(applied);
    } else if (filter === "remote") {
      const remotejoobs = applied.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setdispalyjobs(remotejoobs);
    } else if (filter === "onsite") {
      const onsitejobs = applied.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setdispalyjobs(onsitejobs);
    }
  };

  const jobs = useLoaderData();
  useEffect(() => {
    const storeJobsId = getstoreJoBApplication();
    if (jobs.length > 0) {
      // const jobsapplied = jobs.filter((job) => storeJobsId.includes(job.id));
      const jobsApllied = [];
      for (const id of storeJobsId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApllied.push(job);
        }
      }
      setapplied(jobsApllied);
      setdispalyjobs(jobsApllied);
    }
  }, []);
  return (
    <div>
      <h2 className="text-3xl my-16">Applied Jobs</h2>
      <div className=" flex justify-end mr-14">
        <details className=" dropdown ">
          <summary className=" btn my-6 ">Filter By</summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handeljobfilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handeljobfilter("onsite")}>
              <a>Onsite</a>
            </li>
            <li onClick={() => handeljobfilter("remote")}>
              <a>Remote</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayjobs.map((job, idx) => (
          <Appliedjob key={idx} job={job}></Appliedjob>
        ))}
      </div>
    </div>
  );
};

export default Appliedjobs;
