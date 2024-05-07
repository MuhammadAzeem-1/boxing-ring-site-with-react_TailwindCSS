import React from "react";
import Button from "./shared/Button";
import Image from "../assets/topPic.png";
import Image1 from "../assets/topPics.png";

const TopStories = () => {
  return (
    <section className="bg-[#0c0c0c]">
      <div className="ml-8 xl:ml-52 flex justify-between flex-col xl:flex-row">
        <div className="w-[90%] xl:w-[30%] pt-20">
          <h2 className="sm:text-[62px] text-[48px]  font-[700] text-[#1c1c1c]">Top Stories</h2>
          <div className="hidden xl:block">
            <Button
              text="News, Heavyweight, Personalized"
              rounded={"rounded-3xl"}
            />
          </div>

          <div className="hidden xl:block pt-[13rem]">
            <Button text="explore the story" rounded={"rounded-md"} />
          </div>
        </div>

        <div>
          <img
            src={Image}
            alt="fight in ring"
            className="h-[20rem] sm:h-[30rem] w-[90%] xl:w-[90%]"
          />
        </div>
      </div>

      <div className="ml-8 xl:ml-52 flex gap-4 overflow-hidden pt-6">
        <img src={Image1} alt="fighter card" className="w-[18rem] rounded-xl" />
        <img src={Image1} alt="fighter card" className="w-[18rem] rounded-xl" />
        <img src={Image1} alt="fighter card" className="w-[18rem] rounded-xl" />
        <img src={Image1} alt="fighter card" className="w-[18rem] rounded-xl" />
      </div>
    </section>
  );
};

export default TopStories;
