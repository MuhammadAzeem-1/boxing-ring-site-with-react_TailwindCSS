import React from "react";

const TopCards = ({item}) => {
  return (
    <section className="card-top-gradient h-[29rem] lg:w-[23rem] w-[20rem] rounded-md pl-4 pt-4">
      <div className="background-image-top">
        <div className="w-16 p-1 border-2 flex justify-center border-white rounded-2xl text-white text-[12px] uppercase">
          <p>follow</p>
        </div>

        <div className="pt-[21rem] w-[23rem] text-[32px] leading-9 text-white font-[800] uppercase">
          <h2>{item.firstName}</h2>
          <h2>{item.lastName}</h2>
        </div>
      </div>
    </section>
  );
};

export default TopCards;
