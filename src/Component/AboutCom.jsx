import React from 'react'
import Button from './Button'
import aboutimg from "../assets/Images/Aboutimg.webp";


const AboutCom = () => {
  return (
    <section className="h-screen w-full flex px-10 ">
      <div className="h-full w-1/2 flex items-center  ">
        <div className="h-[60vh] w-[50vw] flex flex-col justify-between text-gray-300 ">
          <h1 className="text-6xl font5">About Me</h1>
          <div className=" flex flex-col gap-6">
            <p className="text-lg font1">
              I’m a <b>Front-End Developer </b> with a strong focus on
              <b>React.js,</b>
              dedicated to building modern and high-performance web
              applications. I enjoy creating responsive and interactive user
              interfaces with clean and efficient code.
            </p>
            <p className="text-lg font1">
              I have a solid understanding of
              <b>JavaScript and strong problem-solving</b> skills, allowing me
              to build logic-driven applications. I continuously improve by
              working on real-world projects and exploring new technologies.
            </p>
          </div>
          <Button btnName="VIEW RESUME" />
        </div>
      </div>
      <div className="h-full w-1/2  flex items-end justify-end ">
        <div className="h-[90vh] w-[40vw]">
          <img src={aboutimg} className="h-[90vh] w-full object-cover" alt="" />
        </div>
      </div>
    </section>
  )
}

export default AboutCom
