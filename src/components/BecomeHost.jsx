import React from "react";
import become from "../assets/images/become.png";
import num1 from "../assets/images/1.png";
import num2 from "../assets/images/2.png";
import num3 from "../assets/images/3.png";
import num4 from "../assets/images/4.png";

const BecomeHost = () => {
  return (
    <div className="flex items-center gap-10 justify-center">
      <div className="relative">
        <div className="absolute top-10 left-10">
          <h1 className="font-[600] text-2xl text-white ">
            {" "}
            Become an instructor
          </h1>
          <p className="mt-4">
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
        </div>
        <img src={become} alt="" className="h-[230px] w-[570px]" />
      </div>
      <div className="w-[640px] bg-white rounded-lg p-6">
        <h1 className="font-[600] text-xl">Your teaching & earning steps</h1>
        <div className="mt-5 grid grid-cols-2 gap-5">
          {[
            { text: "Apply to become instructor", icon: num1 },
            {
              text: "Build & edit your profile",
              icon: num2,
            },
            {
              text: "Create your new course",
              icon: num3,
            },
            {
              text: "Start teaching & earning",
              icon: num4,
            },
          ].map((items) => (
            <div className="flex items-center gap-3">
              <img src={items.icon} className="w-[54px]" />
              <p className="text-lg">{items.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecomeHost;
