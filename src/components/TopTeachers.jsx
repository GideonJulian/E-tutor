import { motion } from "framer-motion";
import React from "react";
import star from "../assets/icons/Star.png";
import teach1 from "../assets/images/teach1.png";
import teach2 from "../assets/images/teach2.png";
import teach3 from "../assets/images/teach3.png";
import teach4 from "../assets/images/teach4.png";
import arrow from "../assets/icons/ArrowRight.png";
import teach5 from "../assets/images/teach5.png";

const TopTeachers = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: "easeOut" },
    },
  };
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-center font-bold text-2xl mb-8">
        Top instructors of the month
      </h1>

      {/* Grid with 5 columns on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            transition={{ delay: index * 0.5 }}
            viewport={{ once: true }}
          >
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border border-[#E9EAF0] rounded-lg bg-white shadow-sm"
            >
              <img
                src={items.img}
                alt={items.name}
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <h1 className="font-semibold text-base">{items.name}</h1>
              <p className="text-[#8C94A3] text-sm">{items.role}</p>

              <div className="flex items-center justify-between mt-4 w-full border-t pt-3 border-gray-200 text-sm text-[#4E5566]">
                <div className="flex items-center gap-1">
                  <img src={star} className="w-4 h-4" alt="rating" />
                  <span className="font-bold">{items.rate}</span>
                </div>
                <span className="font-bold">
                  {items.students}
                  <span className="text-[#8C94A3] font-normal"> students</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left px-4">
        <h1 className="text-base md:text-lg font-medium max-w-xl">
          Thousands of students are waiting for an instructor. Start teaching &
          earning now!
        </h1>
        <div>
          <h1 className="font-bold text-[#FF6636] flex items-center gap-2 justify-center md:justify-start mt-2 md:mt-0">
            Start Teaching
            <img src={arrow} alt="arrow" width={20} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TopTeachers;
