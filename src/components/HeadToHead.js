import React from "react";
import HeadCard from "./shared/HeadCard";
import Score from "./Score";

const HeadToHead = () => {
  return (
    <section className="my-20 sm:mx-8 " >
      <div className="flex_5 text-[gray] lg:text-[48px] text-[32px] font-[800] uppercase lg:py-12 ">
        <h2>head 2 head</h2>
      </div>

      <div className="hidden lg:flex justify-between items-center gap-4 w-full">
        <HeadCard />
        <Score />;
        <HeadCard />
      </div>

      <div className="lg:hidden flex_3 gap-4 w-full">
       
       <div className="flex justify-center gap-16 w-full">
          <HeadCard />
          <HeadCard /> 
       </div>
      
      <div className="flex_5 w-full">
         <Score />
      </div>
       
      </div>
    </section>
  );
};

export default HeadToHead;
