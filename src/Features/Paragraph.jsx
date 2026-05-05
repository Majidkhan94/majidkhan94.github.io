export const Paragraph = ({ text, className }) => {
  return (
    <>
      <p className={`text-NavColor text-sm md:text-lg font-oswald tracking-widest ${className}`}>
        {text}
      </p>
    </>)}