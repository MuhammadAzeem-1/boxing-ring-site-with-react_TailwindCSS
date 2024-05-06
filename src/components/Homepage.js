import React from "react";
import Button from "./shared/Button";
import { PiCrownSimpleFill } from "react-icons/pi";
import image from "../assets/fighter1.png";
import homeImage from "../assets/fighterHome.png";

const Homepage = () => {
  return (
    <>
      <div className="relative" >

        <img src={homeImage} alt="background" className="absolute inset-0 pl-[0.2rem] xl:pl-[34rem]  w-[70rem] h-[20rem] sm:h-[38rem] xl:h-[38rem] object-cover" />
    
      <section className="relative background-image-home  flex_3 flex-col lg:flex-row sm:mx-[8rem] mx-[2rem]   flex-1">
        <section className="flex flex-col gap-4  mt-28	">
          <div>

            <h2 className="sm:text-[100px] text-[52px] Zurich-Bold font-extrabold text-[white] uppercase leading-[45px] sm:leading-[60px]">
              JOSHUA <spna className="text-[22px]">vs</spna> <br></br>
              <span className="text-[red]">NGANNOU</span>
            </h2>

          </div>

          <div className="flex_4 sm:flex-row flex-col sm:items-center gap-4 pt-12">

            <div className="px-4 py-2  text-[14px]  border border-[#d9b77c] rounded-[50px] text-white ">
              <p>WBO World Heavyweight championship</p>
            </div>
            
            <div className="px-4 py-2 text-[14px]  border border-[#d9b77c] rounded-[50px] text-white ">
              <p>WBC Diamond Title</p>
            </div>
          </div>

          <div className="pt-8 ">

            <p className="text-[#d9b77c] font-[800] sm:text-[16px] text-[14px]">
              MADISON SQUARE GARDEN, CHICAGI, US
            </p>

            <div>
              <p className="text-[white] font-[800] sm::text-[16px] text-[14px] pt-2">
                TUESDAT APR 30 2024{" "}
                <span className="h-4 w-[2px] text-[wheat] px-3">|</span> 16:9PST{" "}
                <span className="h-4 w-[2px] text-[wheat] px-3">|</span>19:9GST
              </p>
            </div>

          </div>

          <div className="flex_2 sm:gap-3 gap-4 flex-start lg:pt-8">
            <Button
              text={"Flight Details"}
              background="none"
              border={true}
              padding={4}
            />

            <Button
              text={"Buy Tickets"}
              border={false}
              padding={4}
              rounded={"rounded"}
            />
          </div>
        </section>

        <section className="relative flex flex-col lg:justify-end lg:items-end gap-[5rem] flex-1	mt-8 lg:mt-20">
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
      </section>
       </div>
    </>
  );
};

export default Homepage;
