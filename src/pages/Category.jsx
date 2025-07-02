import React, { useState } from "react";
import BestSelling from "../components/BestSelling";
import TopTeachers from "../components/TopTeachers";

const Category = () => {
  const [show, setShow] = useState(true);

  const tools = [
    { name: "HTML 5", number: "2,736" },
    { name: "CSS 3", number: "13,932" },
    { name: "Javascript", number: "52,822" },
    { name: "Saas", number: "20,126" },
    { name: "Laravel", number: "6,196" },
    { name: "Django", number: "22,649" },
  ];

  return (
    <div className="w-full mt-10">
      <div className="w-full px-4">
        <h1 className="text-center font-semibold text-xl sm:text-2xl mb-10">
          Best selling courses in Web Development
        </h1>

        <BestSelling title="" limit={4} />

        <div className="mx-auto md:max-w-[1270px] mt-12">
          <h1 className="font-bold text-lg ml-2 sm:ml-5 md:ml-0">
            Popular tools
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mt-7 mb-10 px-2 sm:px-4">
            {tools.map((item, index) => (
              <div
                key={index}
                className="w-full h-[94px] text-center border border-[#E9EAF0] cursor-pointer transition-shadow hover:shadow-md hover:text-[#FF6636] duration-300 flex flex-col justify-center rounded-md"
              >
                <h1 className="font-bold text-base">{item.name}</h1>
                <p className="text-[#8C94A3] text-sm">
                  {item.number} Courses
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F0F2F5] px-4 py-10">
        <TopTeachers show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default Category;
