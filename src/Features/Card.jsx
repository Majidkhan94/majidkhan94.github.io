import { CardHeading } from "./Heading.jsx";
import { CardParagraph } from "./Paragraph.jsx";


export const Card = ({HeadingText, ParagraphText}) =>{
  
  return(<>
    
   <div className="flex flex-col gap-3 bg-CardBgColor/20 p-6 rounded-lg border border-transparent 
                hover:border-GoldColor hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                hover:-translate-y-2 hover:scale-[1.02] 
                transition-all duration-1000 linear cursor-pointer">
   
      <CardHeading text = {HeadingText} />
      
      {/* Oswald font used for paragraphs */}
      <CardParagraph text={ParagraphText} />
    </div>


    </>)}


