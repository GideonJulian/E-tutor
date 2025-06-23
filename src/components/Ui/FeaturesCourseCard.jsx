import React from "react";
import course7 from "../../assets/images/course7.png";
import star from "../../assets/icons/Star.png";
import clock from "../../assets/icons/Clock.png";
import User from "../../assets/icons/User.png";
import bars from "../../assets/icons/bar-chart.png";
const FeaturesCourseCard = ({
  img,
  textColor,
  courseName,
  bgColor,
  nameColor,
  category,
}) => {
  return (
    <div className="">
      <div className="mt-5">
        <div className="flex flex-col lg:flex-row items-center border border-[#E9EAF0] w-full max-w-[650px] mx-auto rounded-md overflow-hidden shadow-sm bg-white">
          {/* Image */}
          <div className="w-full h-[200px] lg:w-[200px] lg:h-[180px] flex-shrink-0">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="course"
            />
          </div>

          {/* Text Content */}
          <div className="w-full p-4">
            {/* Category and Price */}
            <div className="flex items-center justify-between pb-3 flex-wrap gap-2">
              <div
                className="px-3 py-1 rounded text-sm font-semibold"
                style={{ backgroundColor: bgColor, color: textColor }}
              >
                {category}
              </div>
              <div className="text-lg font-semibold text-gray-800">$14.00</div>
            </div>

            {/* Course Title */}
            <h1
              className="font-bold text-lg lg:text-xl mb-2"
              style={{ color: nameColor }}
            >
              {courseName}
            </h1>

            {/* Author and Rating */}
            <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
              <span className="text-[#4E5566] text-sm lg:text-base">
                Kevin Gilbert
              </span>
              <div className="flex items-center gap-1">
                <img src={star} className="w-5 h-5" alt="star" />
                <span className="text-[#4E5566] font-bold text-sm lg:text-base">
                  5.0{" "}
                  <span className="text-[#8C94A3] font-normal">(357,914)</span>
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#4E5566]">
              <div className="flex items-center gap-2">
                <img src={User} alt="students" className="w-4 h-4" />
                <span className="font-bold">
                  265.7K{" "}
                  <span className="text-[#8C94A3] font-normal">students</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={bars} alt="level" className="w-4 h-4" />
                <span className="font-bold">Beginners</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={clock} alt="duration" className="w-4 h-4" />
                <span className="font-bold">6 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCourseCard;
