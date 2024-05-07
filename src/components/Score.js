import React from "react";
import { fightData } from "../utils/Data";

const Score = () => {
  return (
    <div className="lg:w-[40%] w-full">
      <div className="flex justify-center items-start flex-col pl-12 sm:pl-36 lg:pl-0">
        {fightData.map((item) => {
          return (
            <div className=" grid grid-cols-3 sm:gap-[10rem] xl:gap-[17rem] gap-[7rem] font-[800] lg:text-[18px] text-[12px] uppercase w-[40%] py-2">
              <h2 className="text-white w-[5rem]">{item.firstFighter}</h2>
              <div className="flex justify-center items-center pl-8 sm:pl-8">
                <h2 className="text-[#d9b77c]">{item.title}</h2>
              </div>
              <h2 className="text-white w-[5rem] flex justify-end">{item.secondFighter}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Score;
