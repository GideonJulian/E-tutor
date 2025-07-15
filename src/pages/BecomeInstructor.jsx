import React from "react";
import Hero from "../components/Ui/Hero";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import heroImg from "../assets/images/Hosthero.png";
import Button from "../components/Ui/Button";
import people from "../assets/icons/people.png";
import note from "../assets/icons/Notebook.png";
import global from "../assets/icons/global.png";
import check from "../assets/icons/check.png";
import stack from "../assets/icons/Stack.png";
import CountUp from "react-countup";
const BecomeInstructor = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: "easeOut" },
    },
  };
  return (
    <div>
      <div className="flex md:ml-[130px] flex-col md:flex-row items-center justify-center gap-6 px-4 pt-4 pb-0 md:p-0">
        <div className="max-w-[648px] text-center md:text-left">
          <h1 className="text-[#1D2026] text-4xl md:text-5xl font-semibold leading-tight">
            Become an Instructor
          </h1>
          <p className="mt-6 text-lg text-[#333] max-w-[450px]">
            Become an instructor & start teaching with 26k certified
            instructors. Create a success story with 67.1k Students — Grow
            yourself with 71 countries.
          </p>
          <Button
            text={"Get started"}
            style="text-white cursor-pointer font-semibold px-6 py-3 bg-[#FF6636] mt-6 rounded-sm"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src={heroImg}
            alt="Hero Illustration"
            className="w-full md:max-w-[600px]"
          />
        </div>
      </div>

      <div className="bg-[#FFEEE8] w-full p-3">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-2 justify-items-center">
            {[
              { icon: people, num: 67.1, text: "k", name: "Students" },
              { icon: note, num: 26, text: "k", name: "Certified Instructor" },
              { icon: global, num: 72, text: "", name: "Country Language" },
              { icon: check, num: 99.9, text: "%", name: "Success Rate" },
              { icon: stack, num: 51, text: "", name: "Trusted Companies" },
            ].map((item, idx) => (
              <motion.div
                ref={ref}
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-6 h-6 sm:w-6 sm:h-6"
                  />
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1D2026]">
                    {inView ? (
                      <CountUp
                        end={item.num}
                        duration={2}
                        decimals={item.text === "%" ? 1 : 0}
                      />
                    ) : (
                      0
                    )}
                    {item.text}
                  </h1>
                </div>
                <p className="text-xs sm:text-sm text-[#6E7485] mt-1">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div>
          <div className="flex md:ml-[130px] flex-col md:flex-row items-center justify-center gap-6 px-4 pt-4 pb-0 md:p-0">
            
          </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
