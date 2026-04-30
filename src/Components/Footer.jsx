import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (<>
      <footer className="bg-CardBgColor w-full flex flex-col justify-center items-center fixed bottom-0">
        <section>
          
          <nav className="md:flex gap-30 items-center justify-center font-bebas text-lg tracking-[1px] py-10 hidden">
            <NavLink to="/" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor ${isActive ? "text-GoldColor" : "text-NavColor"}`}> Home </NavLink>
            <NavLink to="/Aboutus" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor ${isActive ? "text-GoldColor" : "text-NavColor"}`}> About Us </NavLink>
            <NavLink to="/Projects" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor ${isActive ? "text-GoldColor" : "text-NavColor"}`}> Projects </NavLink>
            <NavLink to="/Blog" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor ${isActive ? "text-GoldColor" : "text-NavColor"}`}> Blog </NavLink>
            <NavLink to="/Contactus" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor ${isActive ? "text-GoldColor" : "text-NavColor"}`}> Contact Us </NavLink>
          </nav>

          <hr className="border-GreyColor w-full mx-auto md:flex hidden" />

          {/* Logo */}
          <span className="flex md:hidden justify-center items-center pt-5">
          <NavLink to="/"><img className='w-20' src="/Logo.png" /></NavLink>  
          </span>

          <p className="text-NavColor py-5 md:py-15 text-lg md:w-160 text-center mx-auto">
            Build modern web applications with care and focus. My goal is to create fast, high-quality websites that are easy to use and help businesses succeed.
          </p>
        
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