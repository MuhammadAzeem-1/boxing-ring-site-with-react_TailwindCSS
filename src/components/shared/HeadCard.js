import React from "react";
import image from "../../assets/f7.png";
import Button from "./Button";

const HeadCard = () => {
  return (
    <section className="w-[10rem] sm:w-[16rem] lg:w-[25%]">
      <section className="card-gradient-a  ">
        <div className="background-image">
          <div className="pt-[15rem] sm:pt-[22rem] lg:pt-[21rem] pl-[1rem] font-[800] xl:text-[60px] uppercase text-[26px] sm:text-[40px] flex flex-col justify-center items-center lg:leading-[58px]">
            <h2 className="  text-[#ffffff]">Deontay</h2>

            <h2 className=" text-red-700  ">wilder</h2>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center pt-4">
        <button
          className={`sm:py-3 lg:px-4 py-2 px-2 uppercase text-[12px] text-white font-bold border border-[#d9b77c]	 rounded-[6px] `}
        >
          change fighters
        </button>
      </section>
    </section>
  );
};

export default HeadCard;
