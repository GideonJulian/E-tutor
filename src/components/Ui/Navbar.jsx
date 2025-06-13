import React from "react";
import { Link, useLocation } from "react-router-dom";
import arrowDown from "../../assets/icons/ChevronDown.png";
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
   <div className="w-full bg-[#1D2026] p-4">
  <div className=" flex justify-between items-center w-full">
    {/* Left: Navigation Links */}
    <ul className="flex items-center gap-8">
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

  );
};

export default Navbar;
