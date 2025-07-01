import React from "react";
import Hero from "../components/Ui/Hero";
import TopCategory from "../components/TopCategory";
import BestSelling from "../components/BestSelling";
import OverlayCard from "../components/Ui/OverlayCard";
import FeatureCourses from "../components/FeatureCourses";
import BecomeHost from "../components/BecomeHost";

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
      <div className="bg-[#fff] w-full p-6">
        <FeatureCourses />
      </div>
      <div className="bg-[#F0F2F5] w-full p-4" >
      <BecomeHost />
      </div>
    </div>
  );
};

export default Home;
