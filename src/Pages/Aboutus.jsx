import { AboutusSection } from '../Sections/AboutusSection.jsx';
import { AboutusApis } from '../Apis/AboutusApis.js';
import { Seperator } from "../Features/Seperator.jsx";
import { motion } from 'framer-motion';
import { Heading, SubHeading } from '../Features/Heading.jsx';
import { Paragraph } from '../Features/Paragraph.jsx';



export const Aboutus = () =>{
  

  const Card = ({ HeadingText, SubheadingText, FirstulText, SecondulText, ThirdulText }) => {
  return (
    <motion.div
      // Mobile par slide thora kam rakhein (x: -50) taake smooth lage
      initial={{ opacity: 0, x: -50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true, amount: 0.2 }} // Mobile par viewport amount kam rakhte hain taake jaldi trigger ho
      transition={{ duration: 1.2 }}
      
      // Responsive Classes:
      // Mobile par padding kam (p-6), Desktop par p-10
      // Mobile par width full (w-full), Desktop par w-[250px] ya jo bhi aapka size hai
      className="p-6 md:p-10 w-full md:w-[600px] lg:w-[800px] mx-auto"
    >
      <div className='flex flex-col gap-2'>
        {/* Heading mobile par thori choti (text-2xl) */}
        <Heading text={HeadingText} className="text-2xl md:text-3xl!" />
        
        <SubHeading text={SubheadingText} className="text-sm md:text-base" />

        {FirstulText && (
          <ul className="flex flex-col gap-3 list-disc list-outside ml-5 mt-4">
            <li className="text-ParaColor text-sm md:text-base">
              <Paragraph text={FirstulText} className="inline" />
            </li>
            <li className="text-ParaColor text-sm md:text-base">
              <Paragraph text={SecondulText} className="inline" />
            </li>
            <li className="text-ParaColor text-sm md:text-base">
              <Paragraph text={ThirdulText} className="inline" />
            </li>
          </ul>
        )}
      </div>
    </motion.div>
  );
};
  
  return(<>

    {/* AboutUs */}

<Seperator Lefttext={"AboutUs"} Righttext={""}/>
<section>
<AboutusSection AboutusData={AboutusApis} />
</section>

{/* Intership */}

<section>
<Seperator Lefttext={"Intership"} Righttext={"Nov 2025 - Feb 2026"}/>
<Card HeadingText={"MERN Stack Developer"} SubheadingText={"Ezitech Institute"}
FirstulText={"Constructed 5+ responsive interfaces and integrated them with secure RESTful APIs for the admin dashboard."} 
SecondulText={"Enhanced backend logic and database schemas, resulting in a 20% performance improvement."}
ThirdulText={"Integrated Redux for efficient state management and optimized MongoDB schemas to handle complex data flows, ensuring seamless synchronization between the frontend and database."}/>
</section>

{/* CERTIFICATION */}

<section>
<Seperator Lefttext={"CERTIFICATION"} Righttext={"Mar 2025 - Sep 2025"}/>
<Card HeadingText={".NET Development"} SubheadingText={"EWX Institute"}
FirstulText={"Backend systems using C# and ASP.NET Core, implementing secure JWT-based Authentication for user data protection."} 
SecondulText={"Optimized data access layers using Entity Framework and SQL Server to manage relational database schemas efficiently."}
ThirdulText={"Developed and documented RESTful APIs, performing endpoint testing and validation via Postman to ensure high reliability."}/>
</section>

{/* EDUCATION */}

<section>
<Seperator Lefttext={"EDUCATION"} Righttext={"2016 - 2018"}/>
<Card HeadingText={"Master of Computer Science"} SubheadingText={"Gomal University"} />
</section>

{/* OTHER EXPERIENCE */}

<section>
<Seperator Lefttext={"OTHER EXPERIENCE"} Righttext={"2022 - 2024"}/>
<Card HeadingText={"Medical Billing"} SubheadingText={"Kaizen Systems"}

FirstulText={"Processed 300+ medical claims monthly and collaborated with healthcare teams, improving billing accuracy by 20%"}

SecondulText={"Analyzed complex healthcare datasets to identify discrepancies, ensuring 100% compliance with industry regulations."}

ThirdulText={""}
/>
</section>

</>)}