import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CategoryBox from "./Ui/CategoryBox";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import icon7 from "../assets/icons/icon7.png";
import icon8 from "../assets/icons/icon8.png";
import icon9 from "../assets/icons/icon9.png";
import icon10 from "../assets/icons/icon10.png";
import icon11 from "../assets/icons/icon11.png";
import icon12 from "../assets/icons/icon12.png";
import icon13 from "../assets/icons/icon13.png";

const TopCategory = () => {
  const TopCategoryData = [
    {
      name: "Label",
      icon: icon1,
      background: "#EBEBFF",
      courseAmount: "63,476",
    },
    {
      name: "Business",
      icon: icon2,
      background: "#E1F7E3",
      courseAmount: "52,822 ",
    },
    {
      name: "Finance & Accounting",
      icon: icon3,
      background: "#FFF2E5",
      courseAmount: "33,841",
    },
    {
      name: "IT & Software",
      icon: icon4,
      background: "#FFF0F0",
      courseAmount: "22,649",
    },
    {
      name: "Personal Development",
      icon: icon5,
      background: "#fff",
      courseAmount: "20,126",
      hasShadow: true,
    },
    {
      name: "Office Productivity",
      icon: icon6,
      background: "#F5F7FA",
      courseAmount: "13,932",
    },
    {
      name: "Photography & Video",
      icon: icon8,
      background: "#F5F7FA",
      courseAmount: "6,196",
    },
    {
      name: "Music",
      icon: icon9,
      background: "#FFF2E5",
      courseAmount: "959",
    },
    {
      name: "Health & Fitness",
      icon: icon10,
      background: "#E1F7E3",
      courseAmount: "1,678 ",
    },
    {
      name: "Design",
      icon: icon11,
      background: "#FFEEE8",
      courseAmount: "2,600 ",
    },
    {
      name: "Lifestyle",
      icon: icon12,
      background: "#FFF2E5",
      courseAmount: "2,736 ",
    },
    {
      name: "Marketing",
      icon: icon13,
      background: "#EBEBFF",
      courseAmount: "12,068",
    },
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: "easeOut" },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 1 });
  return (
    <div className="w-full mt-12 mb-10 px-4">
      <h1 className="text-4xl text-center text-[#1D2026] font-[600]">
        Browse top category
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1290px] mx-auto mt-7 px-4">
        {TopCategoryData.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <CategoryBox
              key={index}
              background={item.background}
              courseAmount={item.courseAmount}
              icon={item.icon}
              courseName={item.name}
              hasShadow={item.hasShadow}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
