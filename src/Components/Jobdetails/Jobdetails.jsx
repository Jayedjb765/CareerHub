import { PiSubtitlesLight } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/Utility";

const Jobdetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    contact_information,
    salary,
  } = job;

  const handelapplidjobs = () => {
    saveJobApplication(id);
    toast("You have applied successfully");
  };
  return (
    <div>
      <h3 className="text-3xl font-extrabold my-14">Job Details </h3>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 px-3 ">
          <p className="text-base text-left">
            <span className="font-extrabold">Job Description:</span>
            {job_description}
          </p>
          <h2 className="text-base text-left my-4">
            {" "}
            <span className="font-extrabold">Job Responsibility:</span>
            {job_responsibility}
          </h2>
          <h2 className="text-base text-left my-2">
            {" "}
            <span className="font-extrabold pb-2">
              Educational Requirements :
            </span>{" "}
          </h2>
          <p className="text-base text-left mb-8">
            {" "}
            {educational_requirements}
          </p>
          <div>
            <h2 className="text-base text-left my-2">
              {" "}
              <span className="font-extrabold pb-2">Experiences:</span>{" "}
            </h2>
            <p className="text-base text-left mb-8">{experiences}</p>
          </div>
        </div>
        <div>
          <div className="bg-slate-200 px-2">
            <h2 className="text-xl text-left  font-extrabold border-b-2 solid border-[#7E90FE] py-4 items-center">
              Job Details
            </h2>
            <div className="flex mt-3">
              <AiOutlineDollarCircle className="text-base mt-1 mr-2 text-[#9873FF]"></AiOutlineDollarCircle>
              <h3 className="text-base">
                <span className="font-semibold">Salary : </span>
                {salary} <span>(per month)</span>
              </h3>
            </div>
            <div className="flex mt-3">
              <PiSubtitlesLight className="text-base mt-1 mr-2 text-[#9873FF]"></PiSubtitlesLight>
              <h3 className="text-base">
                <span className="font-semibold">Job Title : </span>
                {job_title}
              </h3>
            </div>

            <h3 className="text-xl font-extrabold mt-4 text-left pb-4 border-b-2  solid border-[#7E90FE]">
              Contact Information
            </h3>
            <div>
              <div className="flex mt-3">
                <FiPhone className="text-base mt-1 mr-2 text-[#9873FF]"></FiPhone>
                <h3 className="text-base">
                  <span className="font-semibold">Phone : </span>
                  {contact_information.phone}
                </h3>
              </div>
              <div className="flex mt-3">
                <MdOutlineMailOutline className="text-base mt-1 mr-2 text-[#9873FF]"></MdOutlineMailOutline>
                <h3 className="text-base">
                  <span className="font-semibold">Email : </span>
                  {contact_information.email}
                </h3>
              </div>
              <div className="flex mt-3 pb-3">
                <CiLocationOn className="text-base mt-1 mr-2 text-[#9873FF] "></CiLocationOn>
                <h3 className="text-base text-left">
                  <span className="font-semibold">Address : </span>
                  {contact_information.address}
                </h3>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={handelapplidjobs}
              className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  rounded-lg w-full my-4 py-2  text-white font-extrabold items-center justify-center"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Jobdetails;
