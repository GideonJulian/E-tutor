import BestSelling from "../components/BestSelling";
import React, { useState } from "react";

const Course = () => {
  const [show, setShow] = useState(false);

  const tools = [
    { name: "HTML 5", number: "2,736" },
    { name: "CSS 3", number: "13,932" },
    { name: "Javascript", number: "52,822" },
    { name: "Saas", number: "20,126" },
    { name: "Laravel", number: "6,196" },
    { name: "Django", number: "22,649" },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Trending");

  const sortOptions = ["Trending", "Top Rated", "Newest", "Price: Low to High"];
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="w-full mt-10 mb-10">
      <div className="w-full max-w-[1290px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-auto flex-1">
            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-[#E9EAF0] w-full max-w-[457px] placeholder:text-[#1D2026] px-3 py-2 pl-10 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FF6636]"
              placeholder="UI/UX Design"
            />
          </div>

          {/* Sort Dropdown (Expandable Button Style) */}
          <div className="w-full flex items-center gap-10  md:w-auto">
            <div className="text-[#4E5566] text-sm mb-1 md:mb-0">Sort by:</div>

            <div
              className={`border border-[#E9EAF0] w-full md:w-52 bg-white rounded-md transition-all duration-300 overflow-hidden ${
                dropdownOpen ? "max-h-60 " : "max-h-[44px]"
              }`}
            >
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="w-full px-4 py-2 flex justify-between items-center text-sm"
              >
                {selectedSort}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <div className="flex flex-col text-left">
                {sortOptions.map(
                  (option, idx) =>
                    option !== selectedSort && (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedSort(option);
                          setDropdownOpen(false);
                        }}
                        className="px-4 py-2 text-sm hover:bg-[#f5f5f5] text-left"
                      >
                        {option}
                      </button>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mx-auto max-w-[1280px] mt-5 px-4">
        {/* Suggestions */}
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <h1 className="font-medium">Suggestion:</h1>
          <li className="text-[#FF6636] list-none cursor-pointer">
            user interface
          </li>
          <li className="text-[#FF6636] list-none cursor-pointer">
            user experience
          </li>
          <li className="text-[#FF6636] list-none cursor-pointer">
            web design
          </li>
          <li className="text-[#FF6636] list-none cursor-pointer">interface</li>
          <li className="text-[#FF6636] list-none cursor-pointer">app</li>
        </div>

        <h1 className="text-sm md:text-base font-medium text-[#1D2026]">
          3,145,684{" "}
          <span className="text-[#4E5566] font-normal">
            results found for “ui/ux design”
          </span>
        </h1>
      </div>
      <BestSelling searchTerm={searchTerm} />
    </div>
  );
};

export default Course;
