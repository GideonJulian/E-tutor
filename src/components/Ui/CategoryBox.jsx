import React from "react";

const CategoryBox = ({ courseAmount, courseName, background, icon, hasShadow }) => {
  return (
    <div
      className={`w-full max-w-[300px] ${
        hasShadow ? "shadow-lg" : ""
      } flex flex-col md:flex-row items-center text-center md:text-left gap-3 md:gap-5 p-5 rounded-md mx-auto`}
      style={{ background }}
    >
      <img src={icon} className="w-12 h-12 object-contain" />
      <div>
        <h1 className="font-semibold text-base md:text-lg">{courseName}</h1>
        <p className="text-[#6E7485] text-sm md:text-base">
          {courseAmount} Courses
        </p>
      </div>
    </div>
  );
};

export default CategoryBox;
