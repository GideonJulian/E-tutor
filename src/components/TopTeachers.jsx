import React from "react";
import star from "../assets/icons/Star.png";
import teach1 from "../assets/images/teach1.png";
import teach2 from "../assets/images/teach2.png";
import teach3 from "../assets/images/teach3.png";
import teach4 from "../assets/images/teach4.png";
import teach5 from "../assets/images/teach5.png";

const TopTeachers = () => {
  return (
    <div className="mx-auto">
      <h1 className="text-center font-bold text-2xl ">
        Top instructor of the month
      </h1>
      <div>
        {[
          {
            name: "Devon Lane",
            img: teach1,
            role: "Senior Developer",
            students: 854,
            rate: 4.9,
          },
          {
            name: "Darrell Steward",
            img: teach2,
            role: "Digital Product Designer",
            students: "451,444",
            rate: 4.9,
          },
          {
            name: "Jane Cooper",
            img: teach3,
            role: "UI/UX Designer",
            students: "435,671",
            rate: 4.8,
          },
          {
            name: "Albert Flores",
            img: teach4,
            role: "Adobe Instructor",
            students: "511,123",
            rate: 4.7,
          },
          {
            name: "Kathryn Murphy",
            img: teach5,
            role: "Lead Developer",
            students: "2,711",
            rate: 4.2,
          },
        ].map((items, index) => (
          <div key={index} className="flex  items-center  gap-5">
            <div>
              <img src={items.img} alt="" />
              <div className="desc border border-[#E9EAF0]">
                <div className="text-center">
                  <h1>{items.name}</h1>
                  <p className="text-[#8C94A3]">{items.role}</p>
                </div>
                <div className="border-t border-gray-200 flex items-center justify-between p-4">
                  <div className="flex items-center gap-1">
                    <img src={star} className="w-5 h-5" alt="rating" />
                    <h1 className="text-[#4E5566] font-bold text-sm">
                      {items.rate}
                    </h1>
                  </div>
                  <h1 className="text-sm font-bold text-[#4E5566]">
                    {items.students}
                    <span className="text-[#8C94A3] font-normal">
                      {" "}
                      students
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTeachers;
