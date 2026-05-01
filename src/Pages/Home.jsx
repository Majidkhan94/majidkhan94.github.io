import '../index.css';
import { NavLink } from 'react-router-dom';
import {PrimaryButton, SecondaryButton} from "../Features/Button.jsx"


export const Home = ()=>{
  return(<>
  <section className='w-full h-55 md:h-screen bg-[url("/Hero.png")] bg-contain bg-right bg-no-repeat'>
  <div className="flex flex-col w-180 h-full items-start justify-center pl-20">
    <h1 className="text-GoldColor text-6xl font-bold">Full Stack Developer</h1>
    <p className="text-GreyColor text-md font-medium pt-5 pb-12">Building high-quality web applications using ASP.NET Core and MERN stack. Focused on clean code and seamless user experiences that solve real-world problems.</p>
  

<div>
    <PrimaryButton to={"/XYZ"} text={"View Projects"} />
    <SecondaryButton to={"/XYZ"} text={"Contact Me"} />

</div>
</div>
</section> 


  </>)}