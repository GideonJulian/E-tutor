import React from "react";
import Button from "./Button";
import whitelogo from "../../assets/images/logo2.png";
import YT from "../../assets/icons/YT.png";
import IN from "../../assets/icons/IN.png";
import IG from "../../assets/icons/IG.png";
import X from "../../assets/icons/X.png";
import FB from "../../assets/icons/FB.png";
import ArrowRight from "../../assets/icons/ArrowRight.png";
import AppleStore from "../../assets/icons/Apple.png";
import playStore from "../../assets/icons/playStore.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#1D2026] p-4 md:pt-20 pt-10">
      {/* Top Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="text-center md:text-left">
          <h1 className="text-[#FFFFFF] text-lg sm:text-xl md:text-3xl font-semibold md:w-[450px]">
            Start learning with 67.1k students around the world.
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-5 mt-4">
            <Button
              style="text-[#fff] font-medium px-4 md:px-6 py-3 bg-[#FF6636] rounded-sm w-full sm:w-auto"
              text="Join the Family"
            />
            <Button
              style="text-[#fff] font-medium px-4 md:px-6 py-3 bg-[#363B47] rounded-sm w-full sm:w-auto"
              text="Browse all courses"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-between gap-8 md:gap-20 mt-6 md:mt-0">
          {[
            { value: "6.3k", label: "Online courses" },
            { value: "26k", label: "Certified Instructor" },
            { value: "99.9%", label: "Success Rate" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <h1 className="font-semibold text-2xl md:text-4xl text-white">
                {stat.value}
              </h1>
              <p className="text-[#B7BAC7] text-sm sm:text-base pt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between mt-10 md:mt-20 pb-10 gap-8">
        {/* Logo and social */}
        <div className="text-center md:text-left">
          <img src={whitelogo} alt="Logo" className="mx-auto md:mx-0" />
          <p className="text-[#8C94A3] w-full max-w-[360px] mt-4 mx-auto md:mx-0 text-sm sm:text-base">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-3 mt-4">
            {[FB, IG, IN, X, YT].map((icon, idx) => (
              <img key={idx} src={icon} alt="Social" className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" />
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-14 text-center md:text-left">
          <ul>
            <h1 className="text-white text-base font-semibold mb-2">TOP 4 CATEGORY</h1>
            {["Development", "Finance & Accounting", "Design", "Business"].map(
              (item, idx) => (
                <li key={idx} className="text-[#8C94A3] mt-2 text-sm sm:text-base cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
          <ul>
            <h1 className="text-white text-base font-semibold mb-2">Quick Links</h1>
            {["About", "Become Instructor", "Contact", "Career"].map((item, idx) => (
              <li
                key={idx}
                className={`text-[#8C94A3] mt-2 text-sm sm:text-base cursor-pointer ${
                  item === "Become Instructor"
                    ? "pb-3 border-b-2 border-[#FF6636] flex items-center justify-center md:justify-start gap-2"
                    : ""
                }`}
              >
                {item}
                {item === "Become Instructor" && (
                  <span>
                    <img src={ArrowRight} alt="Arrow" />
                  </span>
                )}
              </li>
            ))}
          </ul>
          <ul>
            <h1 className="text-white text-base font-semibold mb-2">Support</h1>
            {["Help Center", "FAQs", "Terms & Condition", "Privacy Policy"].map(
              (item, idx) => (
                <li key={idx} className="text-[#8C94A3] mt-2 text-sm sm:text-base cursor-pointer">
                  {item}
                </li>
              )
            )}
          </ul>
          <ul>
            <h1 className="text-white text-base font-semibold mb-2">Download our app</h1>
            <img src={AppleStore} alt="Apple Store" className="mt-3 w-28 sm:w-32 mx-auto md:mx-0" />
            <img src={playStore} alt="Play Store" className="mt-3 w-28 sm:w-32 mx-auto md:mx-0" />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
