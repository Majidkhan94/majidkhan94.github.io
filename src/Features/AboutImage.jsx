export const AboutImage = ({src, text, className}) =>{
    return(<>
    <div className='relative group w-fit'>  
    <img className='w-12 grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 cursor-pointer' src={src} />

   <span className={`absolute -bottom-7 text-center left-6 -translate-x-1/2 text-sm w-full font-bold font-oswald tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-1000 ${className}`}>
      {text}
    </span>
</div>
  </>)}