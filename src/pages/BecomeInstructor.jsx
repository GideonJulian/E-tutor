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
import computer from "../assets/images/herowhy.png";
import CheckCircle from "../assets/icons/CheckCircle.png";
import icon1 from "../assets/icons/icon17.png";
import icon2 from "../assets/icons/icon16.png";
import icon4 from "../assets/icons/icon14.png";
import icon3 from "../assets/icons/icon15.png";
import Union from "../assets/images/Union.png";
import union2 from "../assets/images/union2.png";
import arrow from "../assets/icons/ArrowRight.png";
import email from "../assets/icons/email.png";
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
        <div className="container mx-auto my-10 flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
          {/* Image Section */}
          <img
            src={computer}
            alt=""
            className="w-full max-w-md md:max-w-lg object-contain"
          />

          {/* Text Section */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D2026] max-w-2xl">
                Why you’ll start teaching on Eduguard
              </h1>
              <p className="text-[#4E5566] mt-4 max-w-2xl text-sm sm:text-base">
                Praesent congue ornare nibh sed ullamcorper. Proin venenatis
                tellus non turpis scelerisque, vitae auctor arcu ornare. Cras
                vitae nulla a purus mollis venenatis.
              </p>
            </div>

            {/* Feature List */}
            <div className="flex flex-col gap-6">
              {[
                {
                  head: "Teach your students as you want.",
                  icon: CheckCircle,
                  text: "Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus.",
                },
                {
                  head: "Manage your course, payment in one place",
                  icon: CheckCircle,
                  text: "Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu. Nullam vel libero pharetra, euismod turpis et, elementum enim.",
                },
                {
                  head: "Chat with your students",
                  icon: CheckCircle,
                  text: "Morbi quis lorem non orci fermentum euismod. Nam sapien tellus, aliquam nec porttitor vel, pellentesque at metus.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-4 h-4 sm:w-5 sm:h-5 mt-1"
                  />
                  <div>
                    <h2 className="font-semibold text-base sm:text-lg">
                      {item.head}
                    </h2>
                    <p className="text-[#4E5566] max-w-xl text-xs sm:text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F5F7FA] p-8">
        <h1 className="text-center font-bold text-2xl mx-auto max-w-[318px] w-full">
          How you'll become successful instructor
        </h1>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: icon1,
              head: "1. Apply to become instructor.",
              text: "Sed et mattis urna. Sed tempus fermentum est, eu lobortis nibh consequat eu.",
            },
            {
              icon: icon2,
              head: "2. Setup & edit your profile.",
              text: "Duis non ipsum at leo efficitur pulvinar. Morbi semper nisi eget accumsan ullamcorper.",
            },
            {
              icon: icon3,
              head: "3. Create your new course",
              text: "Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque.",
            },
            {
              icon: icon4,
              head: "4. Start teaching & earning",
              text: "Praesent congue ornare nibh sed ullamcorper. Proin venenatis tellus non turpis scelerisque.",
            },
          ].map((items, idx) => (
            <div
              key={idx}
              className="bg-white flex flex-col items-center justify-center text-center rounded-lg p-7 shadow hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">
                <img src={items.icon} alt="" className="w-12 h-12" />
              </div>
              <h2 className="font-semibold text-lg mb-2">{items.head}</h2>
              <p className="text-[#6E7485] text-md">{items.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 md:p-10 lg:p-14 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center  gap-10 lg:gap-24">
          {/* Left Text Content */}
          <div className="text-center md:text-left flex-1 max-w-[536px]">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#1D2026] font-bold">
              Instructor rules & regulations
            </h1>
            <p className="pt-4  md:text-lg text-sm text-[#4E5566]">
              Sed auctor, nisl non elementum ornare, turpis orci consequat arcu,
              at iaculis quam leo nec libero. Aenean mollis turpis velit, id
              laoreet sem luctus in. Etiam et egestas lorem.
            </p>

            <ul className="pt-4 space-y-2 text-left text-[#4E5566]">
              {[
                {
                  text: "Sed ullamcorper libero quis condimentum pellentesque.",
                },
                { text: "Nam leo tortor, tempus et felis non." },
                {
                  text: "Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.",
                },
                {
                  text: "Vestibulum ultrices commodo tellus. Etiam eu lectus sit amet turpi.",
                },
              ].map((item, idx) => (
                <li key={idx} className="list-disc ml-5">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={Union}
              alt="Illustration"
              className="w-full max-w-[548px]"
            />
          </div>
        </div>
      </div>
    <div className="p-6 md:p-10 lg:p-14 w-full bg-[#FFEEE8]">
  <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-24">
    {/* Image Section */}
    <div className="flex-shrink-0 w-full md:w-1/2">
      <img src={union2} alt="" className="w-full max-w-full" />
    </div>

    {/* Text Content Section */}
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Don’t worry we’re always here to help you
      </h1>
      <p className="mt-3 text-base sm:text-lg text-[#4E5566]">
        Mauris aliquet ornare tortor, ut mollis arcu luctus quis. Phasellus nec augue malesuada, sagittis ligula vel, faucibus
        metus. Nam viverra metus eget nunc dignissim.
      </p>

      <ul className="pt-4 space-y-2 text-[#4E5566]">
        {[
          {
            text: "Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel.",
          },
          {
            text: "Those who are looking to reboot their work life and try a new profession that.",
          },
          {
            text: "Porttitor faucibus erat. Integer eget purus non massa ultricies pretium ac sed eros.",
          },
          {
            text: "Duis ornare enim ullamcorper congue.",
          },
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <img src={arrow} alt="arrow" className="w-4 h-4 mt-1" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-start gap-4">
        <img src={email} alt="email" className="w-6 h-6 mt-1" />
        <div>
          <p className="text-[#8C94A3] text-sm sm:text-base">
            Email us, anytime anywhere
          </p>
          <h1 className="font-bold text-base sm:text-lg">help.eduguard@gmail.com</h1>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default BecomeInstructor;
