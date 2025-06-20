import React from "react";
import Hero from "../components/Ui/Hero";
import TopCategory from "../components/TopCategory";
import BestSelling from "../components/BestSelling";
import OverlayCard from "../components/Ui/OverlayCard";
import FeatureCourses from "../components/FeatureCourses";

const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <TopCategory />
      </div>
      <div className="bg-[#F0F2F5] w-full">
        <BestSelling />
      </div>
      <div className="bg-[#fff] w-full p-4">
        <FeatureCourses />
      </div>
    </div>
  );
};

export default Home;
