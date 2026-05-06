export const Paragraph = ({ text, className }) => {
  return (
    <>
      <p className={`text-ParaColor font-Paragraph tracking-wider leading-relaxed ${className}`}>
        {text}
      </p>
    </>)}
