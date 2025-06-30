const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col rounded-3xl  p-6">
      <div className="p-8 flex flex-col md:flex-row relative">
        <div className="w-full md:w-2/5 flex flex-col justify-between">
          <div className="text-lime-400 font-semibold tracking-wide">
            DEVLOP.<span className="text-white">ME</span>
          </div>
        </div>
        <div className="w-full md:w-3/5 flex items-start">
          <h1 className="text-[3.5rem] md:text-[5rem] leading-tight select-none text-white">
            As you can
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-8 md:px-0">
        <div className="w-full md:w-2/5" />
        <div className="w-full md:w-3/5 flex flex-col md:flex-row justify-between gap-16 md:gap-20">
          <div className="flex flex-col space-y-2 max-w-xs text-sm md:text-base">
            <div className="text-gray-500 tracking-wide mb-2">Say hello</div>
            <a href="mailto:hello@devlop.me" className="hover:underline">HELL@DEVLOP.ME.COM</a>
            <a href="mailto:mahbubul@me.com" className="hover:underline">MAHBUBUL@ME.COM</a>
            <div className="text-gray-500 tracking-wide mt-6 mb-1">Call</div>
            <a href="tel:+784549498100" className="hover:underline">+784549 4981 00</a>
            <a href="tel:+88450100211" className="hover:underline">+8845 0100 211</a>
          </div>

          <div className="flex flex-col space-y-2 max-w-xs text-sm md:text-base">
            <div className="text-gray-500 tracking-wide mb-2">Menu</div>
            <a href="#" className="hover:underline">HOME</a>
            <a href="#" className="hover:underline">ABOUT</a>
            <a href="#" className="hover:underline">PORTFOLIO</a>
            <a href="#" className="hover:underline">BLOG</a>
          </div>

          <div className="flex flex-col space-y-2 max-w-xs text-sm md:text-base">
            <div className="text-gray-500 tracking-wide mb-2">Social</div>
            <a href="#" className="hover:underline">TWITTER</a>
            <a href="#" className="hover:underline">INSTAGRAM</a>
            <a href="#" className="hover:underline">FACEBOOK</a>
            <a href="#" className="hover:underline">BEHANCE</a>
            <a href="#" className="hover:underline">DRIBBBLE</a>
          </div>
        </div>
      </div>

      <footer className="flex flex-col md:flex-row justify-between text-gray-500 text-xs md:text-sm px-8 py-6 mt-10">
        <div className="w-full md:w-2/5 font-extrabold select-none text-2xl text-white mb-2 md:mb-0">BESNIK</div>
        <div className="w-full md:w-3/5 flex justify-between">
          <div className="text-center">© devlop.me 2022</div>
          <div className="space-x-2">
            <a href="#" className="hover:underline">PRIVACY</a> -
            <a href="#" className="hover:underline">TERMS</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
