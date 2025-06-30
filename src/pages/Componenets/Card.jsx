import reacti from '../../assets/React.svg'

const Card = ({ rotate = "rotate-0", title = "Default Title" }) => {
    return (
       <div className={`card  h-[365px] bg-[#FFFFFF14] card-lg text-white rounded-4xl ${rotate} `}>
  <div className='p-4'>
    <img className="w-24 h-24 mb-8" src={reacti} alt="" />
  <div className="card-body p-0 mt-4 space-y-5">
    <h2 className="card-title text-3xl m-0 ">{title}</h2>
    <p className='text-start mt-5' >Duis aute irure dolor inbr
        <br /> reprehenderit in  voluptate. Ut <br /> enim ad minim veniam, quis</p>
  </div>
  </div>
</div>



    );
};

export default Card;