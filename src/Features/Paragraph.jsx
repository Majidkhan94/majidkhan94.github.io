export const MainParagraph = ({ text, className }) => {
  return (
    <>
      <p className={`text-NavColor text-sm md:text-lg font-oswald tracking-wider leading-relaxed ${className}`}>
        {text}
      </p>
    </>)}


export const CardParagraph = ({ text, className }) => {
  return (
    <>
      <p className={`text-NavColor text-sm md:text-base font-oswald leading-relaxed ${className}`}>
        {text}
      </p>
    </>)}