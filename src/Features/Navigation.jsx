import { NavLink } from "react-router-dom";

export const Navigation = ({ to, text }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        inline-block text-base transition-all duration-600 linear text-ParaColor
        hover:text-white font-bold hover:-translate-x-1 hover:-translate-y-1
        ${ isActive ? "text-white" : "text-ParaColor" } `} > 
      {text}
    </NavLink>
  )}