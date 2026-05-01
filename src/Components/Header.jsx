import '../index.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Navigation } from '../Features/Navigation';


export const Header = ()=>{
  const [isOpen, setIsOpen] = useState(false);
  return (<>
    
    <header className='h-20 bg-CardBgColor flex justify-between p-10 items-center md:px-25'>

      {/* Logo */}
      <NavLink to="/"><img className='w-20' src="/Logo.png" /></NavLink>

      {/* PC-Version Menu */}
      <nav className="md:flex gap-13 items-center font-bebas text-lg tracking-[1px] hidden">
    
        <Navigation to={"/"} text={"Home"}/>
        <Navigation to={"/Aboutus"} text={"About Us"}/>
        <Navigation to={"/Projects"} text={"Projects"}/>
        <Navigation to={"/Blog"} text={"Blog"}/>

        {/* Contact US Button */}
        <NavLink to="/Contactus" 
        className="px-4 py-2 rounded-md font-medium text-md inline-block border-2 border-GoldColor text-BodyColor bg-GoldColor transition-all duration-600 linear hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_#131314] active:translate-x-0 active:translate-y-0 active:shadow-none"> 
        Contact us
        </NavLink> 
      </nav>

      {/* Mobile-Version */}
  <nav className={`fixed inset-0 w-full h-screen z-9999 bg-BodyColor flex flex-col items-center justify-center gap-10 md:hidden transform transition-all duration-2000 linear font-bebas tracking-[1px]
    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
    
  {/* Close Button */}
  <div onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-GoldColor text-3xl"> ✕ </div>

  <NavLink to="/" onClick={() => setIsOpen(false)}
  className="text-3xl text-NavColor"> Home </NavLink>

  <NavLink to="/Aboutus" onClick={() => setIsOpen(false)}
  className="text-3xl text-NavColor"> About Us </NavLink>

  <NavLink to="/Projects" onClick={() => setIsOpen(false)}
  className="text-3xl text-NavColor"> Projects </NavLink>

  <NavLink to="/Blog" onClick={() => setIsOpen(false)}
  className="text-3xl text-NavColor"> Blog </NavLink>

  <NavLink to="/Contactus" onClick={() => setIsOpen(false)}
  className="bg-GoldColor text-BodyColor px-10 py-3 rounded-md text-2xl"> Contact Us </NavLink>
</nav>

<span onClick={() => setIsOpen(true)}
  className='flex md:hidden text-4xl text-GoldColor' > <GiHamburgerMenu /> </span>

    </header>
    </>)}