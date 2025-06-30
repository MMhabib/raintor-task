import arrow from "../../assets/svgs/arw.svg";
import WideCard from "../Componenets/WideCard";

const Work = () => {
    return (
        <div className="bg-[#141414] rounded-[40px] text-white p-4 sm:p-16">
      <div className="flex  sm:flex-row mb-8 sm:mb-12 items-center">
        <img className="border border-white rounded-full p-2 sm:p-4 mb-4 sm:mb-0" src={arrow} alt="" />
        <p className="border border-white rounded-[40px] p-2 sm:p-3 text-sm sm:text-base">Work Process</p>
        <h1 className="sm:ml-96 text-3xl sm:text-6xl font-bold text-center sm:text-left">My Work Process</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <WideCard title="Discovery" details="We start every new client interaction
with an in-depth discovery call where
we get to know each other, discuss
your current and future objectives,
and recommend the best course of
action." />
        <WideCard title="Strategy" rotate="rotate-[3.854deg]" bgDIv="bg-[#C5FF41] " textcolor="text-black" bgp="bg-black" titletext="text-white" details="Every end-to-end project of ours
begins with a tEspoke pre-build
strateu. From brand ID consultation
to in-depth ccxle reviews we're here
to set the stage for success." />
        <WideCard title="Design" details="After we have a comprehensive
understanding of your brand, we'll be
ready to move onto design. Each page
or will be designed, reviewed,
and given your stamp of approval." />
        <WideCard title="Build" details="Whether we've just finished
designing your new site or you're
handing off finished designs for us to
develop in Webflow, we're here to
apply our trusted development
process to your project." />
      </div>
    </div>
    );
};

export default Work;
