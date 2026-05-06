import { NavLink } from "react-router-dom";
import '../index.css';

export const Button = ({ text, to, onClick }) => {
  return (<>
<NavLink to={to}
  onClick = {onClick} 
  className="px-5 py-2 rounded-md font-semibold font-Paragraph text-base tracking-wider inline-block border border-ParaColor text-ParaColor mr-3 transition-all duration-600 linear hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[3px_3px_0px_0px_#9c9c9c] active:translate-x-0 active:translate-y-0 active:shadow-none"> 
  {text}

</NavLink>
  </>)}
