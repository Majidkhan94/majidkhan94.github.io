export const Input = ({ placeholder, type, className }) => {
  return (
    <div className="w-full mb-4">
      <input 
        type={type}
        placeholder={placeholder}
        className={`${className} w-full bg-transparent border-b-2 border-ParaColor py-2 outline-none focus:border-white
        text-white focus placeholder:text-gray-500`}
      />
    </div>
  );
};