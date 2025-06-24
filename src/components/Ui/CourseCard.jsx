import React from "react";
import course1 from "../../assets/images/course1.png";
import star from "../../assets/icons/Star.png";
const CourseCard = ({studentNumber, rate, courseName, price, category, img, bgColor, textColor}) => {
  return (
<div className="w-full max-w-[650px] overflow-hidden font-sans mt-3 rounded-md shadow-sm bg-white">
  {/* Image */}
  <img src={img} className="w-full h-[180px] object-cover rounded-t-md" alt="course" />

  {/* Content */}
  <div className="p-4 space-y-2">
    {/* Top Row: Category and Price */}
    <div className="flex items-center justify-between">
      <div
        className="px-3 py-1 rounded text-sm font-medium"
        style={{ background: bgColor, color: textColor }}
      >
        {category}
      </div>
      <h1 className="font-bold text-lg text-[#FF6636]">${price}</h1>
    </div>

    {/* Course Name */}
    <h1 className="text-[#1D2026] font-semibold text-base">{courseName}</h1>
  </div>

  {/* Footer */}
  <div className="border-t border-gray-200 flex items-center justify-between p-4">
    <div className="flex items-center gap-1">
      <img src={star} className="w-5 h-5" alt="rating" />
      <h1 className="text-[#4E5566] font-bold text-sm">{rate}</h1>
    </div>
    <h1 className="text-sm font-bold text-[#4E5566]">
      {studentNumber}
      <span className="text-[#8C94A3] font-normal"> students</span>
    </h1>
  </div>
</div>

  );
};

export default CourseCard;
