export const MainHeading = ({text, className}) => {
  return(<>
  <h1 className={`text-[#181818] w-full hover:text-BottomBorder cursor-pointer font-bebas text-6xl md:text-9xl font-semibold  tracking-wider animate-slide-BottomtoTop  ${className}`}>
  {text}
  </h1>
  </>)}




export const CardHeading = ({text, className}) => {
  return(<>
<h1 className={`text-GoldColor text-2xl md:text-2xl font-semibold font-bebas tracking-widest  ${className}`}>
{text}
</h1>


  </>)}