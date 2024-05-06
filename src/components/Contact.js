import React from "react";
import { HiMiniSignal } from "react-icons/hi2";
import { contactSection } from "../utils/Data";
import Button from "./shared/Button";

const Contact = () => {
  return (
    <>
      <section className="background-image-boxer flex ">
        <div className="w-[70%] hidden xl:block"></div>

        <div className="flex flex-col justify-center  xl:w-[30%] w-[70%] ml-8 xl:ml-0 pt-[20rem] lg:pt-0">
               <div className="sm:text-[rgb(128,128,128)] text-white lg:text-[54px] text-[40px] uppercase font-[700] lg:leading-[60px] leading-[45px]">
                <h2>become</h2>
                <h2>a boxer</h2>
              </div>
              
          {contactSection.map((item) => (
            <>
           
              <div key={item.id} className="flex_2 gap-4 text-white pt-8">
                {item.icons}

                <p className="xl:w-[15rem] w-[20rem] text-[16px] font-[400] leading-5 capitalize" >
                  {item.text}
                </p>
              </div>
            </>
          ))}
 
        <div className="my-8">
            <Button text={"join us now test"} border={false} rounded={"rounded-md"}/>
        </div>
          
        </div>
      </section>
    </>
  );
};

export default Contact;
