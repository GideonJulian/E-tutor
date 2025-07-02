import React from "react";
import BestSelling from "../components/BestSelling";
import TopTeachers from "../components/TopTeachers";

const Category = () => {
    const [show, setShow] = useState(true);

  return (
    <div className="w-full mt-10">
      <div className="w-full">
        <h1 className="text-center font-[600] text-2xl mb-10 ">
          Best selling courses in Web Development
        </h1>
        <div>
          <BestSelling title={""} limit={4} />
        </div>
        <div className="mx-auto md:max-w-[1270px] ">
          <h1 className="font-bold text-lg ">Popular tools</h1>
          <div className="flex gap-10 mb-10">
            {[
              {
                name: "HTML 5",
                number: "2,736 ",
              },
              {
                name: "CSS 3",
                number: "13,932",
              },
              {
                name: "Javascript",
                number: "52,822",
              },
              {
                name: "Saas",
                number: "20,126",
              },
              {
                name: "Laravel",
                number: "6,196",
              },
              {
                name: "Django",
                number: "22,649",
              },
            ].map((items, index) => (
              <div className="p-4 w-[200px] h-[94px] text-center border border-[#E9EAF0] cursor-pointer transition-color transition-shadow hover:shadow-lg hover:text-[#FF6636] duration-300 ">
                <h1 className="font-bold"> {items.name}</h1>
                <p className="text-[#8C94A3]">{items.number} Courses</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F0F2F5] p-4">
      <TopTeachers show={show} setShow={setShow} />;
      </div>
    </div>
  );
};

export default Category;
