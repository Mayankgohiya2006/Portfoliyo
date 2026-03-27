import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import myimg from "../assets/Images/portfolyo-img.webp";
import Button from "../Component/Button";
import SkillDisplay from "../Component/SkillDisplay";
import Archievement from "../Component/Archievement";
import skillsvarz from "../assets/Images/skillsvarzlogo.webp";
import Footer from "../Component/Footer";
import AboutCom from "../Component/AboutCom";
import GClogo from "../assets/Images/GClogo.webp"
import ProjectComponent from "../Component/ProjectComponent";

const HomePage = () => {
  

  const [skills, setSkills] = useState([
    {
      sno: "01",
      skillname: "HTML",
    },
    {
      sno: "02",
      skillname: "CSS",
    },
    {
      sno: "03",
      skillname: "JavaScript",
    },
    {
      sno: "04",
      skillname: "React JS",
    },
    {
      sno: "05",
      skillname: "Figma",
    },
    {
      sno: "06",
      skillname: "Git/Github",
    },
  ]);

  const [archiviement, setArchiviement] = useState([
    {
      title: "Certificate",
      Desc: "Successfully completed a comprehensive Front-End Development program from Gravity Coding, where I gained strong proficiency in building responsive and user-friendly web interfaces. Developed hands-on experience with modern technologies like HTML, CSS, Tailwind CSS, JavaScript, and React, along with a solid understanding of UI/UX principles and problem-solving. This certification reflects my ability to create efficient, scalable, and visually appealing web applications.",
      logo: GClogo,
      by: "Gravity Coding",
    },
    {
      title: "Certificate",
      Desc: "Awarded the Animation Master title at the Inter-Batch Hackathon 2.0,a web development competition organized by Gravity Coding. Collaborated as part of Team Leo Legends to design and implement creative, user-focused solutions, showcasing strong front-end development skills, problem-solving ability.",
      logo: skillsvarz,
      by: "Skillsvarz Gravity Coding pvt ltd.",
    },
  ]);

 

  return (
    <div className=" bg-black">
      <Navbar />

      {/* Section   1 */}
      <section>
        <div className="h-full mt-10  flex text-white w-full  mb-30">
          <div className="bg-black flex flex-col justify-end px-10  w-[70vw] h-[90vh]">
            <h3 className="text-3xl font1 leading-none">
              I’m Specialized in
              <br /> Creating Website Design.
            </h3>
            <h1 className="text-[10rem] font5 ">MAYANK</h1>
          </div>
          <div className=" p-15 flex justify-end bg-black w-[30vw] h-[90vh]">
            <div className="h-[35vh] w-[15vw] ">
              <img
                src={myimg}
                className="h-full mt-10 w-full object-cover object-top"
                alt=""
              />
            </div>
          </div>
        </div>

         {/* Section  2 */}
       <ProjectComponent/>
      </section>

      {/* Section   3 */}
      <section className="bg-black">
        <div className="flex items-center justify-center h-20">
          <Button btnName="More" />
        </div>
        <div className="px-15 ">
          <h1 className="text-white text-6xl my-14 font5">My Tech Skills</h1>
          {skills.map((val) => {
            return <SkillDisplay data={val} />;
          })}
        </div>
      </section>

      {/* Section   4 */}
     <AboutCom/>

      {/* Section   5 */}
      <h1 className="text-white text-6xl font5 mt-40 px-10 ">Achievement</h1>
      <section className="h-[80vh] grid grid-cols-3 gap-7 cursor-pointer  px-5 ">
        {archiviement.map((val) => {
          return <Archievement data={val} />;
        })}
      </section>

      {/* Section   6 */}

      <Footer />
    </div>
  );
};
export default HomePage;
