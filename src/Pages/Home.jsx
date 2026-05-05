import '../index.css';
import { NavLink } from 'react-router-dom';
import {PrimaryButton, SecondaryButton} from "../Features/Button.jsx"
import { Heading } from '../Features/Heading.jsx';
import { Paragraph } from '../Features/Paragraph.jsx';

// Functions

const AboutImage = ({src, text, className}) =>{
    return(<>
    <div className='relative group w-fit'>  
    <img className='w-12 grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 cursor-pointer' src={src} />

   <span className={`absolute -bottom-7 text-center left-6 -translate-x-1/2 text-sm w-full font-bold font-oswald tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-1000 ${className}`}>
      {text}
    </span>
</div>
  </>)}  



  export const Home = ()=>{
  return(<>

  {/* Hero_Section */}
  <section className='w-full h-80 md:h-screen bg-[url("/Hero.png")] bg-contain bg-right bg-no-repeat'>
    <div className="flex flex-col w-80 md:w-190 h-full items-start justify-center pl-5 md:pl-20">
    <h1 className="text-GoldColor text-3xl md:text-6xl font-bold tracking-wider">Full Stack Developer</h1>
    
    <Paragraph text={"Building high-quality web applications using ASP.NET Core and MERN stack. Focused on clean code and seamless user experiences that solve real-world problems."} className={"pt-3 pb-4 md:pt-5 md:pb-10"} />
    
    <div>
    <PrimaryButton to={"/Projects"} text={"View Projects"} />
    <SecondaryButton to={"/Contactus"} text={"Contact Us"} />
    </div>
    </div>
  </section> 

{/* About Us Section */}
<section className='w-full md:h-screen flex flex-col justify-center pb-10 px-5 md:px-20'>

  
    <Heading text={"ABOUT ME"} />
  
  
  <div className='w-full flex justify-center pt-5 md:pt-15'>
    <div className='w-220 text-justify'>
      <Paragraph text={"I am a motivated Computer Science graduate and Full-Stack Developer with a deep focus on building scalable web applications. With hands-on expertise in the ASP.NET Core and MERN stack, I bridge the gap between robust backend logic and modern, interactive user interfaces. Whether it's engineering RESTful APIs with C# or crafting dynamic frontends with React, my goal is to deliver clean code and seamless user experiences. Based in Rawalpindi, I am ready to bring technical precision and creative solutions to real-world challenges."} />

        <div className='flex flex-wrap gap-x-4 gap-y-4 pt-10 md:pt-15'>
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



  </>)}