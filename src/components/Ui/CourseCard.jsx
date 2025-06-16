import React from "react";
import course1 from "../../assets/images/course1.png";
import star from "../../assets/icons/star.png";
const CourseCard = ({studentNumber, rate, courseName, price, category, img, bgColor, textColor}) => {
  return (
  <div className="w-full max-w-[290px] overflow-hidden font-sans mt-3">
      <div className="bg-white w-full  max-w-[290px]">
        <img src={img} className="w-full h-[180px] object-cover " />
        <div className="desc p-4">
          <div className="flex items-center justify-between">
            <div className={`bg-[] px-3 py-1 `} style={{background: bgColor}}>
              <h1 style={{color: textColor}}>{category}</h1>
            </div>
            <h1 className="font-[700] text-[22px] text-[#FF6636]">${price}</h1>
          </div>
          <div>
            <h1 className="text-[#1D2026] font-semibold mt-2">
              {courseName}
            </h1>
          </div>
        </div>
        <div className="border-t border-[#8C94A3] flex items-center justify-between p-4 ">
          <div className="flex items-center gap-1">
            <img src={star} className="w-7 h-7" />
            <h1 className="text-[#4E5566] font-bold text-lg">{rate}</h1>
          </div>
          <h1 className="font-bold text-lg ">{studentNumber} <span className="text-[#8C94A3] font-normal">students</span></h1>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
