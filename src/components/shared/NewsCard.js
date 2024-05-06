import React from "react";
import { BiLike } from "react-icons/bi";

const NewsCard = ({ items }) => {
  return (
    <div className="rounded flex flex-col  gap-4 w-[18rem]">
      <div className="relative">
        <img
          className="rounded-xl gray-image "
          src={items.image}
          alt="player pic"
        />

        <div className="flex items-center gap-2  absolute text-xs top-0 right-0 text-black bg-[white] px-1 py-1 mt-3 mr-3 rounded-sm">
          <p>12</p>
          <BiLike size={20} />
        </div>
      </div>
      <div className=" py-2  w-[18rem]">
        <div className="flex_5 border border-[red] bg-[#171717] w-12 rounded-xl text-[12px] text-white px-2 py-1">
          News
        </div>
        <h1 className="uppercase sm:block font-[700] text-[18px] text-white pt-3">
          {items.title}
        </h1>
        <p className="text-[gray] pt-2">{items.year}</p>
      </div>
    </div>
  );
};

export default NewsCard;
