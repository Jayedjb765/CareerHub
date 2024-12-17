import React, { useEffect, useState } from "react";
import Featured from "../Featured/Featured";

const Featuredjob = () => {
  const [jobs, featuredjobs] = useState([]);
  const [datalength, setdatalength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => featuredjobs(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl font-extrabold">Featured Jobs</h1>
      <h4 className="text-base mt-2 font-medium">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </h4>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, datalength).map((job) => (
          <Featured key={job.id} job={job}></Featured>
        ))}
      </div>
      <div className={datalength === jobs.length && "hidden"}>
        <button
          className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded-lg w-36 text-white font-extrabold mb-10"
          onClick={() => setdatalength(jobs.length)}
        >
          Show all Jobs
        </button>
      </div>
    </div>
  );
};

export default Featuredjob;
