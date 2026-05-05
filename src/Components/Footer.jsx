import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Navigation } from "../Features/Navigation";
import { MainParagraph } from "../Features/Paragraph";

export const Footer = () => {
  return (<>
      <footer className="bg-CardBgColor w-full flex flex-col justify-center items-center">
        <section>
          
          <nav className="md:flex gap-30 items-center justify-center font-bebas text-lg tracking-[1px] py-10 hidden">
            
            <Navigation to={"/"} text={"Home"}/>
            <Navigation to={"/Aboutus"} text={"About Us"}/>
            <Navigation to={"/Projects"} text={"Projects"}/>
            <Navigation to={"/Blog"} text={"Blog"}/>
            <Navigation to={"/Contactus"} text={"Contact us"}/>
            
          </nav>

          <hr className="border-GreyColor w-full mx-auto md:flex hidden" />

          {/* Logo */}
          <span className="flex md:hidden justify-center items-center pt-5">
          <NavLink to="/"><img className='w-20' src="/Logo.png" /></NavLink>  
          </span>
          <span>
            <MainParagraph text={"Build modern web applications with care and focus. My goal is to create fast, high-quality websites that are easy to use and help businesses succeed."} className={"text-center mx-auto md:w-160 py-5 md:py-15"} />
          </span>
        
        </section>

        <section className="flex flex-col items-center gap-5 pt-5 md:pt-0 w-full">
          
          <span className="flex pb-5 gap-10 text-2xl text-NavColor items-center justify-center">
            <a href="mailto:majidkhan.dev94@gmail.com"><SiGmail className="hover:text-GoldColor transition-all" /></a>
            <a href="https://wa.me/923411022489"><FaWhatsapp className="hover:text-GoldColor transition-all" /></a>
            <a href="https://www.linkedin.com/in/majidkhan94/"><FaLinkedin className="hover:text-GoldColor transition-all" /></a>
            <a href="https://github.com/Majidkhan94"><FaGithub className="hover:text-GoldColor transition-all" /></a>
          </span>

          <span className="text-BodyColor bg-GreyColor w-full text-lg font-bebas text-center py-3 tracking-[1px]">
            © 2026 Copyright: Majidkhan94.github.io
          </span>
        </section>
      </footer>
    </>)}