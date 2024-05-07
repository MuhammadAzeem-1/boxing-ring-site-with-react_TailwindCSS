import React from "react";
import Button from "./shared/Button";
import TopCards from "./shared/TopCards";
import { Topfighter } from "../utils/Data";

const TopFighters = () => {
  return (
    <section className="bg-[#1c1c1c] ">
      <section className="py-20 lg:mx-52 mx-8">

        <div className="flex justify-between items-center">
          
          <h2 className=" lg:text-[52px] text-[36px] font-[800] uppercase lg:text-white text-[#3a3a3a]">Top Fight<span className="text-[#3a3a3a]">ers</span> </h2>

          <div className="hidden lg:block">
            <Button
            text="view all fighters"
            border={false}
            rounded="rounded-md"
          />
          </div>
          
        </div>

        <div className="lg:mt-20 mt-8  flex gap-4 overflow-hidden">

            {Topfighter.map((item) => {
                return (
                   <TopCards item={item}/> 
                )
            })}
            
        </div>
        
        <div className="lg:hidden  flex justify-center mt-8">
            <Button
            text="view all fighters"
            border={false}
            rounded="rounded-md"
          />
          </div>
      </section>
    </section>
  );
};

export default TopFighters;
