import React from "react";
import { Link, useLocation } from "react-router-dom";
import arrowDown from "../../assets/icons/ChevronDown.png";
import logo from "../../assets/images/logo.png";
import Button from "./Button";
import Heart from '../../assets/icons/Heart.png'
import cart from '../../assets/icons/cart.png'
import Bell from '../../assets/icons/Bell.png'

const tabs = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Become an Instructor", path: "/instructor" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className=" w-full">
      <div className="w-full bg-[#1D2026] p-6">
        <div className=" flex md:justify-between justify-end items-center w-full">
          {/* Left: Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {tabs.map((tab) => {
              const isActive = location.pathname === tab.path;

              return (
                <li key={tab.name}>
                  <Link
                    to={tab.path}
                    className={`text-[16px] py-4 px-1 border-t-2 transition-colors duration-300 ${
                      isActive
                        ? "border-[#FF6636] text-white"
                        : "border-transparent text-[#8C94A3] hover:text-white"
                    }`}
                  >
                    {tab.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: Language + Currency */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <span className="text-[#A1A5B3]">USD</span>
              <img src={arrowDown} alt="currency dropdown" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#A1A5B3]">English</span>
              <img src={arrowDown} alt="language dropdown" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white border-t border-white p-4">
             <div className=" flex justify-between items-center w-full">
                <div>
                    <img src={logo} className="w-[120px] "/>
                </div>
                <div className="hidden md:flex items-center gap-3 ">
                    <div className="flex items-center gap-5 justify-center">
                        <img src={Bell}/>
                        <img src={Heart}/>
                        <img src={cart}/>
                    </div>
                    <Button style={'text-[#FF6636] font-[600] px-6 py-3 bg-[#FFEEE8] rounded-sm'} text={'Create Account'} />
                    <Button style={'text-[#fff] font-[600] px-6 py-3 bg-[#FF6636] rounded-sm'} text={'Sign in '} />
                </div>
             </div>
      </div>
    </div>
  );
};

export default Navbar;
