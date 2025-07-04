import React from "react";
import heroimg from "../assets/images/abouthero.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // 👈 Add Framer Motion
import comp1 from "../assets/icons/comp1.png";
import comp2 from "../assets/icons/comp2.png";
import comp3 from "../assets/icons/comp3.png";
import comp4 from "../assets/icons/comp4.png";
import comp5 from "../assets/icons/comp5.png";
import comp6 from "../assets/icons/comp6.png";
import comp7 from "../assets/icons/comp7.png";
import comp8 from "../assets/icons/comp9.png";
import people from "../assets/icons/people.png";
import note from "../assets/icons/Notebook.png";
import global from "../assets/icons/global.png";
import check from "../assets/icons/check.png";
import stack from "../assets/icons/Stack.png";
import partners from "../assets/images/partners.png";
import gallery from "../assets/images/Gallery.png";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import quote1 from "../assets/icons/quote1.png";
import quote2 from "../assets/icons/quote2.png";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.95, ease: "easeOut" },
    },
  };
  const images = [
    "../assets/images/01.png",
    "../assets/images/02.png",
    "../assets/images/03.png",
    "../assets/images/04.png",
    "../assets/images/05.png",
    "../assets/images/06.png",
    "../assets/images/07.png",
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto p-5 pb-14 gap-8 md:gap-10 max-w-[1200px]">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-[#E9EAF0]">
            2007-2021
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl mt-4 font-bold max-w-lg mx-auto md:mx-0">
            We share knowledge with the world
          </h1>
          <p className="text-base sm:text-lg text-[#6E7485] mt-4 max-w-xl mx-auto md:mx-0">
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Praesent fermentum quam mauris. Fusce tempor et augue a aliquet.
            Donec non ipsum non risus egestas tincidunt at vitae nulla.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroimg}
            alt="About Hero"
            className="w-full max-w-[452px] rounded-md"
          />
        </motion.div>
      </div>

      {/* Companies Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t-[.3px]  border-[#282828] py-8"
      >
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-2 px-4">
          {/* Text Block */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
              We Just keep growing with 6.3k Companies
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#6E7485] max-w-md">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent
            </p>
          </div>

          {/* Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 flex-1">
            {[comp7, comp6, comp5, comp4, comp3, comp2, comp1, comp8].map(
              (img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="w-full h-24 rounded-md flex items-center justify-center shadow-md bg-white"
                >
                  <img src={img} alt={`Company ${idx}`} className="w-16" />
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.div>

      {/* Counters */}
      <div ref={ref} className="w-full mb-5 max-w-[1200px] mx-auto mt-14 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 justify-items-center">
          {[
            { icon: people, num: 67.1, text: "k", name: "Students" },
            { icon: note, num: 26, text: "k", name: "Certified Instructor" },
            { icon: global, num: 72, text: "", name: "Country Language" },
            { icon: check, num: 99.9, text: "%", name: "Success Rate" },
            { icon: stack, num: 51, text: "", name: "Trusted Companies" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-8 h-8 sm:w-8 sm:h-8"
                />
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1D2026]">
                  {inView && (
                    <CountUp
                      end={item.num}
                      duration={2}
                      decimals={item.text === "%" ? 1 : 0}
                    />
                  )}
                  {item.text}
                </h1>
              </div>
              <p className="text-sm sm:text-base text-[#6E7485] mt-2">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#FFEEE8] flex flex-col-reverse md:flex-row justify-between items-center p-6 md:items-end md:gap-10 gap-6 mt-20  md:p-0 x-auto rounded-md">
        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end items-end ">
          <img
            src={partners}
            alt="Partners"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>{" "}
        {/* Text Content */}
        <div className="flex-1 p-10">
          <p className="text-[#FF6636] text-sm md:text-base">
            OUR ONE BILLION MISSION
          </p>
          <h1 className="mt-3 font-bold text-2xl sm:text-3xl md:text-4xl max-w-lg">
            Our one billion mission sounds bold, We agree.
          </h1>
          <p className="mt-3 text-sm sm:text-base  text-[#4E5566] max-w-xl">
            "We cannot solve our problems with the same thinking we used when we
            created them."—Albert Einstein. Institutions are slow to change.
            Committees are where good ideas and innovative thinking go to die.
            Choose agility over dogma. Embrace and drive change. We need to wipe
            the slate clean and begin with bold, radical thinking.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="bg-[#F5F7FA]">
        <div className="max-w-[1100px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 px-4 py-10">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <p className="text-[#FF6636] text-sm md:text-base">OUR GALLERY</p>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl max-w-md mx-auto lg:mx-0">
              We’ve been here almost 17 years
            </h1>
            <p className="text-[#4E5566] text-sm sm:text-base mt-4 max-w-lg mx-auto lg:mx-0">
              Fusce lobortis leo augue, sit amet tristique nisi commodo in.
              Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc
              libero. Curabitur in urna ligula. torquent per conubia nostra.
            </p>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.8,
            }}
            className="flex justify-center"
          >
            <img
              src={gallery}
              alt="Gallery"
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto flex">
        {[
          {
            text: "Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.",
            name: "Sundar Pichai",
            role: `Chief Chairman of ${(
              <Link>
                <a href="">Google</a>
              </Link>
            )}`,
          },
        ].map((items) => (
          <div className="p-4 bg-[#F5F7FA]">
            <div>
              <img src="" alt="" />
            </div>
            <p></p>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
