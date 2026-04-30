import '../index.css';
import { NavLink } from 'react-router-dom'; 


export const Header = () => {
  return (<>
    
    <header className='h-20 bg-CardBgColor flex justify-between px-25 items-center'>
      <NavLink to="/" className='text-GreyColor text-5xl font-bebas tracking-[1px] hover:text-GoldColor animate-pulse'>Majid Khan</NavLink>
  
  <nav className="flex gap-10 items-center font-medium font-bebas text-2xl">
    <NavLink to="/" className={({isActive})=> isActive ? "text-GoldColor" : "text-GreyColor"}>Home</NavLink>
    <NavLink to="/Aboutus" className={({isActive})=> isActive ? "text-GoldColor" : "text-GreyColor"}>About Us</NavLink>
    <NavLink to="/Projects" className={({isActive})=> isActive ? "text-GoldColor" : "text-GreyColor"}>Projects</NavLink>
    <NavLink to="/Blog" className={({isActive})=> isActive ? "text-GoldColor" : "text-GreyColor"}>Blog</NavLink>
    <NavLink to="/Contactus" className={({ isActive }) => `bg-GoldColor px-6 py-2 rounded-md text-lg font-bebas tracking-[1px] transition-all duration-300 hover:bg-GreyColor`}> Contact Us </NavLink>
  </nav>
    </header>
    </>
  )
}