import { CardHeading } from "../Features/Heading.jsx";
import { Paragraph } from "../Features/Paragraph.jsx";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ProjectApi } from "../Apis/ProjectApi.js";
import { Seperator } from "../Features/Seperator.jsx";

const ProjectNavLink = motion(NavLink);

export const Projects = ({ ProjectsData }) => {
  return (<>
      
      <section className="flex flex-col w-full px-4 sm:px-6 md:px-10 lg:px-16 py-3">
        
        {/* Heading */}
        <Seperator Lefttext={"Projects"} Righttext={"View More"} to={"/Projects"} />

        {/* Projects */}
        <div className="flex flex-wrap gap-y-8 pt-10">
          
          {ProjectsData.map((item, index) => {
            return (
              <div key={index} className=" w-full sm:w-1/2 lg:w-1/3 " >
                <ProjectNavLink
                  to={item.ProjectUrl}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6 }}
                  className=" flex flex-col p-4 sm:p-5 cursor-pointer grayscale-0 md:grayscale-100 md:hover:grayscale-0
                    hover:-translate-y-2 transition-all duration-500 " >
                  {/* Image */}
                  <img src={item.ProjectImage} className=" rounded-lg w-full h-55 md:h-57 object-cover" />

                  {/* Heading */}
                  <CardHeading text={item.ProjectHeading} className={"pt-4"} />

                  {/* Paragraph */}
                  <Paragraph text={item.ProjectParagraph} />
                </ProjectNavLink>
              </div>)})}
        </div>
      </section>
    </>)}