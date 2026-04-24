import React from "react";
import Button from "./Button";
import aboutimg from "../assets/Images/Aboutimg.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";  


const AboutCom = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".aboutme",
      {
        y: 100,
        opacity: 0,
        // duration: 1,
        scrollTrigger: {
          trigger: ".section5",
          start: "top 60%",
        },
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".section5",
          start: "top 60%",
        },
      },
    );
  });
  return (
    <section className="w-full section5 min-h-screen flex flex-col lg:flex-row px-5 md:px-10 py-10">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="w-full lg:w-[50vw] flex flex-col justify-between text-gray-300 gap-6">
          <h1 className="text-3xl aboutme md:text-4xl lg:text-6xl font5">About Me</h1>

          <div className="flex flex-col gap-4 md:gap-6">
            <p className="text-sm md:text-lg font1">
              I’m a <b>Front-End Developer </b> with a strong focus on
              <b> React.js,</b>
              dedicated to building modern and high-performance web
              applications. I enjoy creating responsive and interactive user
              interfaces with clean and efficient code.
            </p>

            <p className="text-sm md:text-lg font1">
              I have a solid understanding of
              <b> JavaScript and strong problem-solving</b> skills, allowing me
              to build logic-driven applications. I continuously improve by
              working on real-world projects and exploring new technologies.
            </p>
          </div>

          <div className="flex justify-center">
            <Button btnName="VIEW RESUME" />
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
        <div className="w-[60vw] md:w-[90vw] lg:w-[40vw] h-[50vh] md:h-[60vh] lg:ml-0 lg:h-[90vh]">
          <img
            src={aboutimg}
            className="w-full h-full object-cover rounded-2xl lg:rounded-none "
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCom;
