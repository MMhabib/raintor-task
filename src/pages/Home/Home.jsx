import Navbar from "./Navbar";
import fb from '../../assets/svgs/fb.svg';
import twit from '../../assets/svgs/twit.svg';
import insta from '../../assets/svgs/insta.svg';
import bgimg from '../../assets/svgs/home.jpg';
import Button from "../Componenets/Button";
import call from '../../assets/svgs/call.svg'

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen px-4 sm:px-10 bg-no-repeat bg-[length:100%_100%] bg-[position:0px_0px] bg-[lightgray] text-black"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <Navbar />

      <h1 className="text-3xl sm:text-[74px] sm:leading-[90px] sm:w-[1128px] font-bold text-start mt-6">
        Trusted <span className="bg-black rounded-xl text-white px-2 inline-block align-middle">Partner</span> for Your Website <span className="bg-black rounded-xl text-white px-2 inline-block align-middle">Develop</span>.
      </h1>

      <div className="mt-10 sm:mt-14">
        <p className="text-base sm:text-lg text-start flex justify-center">
          Building the world’s best marketing websites for over a decade. <br className="hidden sm:block" />
          Your trusted partner for strategy, design, and dev.
        </p>

        <div className="flex flex-row sm:flex-col gap-4 sm:gap-6 ml-4 sm:ml-10 mt-4 sm:mt-0">
          <img src={twit} alt="Twitter" className="w-5 h-5 sm:w-6 sm:h-6" />
          <img src={insta} alt="Instagram" className="w-5 h-5 sm:w-6 sm:h-6" />
          <img src={fb} alt="Facebook" className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <p className="rotate-0 sm:rotate-270 w-fit absolute left-4 top-[85%] sm:top-[569px] text-sm sm:text-base">@williamrey</p>
      </div>

      <div className="flex justify-center mt-8 sm:mt-0">
        <Button iconSrc={call} text='Schedule a call' />
      </div>
    </div>
  );
};

export default Home;
