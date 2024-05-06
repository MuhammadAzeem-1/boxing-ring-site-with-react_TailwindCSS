import React from "react";
import image from "../assets/ring_img.png";

const History = () => {
  return (
    <section className="bg-[#060b12] lg:h-screen	">
      <section className=" mx-8 py-8 flex lg:justify-center justify-between  items-center">

        <div className="flex flex-col lg:w-[28%]">
          <h2 className="lg:text-[32px] text-[12px] font-[700] text-[#ebe0cc] uppercase">
            Dive into the
          </h2>

          <div className="flex flex-col lg:text-[66px] text-[18px] font-[800] text-white lg:leading-[70px] uppercase	">
            <h2>History </h2>
            <h2>of boxing</h2>
          </div>

          <p className="lg:text-[16px] text-[6px]  text-[#ebe0cc] lg:pt-4 pt-2 lg:leading-8 w-[80%]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal.
          </p>
          
        </div>

        <div>
          <img src={image} alt="ring" className="lg:w-[90%] w-[100%]" />
        </div>
      </section>
    </section>
  );
};

export default History;
