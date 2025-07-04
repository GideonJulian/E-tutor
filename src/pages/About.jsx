import React from "react";
import heroimg from "../assets/images/abouthero.png";
import comp1 from "../assets/icons/comp1.png";
import comp2 from "../assets/icons/comp2.png";
import comp3 from "../assets/icons/comp3.png";
import comp4 from "../assets/icons/comp4.png";
import comp5 from "../assets/icons/comp5.png";
import comp6 from "../assets/icons/comp6.png";
import comp7 from "../assets/icons/comp7.png";
import comp8 from "../assets/icons/comp9.png";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto p-5 pb-14 gap-8 md:gap-10 max-w-[1200px]">
        {/* Text Content */}
        <div className="text-center md:text-left">
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

      {/* Companies Section */}
      <div className=" border-[.3px] border-[#282828] py-8">
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
                <div
                  key={idx}
                  className="w-full h-24 rounded-md flex items-center justify-center shadow-md bg-white"
                >
                  <img src={img} alt={`Company ${idx}`} className="w-16" />
                </div>
              )
            )}
          </div>
        </div>

        {/*  */}

        <div>
      
        </div>
      </div>
    </div>
  );
};

export default About;
