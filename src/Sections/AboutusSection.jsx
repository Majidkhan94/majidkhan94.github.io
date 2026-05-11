import { Heading, SubHeading } from "../Features/Heading.jsx";
import { Paragraph } from "../Features/Paragraph.jsx";

import { motion } from "framer-motion";

export const AboutusSection = ({ AboutusData }) => {
  return (<>
      

      <section className="flex flex-col md:flex-row flex-wrap  gap-y-15 md:gap-y-25 md:gap-x-10 justify-center items-center px-3 md:px-20 py-6 md:py-25 text-white w-full ">

        {AboutusData.map((item, index) => (
          <div key={index} className="flex flex-1 justify-center md:justify-start items-center md:items-start flex-col gap-3 text-center md:text-left w-full" >
            <Heading text={item.AboutusHeading} className={"text-3xl!"} />
            <SubHeading text={item.AboutusSubheading} className={"text-base!"} />

            <Paragraph text={item.AboutusParagraph} className={"w-full md:w-130 pb-3"} />

            <div className="w-full md:w-130 flex flex-wrap justify-center md:justify-start gap-4 md:gap-10">

              {item.AboutusIcon.map((IconItem, i) => (
                <div key={i} className="relative group w-fit">

                  {/* ICON */}
                  <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    src={IconItem.image}
                    className="w-10 grayscale opacity-50 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_white] cursor-pointer" />

                  {/* TOOLTIP */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-semibold text-ParaColor text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {IconItem.name}
                  </span>

                </div>))}

            </div>
          </div>))}

      </section>
    </>)}