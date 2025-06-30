import arrowgroup from '../../assets/svgs/doublearrow.svg';
import arrow from '../../assets/svgs/arw.svg';
import Card from '../Componenets/Card';

const Skills = () => {
  return (
    <div className="p-6 sm:p-8 md:p-10 bg-black rounded-[40px] text-white">
      <div className="flex flex-col sm:flex-row sm:items-center  mb-10">
        <img className="border border-white rounded-full p-4 w-12 h-12" src={arrow} alt="" />
        <p className="border border-white rounded-[40px] px-4 py-2 text-sm sm:text-base sm:w-fit">why choose me</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-snug w-full lg:max-w-[540px]">
          My Extensive List of Skills
        </h1>

        <div className="space-y-6 w-full lg:max-w-[510px]">
          <p className="border-b-2 border-white pb-6 sm:pb-8 text-base sm:text-lg">
            Building the world's best marketing. Your trusted partner for strategy, design, and dev.
          </p>
          <div className="flex justify-end">
            <img 
  src={arrowgroup} 
  alt="" 
  className="w-10 sm:w-12 md:w-16 lg:w-20 xl:w-24" 
/>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        <Card title="Html & css" />
        <Card title="Javascript" rotate="rotate-[6.737deg]" />
        <Card title="Webflow" />
      </div>
    </div>
  );
};

export default Skills;
