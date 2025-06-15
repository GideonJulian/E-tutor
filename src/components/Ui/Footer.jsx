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
      <div className="max-w-[1200px] mx-auto  md:flex-row flex-col flex items-center justify-between">
        <div>
          <h1 className="text-[#FFFFFF] text-2xl md:text-3xl font-[600] md:w-[450px]">
            Start learning with 67.1k students around the world.
          </h1>
          <div className="flex items-center gap-5 mt-4 ">
            <Button
              style={
                "text-[#fff] font-[500] px-4 md:px-6 py-3 bg-[#FF6636]  rounded-sm"
              }
              text={"Join the Family  "}
            />
            <Button
              style={
                "text-[#fff] font-[500] px-4 md:px-6 py-3 bg-[#363B47]  rounded-sm"
              }
              text={"Browse all courses  "}
            />
          </div>
        </div>
        <div className="flex mt-3 items-center gap-10 md:gap-20 justify-between">
          <div>
            <h1 className="font-[600] text-2xl md:text-4xl text-white ">6.3k</h1>
            <p className="text-[#B7BAC7] pt-2">Online courses</p>
          </div>
          <div>
            <h1 className="font-[600] text-2xl md:text-4xl text-white ">26k</h1>
            <p className="text-[#B7BAC7] pt-2">Certified Instructor</p>
          </div>
          <div>
            <h1 className="font-[600] text-2xl md:text-4xl text-white ">99.9%</h1>
            <p className="text-[#B7BAC7] pt-2">Sucess Rate</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex md:flex-row flex-col items-center justify-between mt-10 md:mt-30 pb-20">
        <div>
          <img src={whitelogo} />
          <p className="text-[#8C94A3] w-[360px] mt-4">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>
          <div className="flex items-center gap-3 ">
            <img src={FB} alt="" />
            <img src={IG} alt="" />
            <img src={IN} alt="" />
            <img src={X} alt="" />
            <img src={YT} alt="" />
          </div>
        </div>
        <div className="md:flex grid grid-cols-2 md:items-center gap-5 md:gap-14 md:flex-row flex-col">
          <ul>
            <h1 className="text-[#ffff]">TOP 4 CATEGORY</h1>
            <li className="text-[#8C94A3] mt-4">Development</li>
            <li className="text-[#8C94A3] mt-4">Finance & Accounting</li>
            <li className="text-[#8C94A3] mt-4">Design</li>
            <li className="text-[#8C94A3] mt-4">Business</li>
          </ul>{" "}
          <ul>
            <h1 className="text-[#ffff]">Quick Links</h1>
            <li className="text-[#8C94A3] mt-4">About</li>
            <li className="text-[#8C94A3] mt-4 pb-3 border-b-2 border-[#FF6636] flex items-center gap-2">
              Become Instructor{" "}
              <span>
                <img src={ArrowRight} />
              </span>
            </li>
            <li className="text-[#8C94A3] mt-4">Contact</li>
            <li className="text-[#8C94A3] mt-4">Career</li>
          </ul>{" "}
          <ul>
            <h1 className="text-[#ffff]">Support</h1>
            <li className="text-[#8C94A3] mt-4">Help Center</li>
            <li className="text-[#8C94A3] mt-4">FAQs</li>
            <li className="text-[#8C94A3] mt-4">Terms & Condition</li>
            <li className="text-[#8C94A3] mt-4">Privacy Policy</li>
          </ul>
          <ul>
            <h1 className="text-[#ffff]">Downlaod our app</h1>
            <img src={AppleStore} className="mt-4" />
            <img src={playStore} className="mt-4" />
          </ul>
        </div>
      </div>
      {/* <div className="w-full p-4 border-t-2 border-[#363B47] ">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-[#8C94A3]">
              © 2021 - Eduflex. Designed by{" "}
              <span className="text-white">Templatecookie</span>. All rights
              reserved
            </h1>
          </div>
          <div>
            <input />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
