import React from "react";
import become from "../assets/images/become.png";
import num1 from "../assets/images/num1.png";
import num2 from "../assets/images/num2.png";
import num3 from "../assets/images/num3.png";
import num4 from "../assets/images/num4.png";
import arrow from "../assets/icons/ArrowRight.png";

const BecomeHost = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 py-8">
      {/* 👉 Mobile Gradient Card */}
      <div
        className="block lg:hidden w-full rounded-xl p-6 text-white"
        style={{
          background: "linear-gradient(to right, #CC522B 0%, #FF6636 100%)",
        }}
      >
        <h1 className="text-xl font-semibold">Become an instructor</h1>
        <p className="mt-3 text-sm">
          Instructors from around the world teach millions of students on Udemy.
          We provide the tools and skills to teach what you love.
        </p>
        <button className="mt-4 bg-white text-[#FF6636] px-4 py-2 font-bold rounded flex items-center gap-2">
          Start Teaching
          <img src={arrow} alt="arrow" width={20} />
        </button>
      </div>

      <div className="relative w-full max-w-[570px] hidden lg:block">
        <img
          src={become}
          alt="Become instructor"
          className="w-full h-auto rounded-md"
        />
        <div className="absolute top-8 left-6 md:top-10 md:left-10">
          <h1 className="font-semibold text-xl md:text-2xl text-white">
            Become an instructor
          </h1>
          <p className="mt-4 text-white text-sm w-[90%] max-w-[311px]">
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button className="px-4 py-2 mt-4 font-bold bg-white text-[#FF6636] flex items-center gap-2 rounded">
            Start Teaching
            <img src={arrow} alt="arrow" width={20} />
          </button>
        </div>
      </div>

      <div className="w-full max-w-[640px] bg-white rounded-lg p-6 shadow-md">
        <h1 className="font-semibold text-lg md:text-xl">
          Your teaching & earning steps
        </h1>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { text: "Apply to become instructor", icon: num1 },
            { text: "Build & edit your profile", icon: num2 },
            { text: "Create your new course", icon: num3 },
            { text: "Start teaching & earning", icon: num4 },
          ].map((items, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={items.icon}
                className="w-[48px] h-[48px]"
                alt={`step-${index + 1}`}
              />
              <p className="text-base">{items.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BecomeHost;
