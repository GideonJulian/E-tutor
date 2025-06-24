import React from "react";
import FeaturesCourseCard from "./Ui/FeaturesCourseCard";
import { motion } from "framer-motion";
import course1 from "../assets/images/course1.png";
import course2 from "../assets/images/course2.png";
import course3 from "../assets/images/course3.png";
import course6 from "../assets/images/course6.png";
import course7 from "../assets/images/course7.png";

const FeatureCourses = () => {
      const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: "easeOut" } },
  };
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
      nameColor: "#FF6636",
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
      category: "Health & Fitness",
      price: 57,
      rate: 5.0,
      studentNumber: "265.7K",
      img: course7,
      bgcolor: "#FFF2E5",
      textColor: "#",
    },
  ];
  return (
    <div className="mx-auto max-w-[1390px] px-4 shadow-lg">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Our Feature Courses</h1>
        <p className="text-[#4E5566] max-w-xl text-base">
          Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
          varius purus et eleifend porta.
        </p>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            transition={{ delay: index * 0.5 }}
            viewport={{ once: true }}
          >
            {" "}
            <FeaturesCourseCard key={index} {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCourses;
