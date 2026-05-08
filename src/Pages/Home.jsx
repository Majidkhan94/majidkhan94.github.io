import '../index.css';
import {Heading, BigHeading, SubHeading, CardHeading} from "../Features/Heading.jsx"
import {Paragraph} from "../Features/Paragraph.jsx"
import { Image, IconImage } from '../Features/Image.jsx';
import { Seperator } from '../Features/Seperator.jsx';
import { Card, Projectcard } from '../Features/Card.jsx';
import {Button} from "../Features/Button.jsx"
import { Input } from '../Features/Input.jsx';

export const Home = ()=>{
  return(<>
  
  {/* Hero_Section */}

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

{/* About_Section */}
<Seperator text={"About Us"}/>

<section className="flex gap-x-10 relative justify-center items-center pl-0 md:pl-20 text-white w-full h-screen">
  {/* <BigHeading text={"About US"} className={"absolute top-0 left-25"}/> */}
  <div className='flex flex-1 justify-center items-start flex-col gap-2'>
    <Heading text={".NET ARCHITECTURE"}/>
    <SubHeading text={"Backend & Enterprise Solutions"}/>
    <Paragraph text={"I specialize in building the high-performance of modern applications using ASP.NET Core and C#. My focus is on engineering secure, scalable RESTful APIs and complex database architectures that ensure long-term reliability and enterprise-grade stability."} className={"w-130 pb-3"} />
    <span className='w-130 flex flex-wrap gap-5'>

    <IconImage src={"../JavaScript.png"} text={"JS"} />
    <IconImage src={"../React_Js.png"} text={"React"} />
    <IconImage src={"../Tailwind_Css.png"} text={"Tailwind"} />
    <IconImage src={"../C_Sharp.png"} text={"C#"}  />
    <IconImage src={"../Dot_Net.png"} text={".Net"} />
    <IconImage src={"../SQL.png"} text={"SQL"} />

    </span>

  </div>
  
  <div className='flex flex-1 justify-center items-start flex-col gap-2'>
    <Heading text={"MODERN STACK"}/>
    <SubHeading text={"Dynamic Full-Stack & Seamless UX"}/>
    <Paragraph text={"Build fast and modern web applications using MongoDB, Express, React, and Node.js. I focus on creating interactive interfaces that are easy to use and look great. My goal is to combine smooth performance with a clean design to give users the best experience possible."} className={"w-130 pb-3"} />
  
    <span className='w-130 flex flex-wrap gap-5'>

    <IconImage src={"../JavaScript.png"} text={"JS"} />
    <IconImage src={"../React_Js.png"} text={"React"} />
    <IconImage src={"../Tailwind_Css.png"} text={"Tailwind"} />
    <IconImage src={"../Node.png"} text={"Node"} />
    <IconImage src={"../Express.png"} text={"Express"} />
    <IconImage src={"../Mongo_DB.png"} text={"Mongo"} />
    
    
    </span>
  
  
  </div>

</section>

{/* Technical Expertise Section */}
<Seperator text={"Technical Expertise"} />
<section className="flex gap-x-10 relative pt-15 pl-0 md:pl-20 text-white w-full h-screen justify-center items-center">
  {/* <BigHeading text={"Technical Expertise"} className={"absolute top-0 left-25"}/> */}
  
  <div className='w-full flex flex-wrap gap-15'>
  
  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>01</span>
    <Card CardHeadingText={".NET Development"} ParagraphText={"Architecting scalable backend logic and building robust web applications using ASP.NET Core."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>02</span>
    <Card CardHeadingText={"MERN Stack"} ParagraphText={"Developing modern full-stack applications with MongoDB, Express, React, and Node.js."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>03</span>
    <Card CardHeadingText={"API Engineering"} ParagraphText={"Designing and engineering high-performance RESTful APIs with C# for seamless data integration."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>04</span>
    <Card CardHeadingText={"Frontend Design"} ParagraphText={"Crafting interactive, responsive, and user-centric interfaces using React and modern CSS frameworks."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>05</span>
    <Card CardHeadingText={"Database Management"} ParagraphText={"Managing data structures across both Relational (SQL Server) and NoSQL (MongoDB) environments."}/>
  </div>

  <div className='relative w-85'>
    <span className='absolute -top-9 -right-7 text-7xl text-ParaColor/13 font-bold font-Heading'>06</span>
    <Card CardHeadingText={"CMS Solutions"} ParagraphText={"Building, customizing, and optimizing professional, content-driven websites using WordPress."}/>
  </div>

    </div>


</section>

{/* Project Section */}
<Seperator text={"Projects"}/>

<section className='flex w-full flex-wrap gap-y-4 p-10'>
  
  <div className='w-1/3'>
  <Projectcard src={"./TravelAgency.png"} to={"https://travelagency-orcin.vercel.app/"} ProjectHeadingText={"Travel Agency"} ProjectParagraphText={"High-performance travel landing page built with HTML, CSS, and JavaScript. It features a fully responsive design and smooth interactive elements to provide a premium booking experience." }/>
  </div>

  <div className='w-1/3'>
  <Projectcard src={"./Reactsphere.png"} to={"https://reactsphere.vercel.app/"} ProjectHeadingText={"React Sphere"} ProjectParagraphText={"Modern React-based food landing page featuring a dynamic component architecture. It delivers a fully responsive UI and seamless navigation to provide a premium restaurant browsing experience" }/>
  </div>

  <div className='w-1/3'>
  <Projectcard src={"./ReactShop.png"} to={"https://reactshop-two.vercel.app/"} ProjectHeadingText={"React Shop"} ProjectParagraphText={"E-commerce store built with React and Tailwind CSS. It offers a sleek product display and seamless shopping experience with a fully responsive layout to ensure crystal clear vision for customers on any device." }/>
  </div>

  <div className='w-1/3'>
  <Projectcard src={"./JSXPress.png"} to={"https://jsxpress.vercel.app/"} ProjectHeadingText={"JSXPress"} ProjectParagraphText={"Business Services platform built with React.js. It features a modular component structure to showcase innovative solutions, offering a responsive design and smooth navigation to enhance professional clients." }/>
  </div>

  <div className='w-1/3'>
  <Projectcard src={"./HomeLand.png"} to={"https://homeland-silk.vercel.app/"} ProjectHeadingText={"Home Land"} ProjectParagraphText={"Real Estate booking platform built with React.js. It allows users to browse and book apartments seamlessly, high-end display and a fully responsive interface designed for a modern housing experience." }/>
  </div>

  <div className='w-1/3'>
  <Projectcard src={"./Authenticationsystem.png"} to={"https://authenticationsystem-green.vercel.app/"} ProjectHeadingText={"Authentication System"} ProjectParagraphText={"Full Stack Authentication System developed using the MERN stack. It features secure JWT, password encryption with Bcrypt, and seamless profile management." }/>
  </div>


  
  
  
  
</section>


{/* ContactUs Section */}
<Seperator text={"Contact Us"} />

<section className='w-full h-screen flex'>
  <div className='flex flex-1 justify-center items-center'>
    <div className="relative p-10 inline-block">
      <span className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-ParaColor"></span>
        <Heading text={"Contact Us"} className="text-white" />
      <span className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-ParaColor"></span>
  <div className="mt-5 text-ParaColor flex flex-col gap-3">
    <span>
    <h1 className="text-white text-base font-semibold">Address</h1>
    <p>Misryal Road Rawalpindi</p>
    </span>
    <span>
    <h1 className="text-white text-base font-semibold">Mail</h1>
    <p>Majidkhan.dev94@gmail.com</p>
    </span>
    <span>
    <h1 className="text-white text-base font-semibold">Phone</h1>
    <p>+923411022489</p>
    </span>
  </div>
</div>
</div>


<div className='flex flex-1 justify-center items-center h-300px p-10'>
  <div className='w-full max-w-md flex flex-col'> 
    <Input label="Name" placeholder="Name" />
    <Input label="Email" placeholder="Email" type="email" />
    <Input label="Email" placeholder="Address" type="text" />
    <Input label="Email" placeholder="Message" type="text" />
    <span className="mt-4 self-start">
       <Button text={"Submit"} className="px-6 py-2 text-sm uppercase tracking-wider" />
    </span>
  </div>
</div>




</section>







  </>)}