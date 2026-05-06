import '../index.css';
import { NavLink } from 'react-router-dom';
import {PrimaryButton, SecondaryButton} from "../Features/Button.jsx"
import { MainHeading } from '../Features/Heading.jsx';
import { MainParagraph } from '../Features/Paragraph.jsx';
import { AboutImage } from '../Features/AboutImage.jsx';
import { Card } from '../Features/Card.jsx';

  export const Home = ()=>{
  return(<>

  {/* Hero_Section */}
  <section className='w-full h-80 md:h-screen bg-[url("/Hero.png")] bg-contain bg-right bg-no-repeat  border border-BottomBorder'>
    <div className="flex flex-col w-80 md:w-190 h-full items-start justify-center pl-5 md:pl-20 relative">
    <span> 

    <MainHeading text={"Majid Khan"} className={"absolute top-20 text-[180px]!"}/>

    </span>
    
    <h1 className="text-GoldColor text-3xl md:text-6xl font-bold font-bebas z-10 tracking-wider animate-slide-left-to-right">Full Stack Developer</h1>
    
    <MainParagraph text={"Building high-quality web applications using ASP.NET Core and MERN stack. Focused on clean code and seamless user experiences that solve real-world problems."} className={"pt-3 pb-4 md:pt-5 md:pb-10"} />
    
    <div>
    <PrimaryButton to={"/Projects"} text={"View Projects"} />
    <SecondaryButton to={"/Contactus"} text={"Contact Us"} />
    </div>
    </div>
  </section> 

{/* About Us Section */}
<section className='w-full flex flex-col justify-center py-10 md:py-30 px-5 md:px-20  border border-BottomBorder'>
    <MainHeading text={"ABOUT ME"} />
  
  <div className='w-full flex justify-center pt-5 md:pt-15'>
    <div className='w-220 text-justify'>
      <MainParagraph text={"Computer Science graduate and Full-Stack Developer with a deep focus on building scalable web applications. With hands-on expertise in ASP.NET Core, MERN, and WordPress, I bridge the gap between backend logic and modern, interactive user interfaces. Whether it's engineering RESTful APIs with C# or crafting dynamic frontends with React, my goal is to deliver clean code and seamless user experiences. Based in Rawalpindi, I am ready to bring technical precision and creative solutions to real-world challenges."} />

        <div className='flex flex-wrap gap-x-4 md:gap-x-8 gap-y-12 pt-10 md:pt-15'>
          <AboutImage src={"../HTML.png"} text={"HTML5"} className={"text-[#eb3e00]"} />
          <AboutImage src={"../CSS.png"}  text={"CSS3"} className={"text-[#0068ad]"} />
          <AboutImage src={"../Tailwind_Css.png"}  text={"Tailwind"} className={"text-[#00c2fc]"} />
          <AboutImage src={"../JavaScript.png"}  text={"JS"} className={"text-GoldColor"} />
          <AboutImage src={"../React_Js.png"}  text={"React"} className={"text-[#00c2fc]"} />
          <AboutImage src={"../Dot_Net.png"}  text={"ASP"} className={"text-[#632b90]"} />
          <AboutImage src={"../C_Sharp.png"}  text={"C#"} className={"text-[#632b90]"} />
          <AboutImage src={"../SQL.png"}  text={"SQL"} className={"text-[#00c2fc]"} />
          <AboutImage src={"../Mongo_DB.png"}  text={"Mongo"} className={"text-[#00993c]"} />
          <AboutImage src={"../Node.png"}  text={"Node"} className={"text-[#00993c]"} />
          <AboutImage src={"../Express.png"}  text={"Express"} className={"text-[#00993c]"} />
        </div>

    </div>
  </div>
</section>


{/* Technical Expertise Section */}
<section className='w-full flex flex-col items-center py-10 md:py-30 px-5 md:px-20 border border-BottomBorder'>
  <div className="w-full text-left md:text-left mb-10">
    <MainHeading text={"Technical Expertise"} />
  </div>

  <div className="flex flex-wrap justify-center gap-4">
    
    {/* .NET */}
    <div className="w-full">
      <Card HeadingText=".NET Development" 
      ParagraphText="Architecting scalable backend logic and building robust web applications using ASP.NET Core."/>
    </div>

    {/* MERN */}
    <span className="w-full md:w-90">
      <Card HeadingText="MERN Stack" 
      ParagraphText="Developing modern full-stack applications with MongoDB, Express, React, and Node.js."/>
    </span>

    {/* API Engineering */}
    <span className="w-full md:w-90">
      <Card HeadingText="API Engineering" 
      ParagraphText="Designing and engineering high-performance RESTful APIs with C# for seamless data integration."/>
    </span>

    {/* Frontend Design */}
    <span className="w-full md:w-90">
      <Card HeadingText="Frontend Design" 
      ParagraphText="Crafting interactive, responsive, and user-centric interfaces using React and modern CSS frameworks." />
    </span>

    {/* Database Management */}
    <span className="w-full md:w-90">
      <Card HeadingText="Database Management" 
      ParagraphText="Managing data structures across both Relational (SQL Server) and NoSQL (MongoDB) environments."/>
    </span>

    {/* CMS Solutions */}
    <span className="w-full md:w-90">
      <Card HeadingText="CMS Solutions" 
      ParagraphText="Building, customizing, and optimizing professional, content-driven websites using WordPress."/>
    </span>

  </div>
</section>


{/* Services */}
<section className='w-full flex flex-col items-center py-10 md:py-30 px-5 md:px-20'>
<div className="w-full text-left md:text-left mb-10">
    <MainHeading text={"Services"} />
</div>

<div className="flex flex-wrap justify-center gap-4">

<div className="w-full md:w-90 relative">
  <span className='absolute -top-7 right-0 text-7xl font-bebas text-GoldColor/10 '>01</span>
<Card HeadingText=".NET Development" 
ParagraphText="Architecting scalable backend logic and building robust web applications using ASP.NET Core."/>
</div>

<div className="w-full md:w-90 relative">
  <span className='absolute -top-7 right-0 text-7xl font-bebas text-GoldColor/10 '>02</span>
<Card HeadingText=".NET Development" 
ParagraphText="Architecting scalable backend logic and building robust web applications using ASP.NET Core."/>
</div>

<div className="w-full md:w-90 relative">
  <span className='absolute -top-7 right-0 text-7xl font-bebas text-GoldColor/10 '>03</span>
<Card HeadingText=".NET Development" 
ParagraphText="Architecting scalable backend logic and building robust web applications using ASP.NET Core."/>
</div>

</div>
    



</section>

  </>)}