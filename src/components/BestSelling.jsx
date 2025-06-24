import React from "react";
import { SellingCourse } from "../data/data";
import CourseCard from "./Ui/CourseCard";
import { motion } from "framer-motion";
const BestSelling = () => {
    const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: "easeOut" } },
  };

  return (
    <div className="pt-20 pb-10">
      <h1 className="text-2xl text-center font-[600]">Best selling courses</h1>
      <div className="md:max-w-[1290px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4 md:mx-auto px-4">
        {SellingCourse.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            transition={{ delay: index * 0.5 }}
            viewport={{ once: true }}
            className={`${index > 3 ? " sm:block hidden" : ""}`}
          >
            <CourseCard
              studentNumber={item.studentNumber}
              rate={item.rate}
              courseName={item.courseName}
              price={item.price}
              category={item.category}
              img={item.img}
              bgColor={item.bgcolor}
              textColor={item.textColor}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
