import { Seperator } from "../Features/Seperator.jsx";
import { TechnicalexpertiseApi } from "../Apis/TechnicalexpertiseApi.js";
import { CardHeading } from "../Features/Heading.jsx";
import { Paragraph } from "../Features/Paragraph.jsx";
import { motion } from "framer-motion";

export const Technicalexpertise = () => {
  return (
    <>
      <Seperator
        Lefttext={"Technical Expertise"}
        Righttext={"View More"}
        to={"/Technicalexpertise"}
      />

      {/* SECTION */}
      <section className="w-full min-h-screen flex justify-center items-center px-4 sm:px-6 md:px-10 lg:px-20 py-16 text-white">
        
        {/* CONTAINER */}
        <div className="w-full flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-15">
          
          {TechnicalexpertiseApi.map((item, index) => {
            return (
              <div
                key={index}
                className="relative w-full sm:w-[320px] md:w-[350px]"
              >
                {/* NUMBER */}
                <span className="absolute -top-6 right-2 sm:-top-8 sm:-right-5 text-5xl sm:text-6xl md:text-7xl text-ParaColor/10 font-bold font-Heading">
                  {item.TechnicalexpertiseNumber}
                </span>

                {/* CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="
                    flex flex-col gap-3
                    bg-LightColor
                    p-5 sm:p-6
                    rounded-xl
                    border border-transparent
                    hover:border-ParaColor/20
                    hover:-translate-y-2
                    hover:scale-[1.02]
                    transition-all duration-500
                    cursor-pointer
                  "
                >
                  <CardHeading text={item.TechnicalexpertiseHeading} />
                  <Paragraph text={item.TechnicalexpertiseParagraph} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};