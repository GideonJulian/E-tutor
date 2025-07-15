import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import arrowDown from "../../assets/icons/ChevronDown.png";
import logo from "../../assets/images/logo.png";
import Button from "./Button";
import Heart from "../../assets/icons/Heart.png";
import cart from "../../assets/icons/cart.png";
import Bell from "../../assets/icons/Bell.png";

const tabs = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Become an Instructor", path: "/instructor" },
];

const Navbar = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#1D2026] p-6">
        <div className="flex md:justify-between justify-end items-center w-full">
          {/* Desktop Nav Links */}
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
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[#A1A5B3]">USD</span>
              <img src={arrowDown} alt="currency dropdown" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#A1A5B3]">English</span>
              <img src={arrowDown} alt="language dropdown" />
            </div>

            {/* Hamburger Button (Mobile Only) */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setSidebarOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white border-t border-white p-4">
        <div className="flex justify-between items-center w-full">
          <div>
            <img src={logo} className="w-[120px]" alt="logo" />
          </div>
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-5 justify-center">
              <img src={Bell} alt="Notifications" />
              <img src={Heart} alt="Wishlist" />
              <img src={cart} alt="Cart" />
            </div>
            <Button
              style={
                "text-[#FF6636] font-[600] px-6 py-3 bg-[#FFEEE8] rounded-sm"
              }
              text={"Create Account"}
            />
            <Button
              style={"text-[#fff] font-[600] px-6 py-3 bg-[#FF6636] rounded-sm"}
              text={"Sign in "}
            />
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 backdrop-blur-md bg-white/30 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
     {/* Sidebar Menu */}
<div
  className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
    sidebarOpen ? "translate-x-0" : "-translate-x-full"
  } flex flex-col`}
>
  {/* Header */}
  <div className="flex justify-between items-center p-4 border-b">
    <img src={logo} className="w-[100px]" alt="logo" />
    <button
      className="text-2xl text-[#FF6636]"
      onClick={() => setSidebarOpen(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
{/* <div className="flex justify-around p-4 ">
    <img src={Bell} alt="Notifications" className="w-6 h-6" />
    <img src={Heart} alt="Wishlist" className="w-6 h-6" />
    <img src={cart} alt="Cart" className="w-6 h-6" />
  </div> */}
  {/* Navigation Links */}
  <ul className="flex flex-col p-4 gap-4">
    {tabs.map((tab) => (
      <li key={tab.name}>
        <Link
          to={tab.path}
          className="block py-2 px-4 text-[#1D2026] hover:bg-[#FFEEE8] rounded"
          onClick={() => setSidebarOpen(false)}
        >
          {tab.name}
        </Link>
      </li>
    ))}
  </ul>


  

  {/* Buttons at Bottom */}
  <div className="p-4 mt-auto">
    <Button
      style={
        "w-full mb-2 text-[#FF6636] font-semibold px-4 py-2 bg-[#FFEEE8] rounded"
      }
      text={"Create Account"}
    />
    <Button
      style={
        "w-full text-white font-semibold px-4 py-2 bg-[#FF6636] rounded"
      }
      text={"Sign in"}
    />
  </div>
</div>

    </div>
  );
};

export default Navbar;
