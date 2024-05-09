import React from "react";
import Button from "./shared/Button";
import { Topfighter } from "../utils/Data";
import TopKnoutoutscard from "./shared/TopKnoutoutscard";

const Topknockouts = () => {
  return (
    <section className="bg-[#1c1c1c]">
      <div className="top-knockout-gradient">
        {/* <section className="sm:absolute sm:z-[1] hidden">
          <h2 className="uppercase font-bold text-[#1b1b1b]  text-[120px]">
            lorem discover never seen before footage & fights lorem lorem
          </h2>
        </section> */}

        <section className="flex flex-col justify-between mx-6 lg:mx-32 relative z-[10] gap-24">
          <div className="flex items-center justify-between pt-20">
            <h2 className="lg:text-[60px] text-[32px] text-white font-[700] uppercase">Top Knockouts</h2>
             
             <div className="hidden lg:block">
                <Button text={"View All Knockouts"} rounded={"rounded-md"}/>
             </div>
            
          </div>

          <div className="flex gap-16 overflow-hidden">
            {Topfighter.map((item, index) =>{
                return (
                    <TopKnoutoutscard item={item} index={index}/>
                )
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Topknockouts;
