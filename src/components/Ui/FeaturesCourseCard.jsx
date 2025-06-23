import React from "react";
import course7 from '../../assets/images/course7.png'
import star from "../../assets/icons/Star.png";
import clock from "../../assets/icons/Clock.png";
import User from "../../assets/icons/User.png";
import bars from "../../assets/icons/bar-chart.png";
const FeaturesCourseCard = ({img,textColor,courseName, bgColor,nameColor,category}) => {
  return (
    <div>
     
      <div className="mt-5">
        <div className="flex  items-center border border-[#E9EAF0] w-[650px]">
          <div>
            <img src={img} className="h-[180px] object-cover" />
          </div>
          <div className=" w-full p-3">
            <div className="flex items-center justify-between pb-4">
              <div className="px-3 py-1 bg-[]" style={{backgroundColor: bgColor}}>
                <h1 className="" style={{ color: textColor}}>{category}</h1>
              </div>
              <div>
                <h1 className="text-lg">$14.00</h1>
              </div>
            </div>
            <h1 className="font-bold" style={{color: nameColor}}>
              {courseName}
            </h1>
            <div className="mt-3 flex justify-between items-center">
              <h1 className="text-[#4E5566] ">Kevin Gilbert</h1>
              <div className="flex items-center">
                <img src={star} className="w-6 h-6" alt="" />
                <h1 className="text-[#4E5566] font-bold text-lg">
                  5.0{" "}
                  <span className="text-[#8C94A3] font-normal">(357,914)</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-around mt-4">
              <div className="flex items-center gap-2">
                <img src={User} alt="" />
                <h1 className="text-[#4E5566] font-bold text-lg">
                  265.7K
                  <span className="text-[#8C94A3] font-normal">students</span>
                </h1>
              </div>{" "}
              <div className="flex items-center gap-2">
                <img src={bars} alt="" />
                <h1 className="text-[#4E5566] font-bold text-lg">Beginners</h1>
              </div>{" "}
              <div className="flex items-center gap-2">
                <img src={clock} alt="" />
                <h1 className="text-[#4E5566] font-bold text-lg">6 hours</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCourseCard;
