import { Heading } from "../Features/Heading.jsx";
import { Button } from "../Features/Button.jsx";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Input = ({ placeholder, type, className, name, required }) => {
  return (
    <div className="w-full mb-4">
      <input type={type} name={name} required={required} placeholder={placeholder}
      className={`${className} w-full bg-transparent border-b-2 border-ParaColor py-2 outline-none focus:border-white text-white placeholder:text-gray-500`} />
    </div>)}

export const ContactusSection = () => {
  
    const form = useRef();

    const ContactData = [
    
    { ContactHeading: "Address", ContactParagraph: "Misryal Road Rawalpindi" },
    
    { ContactHeading: "Mail", ContactParagraph: "Majidkhan.dev94@gmail.com" },
    
    { ContactHeading: "Phone", ContactParagraph: "+923411022489" },
  
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( "service_6neko24", "template_6jjnftp", form.current, "XK52tLMgYn3w5YTl9")
      .then( () => { alert("Email sent successfully!"); },
      (error) => { alert("Error: " + error.text)})}

  return (<>
      

      <section className="w-full min-h-screen flex flex-col lg:flex-row">
        
        {/* Left Side */}
        <div className="flex flex-1 justify-center items-center p-10">
          <div className="relative p-10 inline-block">
            <span className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-ParaColor"></span>

            <Heading text={"Contact Us"} className="text-white" />

            <span className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-ParaColor"></span>

            <div className="mt-5 text-ParaColor flex flex-col gap-3">
              {ContactData.map((item, index) => (
                <div key={index}>
                  <h1 className="text-white text-base font-semibold">
                    {item.ContactHeading}
                  </h1>

                  <p>{item.ContactParagraph}</p>
                </div> ))}
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex flex-1 justify-center items-center p-10">
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-md flex flex-col" >
            
            <Input name="name" placeholder="Name" type="text" required />
            <Input name="email" placeholder="Email" type="email" required />
            <Input name="address" placeholder="Address" type="text" required />
            <Input name="title" placeholder="Subject" type="text" required />
            <textarea name="message" placeholder="Message" required className="w-full bg-transparent border-b-2 border-ParaColor py-2 outline-none text-white" />

            <span className="mt-4 self-start">
              <Button type={"submit"} text={"Submit"} className="px-6 py-2 text-sm uppercase tracking-wider" />
            </span>
          </form>
        </div>
      </section>
    </>)}