import React from "react";
import BestSelling from "../components/BestSelling";

const Category = () => {
  return (
    <div className="w-full mt-10">
      <div className="w-full">
        <h1 className="text-center font-[600] text-2xl mb-10 ">
          Best selling courses in Web Development
        </h1>
        <div>
            <BestSelling title={''}/>
        </div>
      </div>
    </div>
  );
};

export default Category;
