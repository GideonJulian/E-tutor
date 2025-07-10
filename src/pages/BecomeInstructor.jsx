import React from "react";
import Hero from "../components/Ui/Hero";
import heroImg from '../assets/images/Hosthero.png'
const BecomeInstructor = () => {
  return (
    <div>
      <Hero
        buttonText={"Get Started "}
        heroHead={"Become an Instuctor"}
        subText={
          "Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries."
        }
        heroImg={heroImg}
       imgSize={"300"} 
      />
      <div className="bg-[#FFEEE8] w-full p-3 ">

      </div>
    </div>
  );
};

export default BecomeInstructor;
