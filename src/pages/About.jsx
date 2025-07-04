import React from "react";
import heroimg from "../assets/images/abouthero.png";
import comp1 from "../assets/icons/comp1.png";
import comp2 from "../assets/icons/comp2.png";
import comp3 from "../assets/icons/comp3.png";
import comp4 from "../assets/icons/comp4.png";
import comp5 from "../assets/icons/comp5.png";
import comp6 from "../assets/icons/comp6.png";
import comp7 from "../assets/icons/comp7.png";
const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto p-5 gap-8 md:gap-10 max-w-[1200px]">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl text-[#E9EAF0]">
            2007-2021
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl mt-4 font-bold max-w-[475px] mx-auto md:mx-0">
            We share knowledge with the world
          </h1>
          <p className="text-base sm:text-lg text-[#6E7485] mt-4 max-w-[530px] mx-auto md:mx-0">
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Praesent fermentum quam mauris. Fusce tempor et augue a aliquet.
            Donec non ipsum non risus egestas tincidunt at vitae nulla.
          </p>
        </div>

        {/* Image */}
        <div>
          <img
            src={heroimg}
            alt="About Hero"
            className="w-full max-w-[452px] rounded-md"
          />
        </div>
      </div>
      <div className="flex items-center justify-center border-[.3px] border[#282828] p-6">
        <div className="flex">
          <div>
            <h1 className="text-2xl font-bold w-[368px]">
              We Just keep growing with 6.3k Companies
            </h1>
            <p className="mt-4 w-[368px] text-sm">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent
            </p>
          </div>
          <div>
            {
              [
                {img: comp7},
                {img: comp6},
                {img: comp5},
                {img: comp4},
                {img: comp3},
                {img: comp2},
                {img: comp1},
              ].map(items => (
                <img />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
