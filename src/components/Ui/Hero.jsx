import React from "react";
import Button from "./Button";

const Hero = ({ heroHead, subText, buttonText, heroImg, bg, imgSize }) => {
  return (
    <div className={`w-full bg-${bg}`}>
      <div className="md:ml-[130px] flex flex-col md:flex-row items-center justify-between gap-10 px-4 pt-4 pb-0 md:p-0">
        {/* Left Text Content */}
        <div className="max-w-[548px]">
          <h1 className="text-[#1D2026] text-4xl md:text-5xl font-semibold leading-tight">
            {heroHead}
          </h1>
          <p className="mt-6 text-lg text-[#333] max-w-[450px]">{subText}</p>
          <Button
            text={buttonText}
            style="text-white cursor-pointer font-semibold px-6 py-3 bg-[#FF6636] mt-6 rounded-sm"
          />
        </div>

        {/* Right Hero Image */}
        <div className="flex-shrink-0 mb-0">
          <img
            src={heroImg}
            alt="Hero Illustration"
            className={`w-full md:max-w-[600px]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
