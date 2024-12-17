import React from "react";

const Banner = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="w-[940px] h-[550px]"
          src="https://i.ibb.co.com/vPG2m7Z/user.png"
        />
        <div>
          <h1 className=" text-5xl gap-2 font-bold text-left py-2 mb-6">
            One Step <br /> Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span>
          </h1>
          <p className=" text-left my-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div className="flex justify-start">
            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-4 rounded-lg w-36 text-white font-extrabold ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
