import { Heading, SubHeading } from "../Features/Heading.jsx";
import { Paragraph } from "../Features/Paragraph.jsx";
import { Seperator } from "../Features/Seperator.jsx";
import { motion } from "framer-motion";

export const Aboutus = ({ AboutusData }) => {
  return (
    <>
      <Seperator Lefttext={"AboutUs"} Righttext={"View More"} to={"/Aboutus"} />

      <section className="flex flex-col md:flex-row gap-y-5 md:gap-x-10 justify-center items-center px-3 md:px-20 py-10 md:py-0 text-white w-full min-h-screen">

        {AboutusData.map((item, index) => (
          <div key={index} className="flex flex-1 justify-center md:justify-start items-center md:items-start flex-col gap-3 text-center md:text-left w-full" >
            <Heading text={item.AboutusHeading} />
            <SubHeading text={item.AboutusSubheading} />

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
                    className="w-10 sm:w-12 grayscale opacity-50 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-2 group-hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.6)] cursor-pointer" />

                  {/* TOOLTIP */}
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-semibold text-ParaColor text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {IconItem.name}
                  </span>

                </div>
              ))}

            </div>
          </div>
        ))}

      </section>
    </>
  )}