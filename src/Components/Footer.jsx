import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Navigation } from "../Features/Navigation";
import { Paragraph } from "../Features/Paragraph";

export const Footer = () => {
  return (<>
      <footer className="border-t py-15 border-ParaColor w-full flex flex-col justify-center items-center">
        <section>
          <nav className="flex flex-col md:flex-row gap-5 md:gap-25 items-center justify-center font-Paragraph tracking-[1px] pb-5">
            
            <Navigation to={"/"} text={"Home"}/>
            <Navigation to={"/Aboutus"} text={"About Us"}/>
            <Navigation to={"/Technicalexpertise"} text={"Technical Expertise"}/>
            <Navigation to={"/Projects"} text={"Projects"}/>
            <Navigation to={"/Blog"} text={"Blog"}/>
            <Navigation to={"/Contactus"} text={"Contact us"}/>
            
          </nav>

          <hr className="border-ParaColor w-full mx-auto md:flex pb-10 hidden" />
            
            <Paragraph text={"Build modern web applications with care and focus. My goal is to create fast, high-quality websites that are easy to use and help businesses succeed."} className={"text-center mx-auto md:w-160 pb-5 md:pb-10"} />
        
        </section>

        <section className="flex flex-col items-center gap-6 pt-5 md:pt-0 w-full">
          
          <span className="flex gap-10 text-2xl text-ParaColor items-center justify-center">
            <a href="mailto:majidkhan.dev94@gmail.com"><IoMailOutline className="hover:text-GoldColor transition-all" /></a>
            <a href="https://wa.me/923411022489"><FaWhatsapp className="hover:text-GoldColor transition-all" /></a>
            <a href="https://www.linkedin.com/in/majidkhan94/"><FaLinkedin className="hover:text-GoldColor transition-all" /></a>
            <a href="https://github.com/Majidkhan94"><FaGithub className="hover:text-GoldColor transition-all" /></a>
          </span>

          <Paragraph text={"© 2026 Copyright: Majidkhan94.github.io"}/>
          
        </section>
      </footer>
    </>)}