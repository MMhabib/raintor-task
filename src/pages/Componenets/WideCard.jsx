

const ArrowIcon = () => (
    <svg 
        className="w-[22px] h-[15px]" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        viewBox="0 0 24 24"
    >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);


const WideCard = ({title, details, bgDIv='bg-black', bgp='bg-[#C5FFEE]', textcolor='text-white', titletext='text-black', rotate='rotate-0'}) => {
  return (
    
    <div className={`${bgDIv} rounded-3xl ${textcolor} flex flex-col p-6 md:p-10 lg:p-14 space-y-8 md:space-y-12 ${rotate}`}>
      
      
      <div className="flex flex-col md:flex-row md:justify-between items-start gap-4 md:gap-0">
        
        
        <p className={`text-lg md:text-xl ${titletext} rounded-full ${bgp} py-2 px-6 md:px-9`}>
          {title}
        </p>
        
       
        <div className="flex items-center space-x-2 cursor-pointer group">
          <ArrowIcon />
          <p className="underline transition-opacity duration-300 group-hover:opacity-70">Read more</p>
        </div>
      </div>
      
      
      <p className="text-start text-base md:text-lg">
       {details}
      </p>
    </div>
  );
};

export default WideCard;

