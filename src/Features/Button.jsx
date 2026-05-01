import { NavLink } from "react-router-dom";
import '../index.css';

export const PrimaryButton = ({ text, to }) => {
  return (<>
 <NavLink 
      to={to} 
      className="px-6 py-3 rounded-md font-medium text-md inline-block
                 border-2 border-GoldColor text-GoldColor bg-transparent
                 mr-3 transition-all duration-300 ease-in-out
                 hover:-translate-x-2 hover:-translate-y-2
                 hover:shadow-[4px_4px_0px_0px_rgba(255,215,0,1)]
                 active:translate-x-0 active:translate-y-0 active:shadow-none"
    > 
      {text}
    </NavLink> 
  </>)}
export const SecondaryButton = ({ text, to }) => {
  return (<>
  <NavLink 
      to={to} 
      className="relative px-8 py-3 rounded-md font-bold text-lg inline-block
                 border-2 border-GoldColor text-GoldColor bg-transparent
                 transition-all duration-300 ease-in-out
                 hover:-translate-x-2 hover:-translate-y-2
                 hover:shadow-[4px_4px_0px_0px_rgba(255,215,0,1)]
                 active:translate-x-0 active:translate-y-0 active:shadow-none"
    > 
      {text}
    </NavLink>  
  </>)}

