import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "../assets/comunityPic.png";
import logo from "../assets/logo.png";
import { comunityCardData, comunityData } from "../utils/Data";
import ComunityButtons from "./shared/ComunityButtons";

const Comunity = () => {
  return (
    <section className="flex_5 ">
      <div>
        <div className="py-12 md:flex md:justify-center">
          <h2 className="md:text-[48px] text-[20px] font-[700] text-[#292929] uppercase">
            community Engagement
          </h2>
        </div>

        <div className="sm:hidden block">
          <ComunityButtons />
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="w-full">
            {/* section a */}

            <div className="flex justify-center lg:justify-between">
              <img src={Image} alt="Fighter" className="w-[8rem]" />
              <img src={Image} alt="Fighter" className="w-[8rem]" />
            </div>

            <div className="flex justify-center flex-wrap w-full">
              <div className="flex-item left bg-[red] w-[10rem] lg:w-[17rem] rounded-tl-lg lg:rounded-s-lg flex gap-2 justify-center items-center text-[22px] text-white py-1 font-[800]">
                <h2>WIlDER</h2>
                <div className="w-3 h-3 bg-white text-black flex_5">
                  <IoIosArrowDown size={20} />
                </div>
              </div>

              <div className="flex-item middle bg-[white] w-[20rem] sm:w-[27rem] lg:w-[30rem]  flex gap-2 justify-center items-center text-[14px] xl:text-[18px] text-[black] py-1 font-[800]">
                <h2>12 Round ContextSuperFeatherweight</h2>
              </div>

              <div className="flex-item right bg-[red] w-[10rem] md:w-[15rem] rounded-tr-lg lg:rounded-r-lg flex gap-2 justify-center items-center text-[22px] text-white py-1 font-[800]">
                <h2>RAZA</h2>
                <div className="w-3 h-3 bg-white text-black flex_5">
                  <IoIosArrowDown size={20} />
                </div>
              </div>
            </div>

            <div className="flex justify-center flex-wrap w-full">
              <div className="w-[10rem]  lg:w-[17rem] flex-item left">
                
                <div className="flex_5 py-8 text-[22px] font-[700] text-white">
                  <h2>35-1-0</h2>
                </div>

                <div className="flex flex-col justify-start gap-4">
                  {comunityData.map((item) => (

                    <div key={item.id} className="grid grid-cols-2 gap-6 uppercase lg:text-[16px] md:text-[12px] text-[10px] font-[500]">
                      <h3 className=" text-[wheat]">
                        {item.title}
                      </h3>

                      <div className="flex justify-end items-end">

                          <h3 className=" text-white">
                        {item.item}
                      </h3>
                      </div>
                    
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[23rem] sm:w-[30rem] flex-item middle mx-4 sm:mx-0">
                <div className="flex_5">
                  <div className="comunity-gradient w-[20rem] sm:w-[24rem] mt-16 py-4 px-10 flex_5 flex-col ">

                    <div>
                      <h2 className="text-[22px] uppercase font-[700] text-white">
                        Wilder<span className="text-[red]"> VS </span>RAZA
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {comunityCardData.map((data) => (
                        <div key={data.id}>
                          <div className="flex gap-2 p-4">
                            <img src={logo} alt="logo" className="w-[2rem]" />

                            <h2 className="text-[22px] uppercase font-[700] text-white">
                              {data.percent}
                            </h2>
                          </div>

                          <h2 className="text-[14px] uppercase font-[600] text-white">
                            {data.website}
                          </h2>

                          <p className="text-[12px] text-blue-500">{data.reviews}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[10rem] lg:w-[15rem] xl:w-[17rem] flex-item right pl-4 lg:pl-0">
                <div className="flex_5 py-8">
                  <h2 className="text-[22px] font-[700] text-white">35-1-0</h2>
                </div>
                <div className="flex justify-start flex-col  gap-4">
                  {comunityData.map((item) => (

                    <div key={item.id} className="grid grid-cols-2 gap-6 uppercase lg:text-[16px] md:text-[12px] text-[10px] font-[500]">

                      <div className="flex items-end">
                        <h3 className="text-white">
                        {item.item}
                      </h3>
                      </div>

                       <h3 className="text-[wheat]">
                        {item.title}
                      </h3>
                      
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block">
          <ComunityButtons />
        </div>
      </div>
    </section>
  );
};

export default Comunity;
