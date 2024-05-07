import React from 'react'
import image from "../../assets/fighter1.png";
import { PiCrownSimpleFill } from "react-icons/pi";


const DeskTopSectionTwo = () => {
  return (
    <section className="relative flex flex-col lg:justify-end lg:items-end gap-[5rem] flex-1	mt-8 lg:mt-20 xl:mr-[6rem]">
    <div>
      <div className="flex flex-row lg:flex-col lg:justify-end bg-white sm:p-4 p-2  gap-4 rounded-[8px]   w-full">
        <div className="bg-[red] sm:px-8 sm:pt-6 pt-2 px-2 rounded-[8px] sm:w-[15rem] w-[5rem]  flex items-center justify-center">
          <img src={image} alt="fighter " className="w-[8rem]" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-12 sm:gap-2 justify-between sm:justify-start  py-4">
            <h2 className="text-[red] sm:text-[26px] text-[18px]  uppercase font-[800] sm:leading-6  leading-4">
              ANTHONY <br></br>JOSHUA
            </h2>
            <div className="flex">
              <PiCrownSimpleFill size={15} className="text-[wheat]" />
              <h2 className="text-black text-[36px]   uppercase font-[800] leading-6">
                SD10
              </h2>
            </div>
          </div>

          <div className="w-full h-[2px] bg-[wheat]"></div>
          <div className="flex sm:justify-between gap-2 text-[#d9b77c] sm:text-[black] items-center font-[800] sm:text-[22px] text-[16px] py-3">
            <p>92-90</p>
            <p>996-92</p>
            <p>96-91</p>
          </div>
        </div>
      </div>
    </div>

    <div className=" border border-[#d9b77c] grid grid-cols-2  rounded-[6px] ">
      <button className="lg:p-4 p-2 uppercase font-[700] text-white border-r-2 ">
        PREV
      </button>

      <button className="lg:p-4 p-2 uppercase font-[700] text-[red] ">
        NEXT
      </button>
    </div>
  </section>
)
}

export default DeskTopSectionTwo