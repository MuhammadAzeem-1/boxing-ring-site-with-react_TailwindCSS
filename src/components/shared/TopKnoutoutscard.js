import React from "react";

const TopKnoutoutscard = ({item, index}) => {
  return (
    <section className={`h-[29rem] lg:w-[23rem] sm:w-[20rem] w-[22rem] rounded-md ${index > 1 ? "hidden md:block": ``}`}>
      <div className="background-image-topknokouts flex flex-col justify-between p-4">
        <div className="w-16 p-1 border-2 flex justify-center border-white rounded-2xl text-white text-[12px] uppercase">
          <p>follow</p>
        </div>

        <div className="flex items-center sm:gap-8 gap-2 justify-between  sm:w-[21rem] w-[19rem] sm:text-[28px] text-[18px] leading-9 text-white font-[800] uppercase">
          <h2>{item.firstName} loren mkhadf dasds</h2>
          <h2 className="flex justify-center items-center sm:w-32 w-24 h-16  bg-red-600 text-[22px] rounded-xl">{index + 1}</h2>
        </div>
      </div>
    </section>
  );
};

export default TopKnoutoutscard;
