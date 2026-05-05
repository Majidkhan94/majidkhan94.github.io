import { NavLink } from "react-router-dom";
import '../index.css';

export const PrimaryButton = ({ text, to }) => {
  return (<>
<NavLink to={to} 
  className="px-4 py-2 rounded-md font-medium text-lg tracking-wider inline-block border-2 border-GoldColor text-BodyColor bg-GoldColor mr-3 transition-all duration-600 linear hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_#706420] active:translate-x-0 active:translate-y-0 active:shadow-none"> 
  {text}

</NavLink>
  </>)}


export const SecondaryButton = ({ text, to }) => {
  return (<>
  <NavLink to={to} 
  className="px-4 py-2 rounded-md font-medium text-lg tracking-wider inline-block border-2 border-NavColor text-NavColor bg-transparent mr-3 transition-all duration-600 linear hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[6px_6px_0px_0px_#d1d5db] active:translate-x-0 active:translate-y-0 active:shadow-none"> 
  {text}

</NavLink>  
  </>)}

