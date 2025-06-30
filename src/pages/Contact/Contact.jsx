import arrow from "../../assets/svgs/arw.svg";
import Button from "../Componenets/Button";
import ContactForm from "./ContactForm";
import icon from '../../assets/svgs/call.svg'

const Contact = () => {
  return (
    <div
      id="contact"
      className="grid grid-cols-1 sm:grid-cols-5 gap-10 sm:gap-20 p-6 py-16 h-auto sm:h-screen items-center relative"
    >
      <div className="absolute inset-0 -z-10 [background-image:radial-gradient(636.66%_182.2%_at_51.46%_164.03%,_#CCFF02_22.4%,_rgba(89,_255,_205,_0)_65.1%,_rgba(22,_22,_22,_0)_100%)] blur-[34px]" />

      <div className="col-span-1 sm:col-span-3 space-y-6">
        <div className="flex mb-8 sm:mb-12 items-center ">
          <div className="p-1 rounded-full border border-black inline-block">
            <img className="p-2 rounded-full invert w-6 h-6 sm:w-auto sm:h-auto" src={arrow} alt="" />
          </div>
          <p className="border border-black rounded-[40px] p-2 sm:p-3 text-sm sm:text-base">Contact</p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-[78px] font-bold leading-snug sm:leading-tight">
            Interested in <br />
            <span className="bg-black text-white rounded-2xl px-2">work</span> together?
          </h1>
          <p className="text-sm sm:text-base">
            We start every new client interaction with an in-depth discovery <br className="hidden sm:block" />
            call where we get to know each other
          </p>
          <Button iconSrc={icon} text={"Schedule a Call"} />
        </div>
      </div>

      <div className="col-span-1 sm:col-span-2 mt-10 sm:mt-0">
        <ContactForm />
      </div>
    </div>
  );
};
export default Contact;
