import React from 'react';

const Vector = ({ image, rotateDiv = "rotate-0" }) => {
  return (
    <div
      className={`w-[276px] h-[90px] border rounded-[45px] flex justify-center items-center ${rotateDiv}`}
    >
      <img src={image} alt="" className="rotate-0" />
    </div>
  );
};

export default Vector;