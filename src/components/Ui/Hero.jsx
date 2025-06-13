import React from "react";
import Button from "./Button";
import heroImg from "../../assets/images/Homehero.png";
const Hero = () => {
  return (
   <div className="w-full bg-[#F0F2F5]">
      <div className=" md:ml-[130px] flex flex-col md:flex-row items-center justify-between gap-10 p-4 md:p-0">
        
        {/* Left Text Content */}
        <div className="max-w-[548px]">
          <h1 className="text-[#1D2026] text-4xl md:text-5xl font-semibold leading-tight">
            Learn with expert anytime anywhere
          </h1>
          <p className="mt-6 text-lg text-[#333] max-w-[450px]">
            Our mission is to help people find the best course online and learn with experts anytime, anywhere.
          </p>
          <Button
            style="text-white font-semibold px-6 py-3 bg-[#FF6636] mt-6 rounded-sm"
            text="Create Account"
          />
        </div>

        {/* Right Hero Image */}
        <div className="flex-shrink-0">
          <img src={heroImg} alt="Hero Illustration" className="w-full md:max-w-[650px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
