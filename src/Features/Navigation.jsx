import { NavLink } from "react-router-dom";

export const Navigation = ({ to, text }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        inline-block text-md transition-all duration-600 linear
        hover:text-GoldColor hover:-translate-x-1 hover:-translate-y-1 
        hover:[text-shadow:4px_4px_0px_#131314]
        ${ isActive 
           ? "text-GoldColor [text-shadow:3px_3px_0px_#131314] -translate-x-1 -translate-y-1" 
           : "text-NavColor" 
        }
      `}
    > 
      {text}
    </NavLink>
  );
};