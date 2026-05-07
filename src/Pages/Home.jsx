import '../index.css';
import {Heading, BigHeading, SubHeading, CardHeading} from "../Features/Heading.jsx"
import {Paragraph} from "../Features/Paragraph.jsx"
import { Image, IconImage } from '../Features/Image.jsx';
import { Button } from '../Features/Button.jsx';
import { Seperator } from '../Features/Seperator.jsx';
import { Card } from '../Features/Card.jsx';

export const Home = ()=>{
  return(<>
  
  {/* Hero_Section */}

<section className='flex flex-col-reverse md:flex-row w-full h-fit md:h-screen pl-0 md:pl-30 '>
  <div className='flex flex-1 flex-col gap-6 justify-center text-center md:text-left'>
    <span> <Heading text={"Full Stack Developer"}/> </span>
    <span className='w-full md:w-140'>
      <Paragraph text={"Building high-quality web applications using ASP.NET Core and MERN stack. Focused on clean code and seamless user experiences that solve real-world problems."}/>
    </span>
    <span>
    <Button to={"/Projects"} text={"View Projects"}/>
    <Button to={"/Contactus"} text={"Contact Us"}/>
    </span>
  </div>
  <div className='flex flex-1 justify-center'>
    <Image src={"../HeroImage.png"} />
  </div>
</section>

{/* About_Section */}
<Seperator text={"About Us"}/>

<section className="flex gap-x-10 relative justify-center items-center pl-0 md:pl-20 text-white w-full h-screen">
  <BigHeading text={"About US"} className={"absolute top-0 left-25"}/>
  <div className='flex flex-1 justify-center items-start flex-col gap-2'>
    <Heading text={".NET ARCHITECTURE"}/>
    <SubHeading text={"Backend & Enterprise Solutions"}/>
    <Paragraph text={"I specialize in building the high-performance of modern applications using ASP.NET Core and C#. My focus is on engineering secure, scalable RESTful APIs and complex database architectures that ensure long-term reliability and enterprise-grade stability."} className={"w-130 pb-3"} />
    <span className='w-130 flex flex-wrap gap-5'>

    <IconImage src={"../JavaScript.png"} text={"JS"} />
    <IconImage src={"../React_Js.png"} text={"React"} />
    <IconImage src={"../Tailwind_Css.png"} text={"Tailwind"} />
    <IconImage src={"../C_Sharp.png"} text={"C#"}  />
    <IconImage src={"../Dot_Net.png"} text={".Net"} />
    <IconImage src={"../SQL.png"} text={"SQL"} />

    </span>

  </div>
  
  <div className='flex flex-1 justify-center items-start flex-col gap-2'>
    <Heading text={"MODERN STACK"}/>
    <SubHeading text={"Dynamic Full-Stack & Seamless UX"}/>
    <Paragraph text={"Build fast and modern web applications using MongoDB, Express, React, and Node.js. I focus on creating interactive interfaces that are easy to use and look great. My goal is to combine smooth performance with a clean design to give users the best experience possible."} className={"w-130 pb-3"} />
  
    <span className='w-130 flex flex-wrap gap-5'>

    <IconImage src={"../JavaScript.png"} text={"JS"} />
    <IconImage src={"../React_Js.png"} text={"React"} />
    <IconImage src={"../Tailwind_Css.png"} text={"Tailwind"} />
    <IconImage src={"../Node.png"} text={"Node"} />
    <IconImage src={"../Express.png"} text={"Express"} />
    <IconImage src={"../Mongo_DB.png"} text={"Mongo"} />
    
    
    </span>
  
  
  </div>

</section>

{/* Technical Expertise Section */}
<Seperator text={"Technical Expertise"} />
<section className="flex gap-x-10 relative pt-15 pl-0 md:pl-20 text-white w-full h-screen justify-center items-center">
  <BigHeading text={"Technical Expertise"} className={"absolute top-0 left-25"}/>
  
  <div className='w-full flex flex-wrap gap-15'>
  
  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>01</span>
    <Card CardHeadingText={".NET Development"} ParagraphText={"Architecting scalable backend logic and building robust web applications using ASP.NET Core."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>02</span>
    <Card CardHeadingText={"MERN Stack"} ParagraphText={"Developing modern full-stack applications with MongoDB, Express, React, and Node.js."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>03</span>
    <Card CardHeadingText={"API Engineering"} ParagraphText={"Designing and engineering high-performance RESTful APIs with C# for seamless data integration."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>04</span>
    <Card CardHeadingText={"Frontend Design"} ParagraphText={"Crafting interactive, responsive, and user-centric interfaces using React and modern CSS frameworks."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>05</span>
    <Card CardHeadingText={"Database Management"} ParagraphText={"Managing data structures across both Relational (SQL Server) and NoSQL (MongoDB) environments."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>06</span>
    <Card CardHeadingText={"CMS Solutions"} ParagraphText={"Building, customizing, and optimizing professional, content-driven websites using WordPress."}/>
  </div>

    </div>


</section>

{/* Project Section */}
<Seperator text={"Projects"}/>
  </>)}