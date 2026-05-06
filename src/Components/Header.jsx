import '../index.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Navigation } from '../Features/Navigation';
import { Button } from '../Features/Button';


export const Header = ()=>{
  const [isOpen, setIsOpen] = useState(false);
  return (<>
    
      <header className='h-20 bg-LightColor flex justify-between items-center p-12 md:px-25'>
      
      {/* Logo */}
      <span>
      <NavLink to="/"><img className='w-15' src="/Logo.png" /></NavLink>
      </span>

      {/* PC-Version Menu */}
      <nav className="md:flex gap-13 items-center font-Paragraph text-lg tracking-[1px] hidden">
    
        <Navigation to={"/"} text={"Home"}/>
        <Navigation to={"/Aboutus"} text={"About Us"}/>
        <Navigation to={"/Projects"} text={"Projects"}/>
        <Navigation to={"/Blog"} text={"Blog"}/>
        <Button to={"/Contactus"} text={"Contact"}/>

      </nav>

{/* Mobile-Version */}
  <nav className={`fixed inset-0 w-full h-screen z-9999 bg-BgColor flex flex-col items-center justify-center gap-10 md:hidden transform transition-all duration-2000 linear font-Paragraph tracking-[1px]
    ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
    
  {/* Close Button */}
  <div onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-ParaColor text-3xl"> ✕ </div>

  <NavLink to="/" onClick={() => setIsOpen(false)}
  className="text-3xl text-ParaColor"> Home </NavLink>

  <NavLink to="/Aboutus" onClick={() => setIsOpen(false)}
  className="text-3xl text-ParaColor"> About Us </NavLink>

  <NavLink to="/Projects" onClick={() => setIsOpen(false)}
  className="text-3xl text-ParaColor"> Projects </NavLink>

  <NavLink to="/Blog" onClick={() => setIsOpen(false)}
  className="text-3xl text-ParaColor"> Blog </NavLink>

  <Button to={"/Contactus"} text={"Contact"} onClick={() => setIsOpen(false)} />
  
</nav>

<span onClick={() => setIsOpen(true)}
  className='flex md:hidden text-4xl text-ParaColor' > <GiHamburgerMenu /> </span>

      </header>

    </>)}