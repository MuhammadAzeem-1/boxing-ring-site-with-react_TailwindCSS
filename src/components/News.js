import React from "react";
import Button from "./shared/Button";
import { newsCard } from "../utils/Data";
import NewsCard from "./shared/NewsCard";

const News = () => {
  return (
    <section className="flex_3 sm:flex-row sm:gap-36 gap-20  lg:ml-[12rem] sm:ml-[6rem] ml-[1rem] sm:mt-20 overflow-hidden 	">
      <div className="flex_4 flex-col gap-[12rem]">
        <div>
          <h2 className="font-[800] sm:text-[60px] text-[45px] text-[gray]">
            WHAT'S ON?
          </h2>

          <h4 className="font-[600] sm:text-[36px] text-[24px] text-[#d9b77c]">
            BREAKING DOWN
          </h4>

          <div className="block sm:hidden uppercase font-[600] sm:text-[36px] text-[24px] text-[#d9b77c]">
            <h4>The Ringside</h4>
            <h4 className="text-[18px]">Action and</h4>
            <h4 className=" text-[18px] opacity-10	">champion</h4>
          </div>
        </div>

        <div className="hidden sm:block">
          <Button text="View all News" rounded={"rounded-md"} />
        </div>
      </div>

      <div className="flex gap-4 pl-80 sm:pl-0">
        
        {newsCard.map((items) => {
          return <NewsCard key={items.id} items={items} />;
        })}

        <div className="bg-[red] w-20 h-[40rem]"></div>
      </div>
    </section>
  );
};

export default News;
