import React from "react";
import course7 from "../assets/images/course7.png";
import star from "../assets/icons/Star.png";
import clock from "../assets/icons/Clock.png";
import User from "../assets/icons/User.png";
import bars from "../assets/icons/bar-chart.png";
const FeatureCourses = () => {
  return (
    <div className="mx-auto max-w-[1290px]">
      <div className="shadow-md p-5 ">
        <div className="flex  items-center justify-between">
          {" "}
          <h1 className="text-2xl">Our Feature courses </h1>
          <p className="text-[#4E5566] w-[450px]">
            {" "}
            Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
            varius purus et eleifend porta.
          </p>
        </div>
        <div className="mt-5">
          <div className="flex  items-center border border-[#E9EAF0] w-[650px]">
            <div>
              <img src={course7} className="h-[180px] object-cover" />
            </div>
            <div className=" w-full p-3">
              <div className="flex items-center justify-between pb-4">
                <div className="px-3 py-1 bg-[#E1F7E3]">
                  <h1 className="text-[#15711F]">Health & Fitness</h1>
                </div>
                <div>
                  <h1 className="text-lg">$14.00</h1>
                </div>
              </div>
              <h1 className="text-[#1D2026] font-bold">
                Investing In Stocks The Complete Course! (13 H...
              </h1>
              <div className="mt-3 flex justify-between items-center">
                <h1 className="text-[#4E5566] ">Kevin Gilbert</h1>
                <div className="flex items-center">
                  <img src={star} className="w-6 h-6" alt="" />
                  <h1 className="text-[#4E5566] font-bold text-lg">
                    5.0{" "}
                    <span className="text-[#8C94A3] font-normal">
                      (357,914)
                    </span>
                  </h1>
                </div>
              </div>
              <div className="flex items-center justify-around mt-4">
                <div className="flex items-center gap-2">
                  <img src={User} alt="" />
                  <h1 className="text-[#4E5566] font-bold text-lg">
                    265.7K
                    <span className="text-[#8C94A3] font-normal">students</span>
                  </h1>
                </div>{" "}
                <div className="flex items-center gap-2">
                  <img src={bars} alt="" />
                  <h1 className="text-[#4E5566] font-bold text-lg">
                    Beginners
                  </h1>
                </div>    <div className="flex items-center gap-2">
                  <img src={clock} alt="" />
                  <h1 className="text-[#4E5566] font-bold text-lg">
                  6 hours 
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCourses;
