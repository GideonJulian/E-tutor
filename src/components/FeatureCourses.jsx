import React from "react";
import FeaturesCourseCard from "./Ui/FeaturesCourseCard";
import course1 from "../assets/images/course1.png";
import course2 from "../assets/images/course2.png";
import course3 from "../assets/images/course3.png";
import course6 from "../assets/images/course6.png";
import course7 from "../assets/images/course7.png";

const FeatureCourses = () => {
  const data = [
    {
      courseName: "Investing In Stocks The Complete Course! (13 H...",
      category: "Lifestyle",
      price: 57,
      rate: 5.0,
      studentNumber: "265.7K",
      img: course1,
      bgcolor: "#E1F7E3",
      textColor: "#15711F",
    },
    {
      courseName: "Adobe XD for Web Design: Essential Principles",
      nameColor: '#FF6636',
      category: "Productivity",
      price: 57,
      rate: 5.0,
      studentNumber: "265.7K",
      img: course2,
      bgcolor: "#F5F7FA",
      textColor: "#1D2026",
    },
    {
      courseName: "Google Analytics Certification - Learn How To...",
      category: "Personal Development",
      price: 57,
      rate: 5.0,
      studentNumber: "265.7K",
      img: course6,
      bgcolor: "#FFEEE8",
      textColor: "#993D20",
    },
    {
      courseName: "Investing In Stocks The Complete Course! (13 H...",
      category: "Lifestyle",
      price: 57,
      rate: 5.0,
      studentNumber: "265.7K",
      img: course7,
      bgcolor: "#FFF2E5",
      textColor: "#",
    },
  ];
  return (
    <div className="mx-auto max-w-[1390px]">
      <div className="flex  items-center justify-between">
        {" "}
        <h1 className="text-2xl">Our Feature courses </h1>
        <p className="text-[#4E5566] w-[450px]">
          {" "}
          Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
          varius purus et eleifend porta.
        </p>
      </div>
      <div className="shadow-md p-5 grid grid-cols-2 gap-10">
        {data.map((items) => (
          <FeaturesCourseCard img={items.img} category={items.category} nameColor={items.nameColor} bgColor={items.bgcolor} textColor={items.textColor} courseName={items.courseName} />
        ))}
      </div>
    </div>
  );
};

export default FeatureCourses;
