import React from "react";
import { SellingCourse } from "../data/data";
import CourseCard from "./Ui/CourseCard";
const BestSelling = () => {
  return (
    <div className='pt-20 pb-10'>
      <h1 className="text-2xl text-center font-[600]">Best selling courses</h1>
<div className="max-w-[1290px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 mx-auto px-4">
        {SellingCourse.map((item) => (
          <CourseCard
            studentNumber={item.studentNumber}
            rate={item.rate}
            courseName={item.courseName}
            price={item.price}
            category={item.category}
            img={item.img}
            bgColor={item.bgcolor}
            textColor={item.textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
