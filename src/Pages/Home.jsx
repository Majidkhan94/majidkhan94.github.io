import '../index.css';
import {Heading} from "../Features/Heading.jsx"
import {Paragraph} from "../Features/Paragraph.jsx"
import { Image } from '../Features/Image.jsx';
import { Button } from '../Features/Button.jsx';
import { Seperator } from '../Features/Seperator.jsx';

export const Home = ()=>{
  return(<>
<section className='flex flex-col-reverse md:flex-row w-full h-fit md:h-screen pl-0 md:pl-30 '>
  <div className='flex flex-1 flex-col gap-6 justify-center text-center md:text-left'>
    <span> <Heading text={"Full Stack Developer"}/> </span>
    <span className='w-full md:w-140'>
      <Paragraph text={"Building high-quality web applications using ASP.NET Core and MERN stack. Focused on clean code and seamless user experiences that solve real-world problems."}/>
    </span>
    <span>
    <Button to={"/Projects"} text={"View Projects"}/>
    <Button to={"/Contactus"} text={"Contact Us"}/>
    </span>
  </div>
  <div className='flex flex-1 justify-center'>
    <Image src={"../HeroImage.png"} />
  </div>
</section>

<Seperator text={"About Us"}/>




  </>)}