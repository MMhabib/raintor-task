


const Button = ({ iconSrc, text }) => {
  return (
    <div className="border flex items-center gap-2 rounded-[40px] w-fit  cursor-pointer">
      {iconSrc && (
        <img className="p-2 border rounded-full w-10 h-10 object-contain" src={iconSrc} alt="icon" />
      )}
      <p className="text-sm sm:text-base font-medium p-4">{text}</p>
    </div>
  );
};

export default Button;
