import Vector from "../Componenets/Vector";
import vector from '../../assets/svgs/Vector.svg'
import facebook from '../../assets/svgs/facebook.svg'

import arrow from "../../assets/svgs/arw.svg";
import css from '../../assets/svgs/css.svg'
import thought from '../../assets/svgs/thought.svg'
import autodesk from '../../assets/svgs/autodesk.svg'

const About = () => {
  return (
    <div id="about" className="p-8 sm:p-48 relative">
      <div className="absolute inset-0 -z-10 [background-image:radial-gradient(636.66%_182.2%_at_51.46%_164.03%,_#CCFF02_22.4%,_rgba(89,_255,_205,_0)_65.1%,_rgba(22,_22,_22,_0)_100%)] blur-[34px]" />
      
      <div className="flex mb-8 sm:mb-12 justify-end gap-4">
        <div className="p-1 rounded-full border border-black inline-block">
          <img className="p-3 rounded-full invert w-6 h-6 sm:w-auto sm:h-auto" src={arrow} alt="" />
        </div>
        <p className="border border-black rounded-[40px] p-2 sm:p-3 text-sm sm:text-base">About</p>
      </div>
      
      <div className="text-center px-2 sm:px-0">
        <h1 className="leading-snug sm:leading-loose text-3xl sm:text-[78px] font-bold">
          I’ve been <span className="bg-black text-white rounded-2xl px-2">Developing</span><br />
          Websites since <span className="bg-black text-white rounded-2xl px-2">2013</span>
        </h1>
        <p className="text-sm sm:text-lg mt-4 max-w-md mx-auto">
          We start every new client interaction with an in-depth discovery call where <br className="hidden sm:block" />
          we get to know each other and recommend the best course of action.
        </p>
      </div>

      <div className="mt-12 sm:mt-20 flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center sm:justify-start items-center">
        <h3 className="text-xl sm:text-2xl font-bold w-full sm:w-[244px] text-center sm:text-left">Previously worked on</h3>
        <Vector image={vector} />
        <Vector image={facebook} />
        <Vector image={css} rotateDiv="rotate-[16.97deg]" />
        <Vector image={autodesk} />
        <Vector image={thought} />
      </div>
    </div>
  );
};
export default About;