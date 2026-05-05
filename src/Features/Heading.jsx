export const Heading = ({text, className}) => {
  return(<>

<h1 className={`text-CardBgColor hover:text-NavColor cursor-pointer font-oswald text-9xl font-semibold tracking-wider  ${className}`}>
{text}
</h1>


  </>)}