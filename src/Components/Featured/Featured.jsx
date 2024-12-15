import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";

const Featured = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="mb-6">
      <div className="card card-compact bg-base-100  shadow-xl">
        <div>
          <img className="w-40 h-16 float-left" src={logo} alt="" />
        </div>
        <div className="my-2">
          <h3 className="text-2xl font-extrabold text-left mb-2 ">
            {" "}
            {company_name}
          </h3>

          <p className="text-left font-semibold text-xl">{job_title}</p>
        </div>
        <div className="flex my-2">
          <button className="py-2 px-4 border rounded mr-3 border-[#7E90FE] font-extrabold  text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="py-2 px-4 border rounded mr-3 border-[#7E90FE] font-extrabold  text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex mb-2">
          <div className="flex mr-8">
            <CiLocationOn className="mt-1 mr-1 text-xl  "></CiLocationOn>
            <h3 className="text-xl ">{location}</h3>
          </div>
          <div className="flex">
            <AiOutlineDollarCircle className=" mt-1 mr-2 text-xl"></AiOutlineDollarCircle>
            <h3 className="text-xl ">{salary}</h3>
          </div>
        </div>
        <button className="flex  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded-lg w-36 text-white font-extrabold items-center justify-center ">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Featured;
