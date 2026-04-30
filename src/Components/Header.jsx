import '../index.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';

export const Header = ()=>{
  const [isOpen, setIsOpen] = useState(false);
  return (<>
    
    <header className='h-20 bg-CardBgColor flex justify-between p-10 items-center md:px-25'>

      {/* Logo */}
      <NavLink to="/"><img className='w-20' src="/Logo.png" /></NavLink>

      {/* PC-Version Menu */}
      <nav className="md:flex gap-13 items-center font-bebas text-lg tracking-[1px] hidden">
    
      <NavLink to="/" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor
      ${ isActive ? "text-GoldColor" : "text-GreyColor" }` }> Home </NavLink>

      <NavLink to="/Aboutus" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor
      ${ isActive ? "text-GoldColor" : "text-GreyColor" }` }> About Us </NavLink>

      <NavLink to="/Projects" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor
      ${ isActive ? "text-GoldColor" : "text-GreyColor" }` }> Projects </NavLink>

    <NavLink to="/Blog" className={({ isActive }) => `transition-all duration-1000 hover:text-GoldColor
    ${ isActive ? "text-GoldColor" : "text-GreyColor" }` }> Blog </NavLink>
    
    {/* Contact US Button */}
    <NavLink to="/Contactus" className="relative overflow-hidden group bg-GoldColor px-6 py-2 rounded-md  text-CardBgColor inline-block"> 
    
    {/* Background Layer jo slide karega */}
    <span className="absolute inset-0 w-0 bg-BodyColor transition-all duration-2000 linear group-hover:w-full"></span>
    
    {/* Text Layer jo background ke upar rahega */}
    <span className="relative z-10 group-hover:text-GoldColor transition-colors duration-1500"> 
      Contact Us </span> </NavLink>
      </nav>


      {/* Mobile-Version */}
  <nav className={`fixed inset-0 w-full h-screen z-9999 bg-BodyColor flex flex-col items-center justify-center gap-10 md:hidden transform transition-all duration-2000 linear font-bebas tracking-[1px]
    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
    
  {/* Close Button */}
  <div onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-GoldColor text-3xl"> ✕ </div>

  <NavLink to="/" onClick={() => setIsOpen(false)}
  className="text-3xl text-GreyColor"> Home </NavLink>

  <NavLink to="/Aboutus" onClick={() => setIsOpen(false)}
  className="text-3xl text-GreyColor"> About Us </NavLink>

  <NavLink to="/Projects" onClick={() => setIsOpen(false)}
  className="text-3xl text-GreyColor"> Projects </NavLink>

  <NavLink to="/Blog" onClick={() => setIsOpen(false)}
  className="text-3xl text-GreyColor"> Blog </NavLink>

  <NavLink to="/Contactus" onClick={() => setIsOpen(false)}
  className="bg-GoldColor text-BodyColor px-10 py-3 rounded-md text-2xl"> Contact Us </NavLink>
</nav>

<span onClick={() => setIsOpen(true)}
  className='flex md:hidden text-4xl text-GoldColor' > <GiHamburgerMenu /> </span>

    </header>
    </>)}