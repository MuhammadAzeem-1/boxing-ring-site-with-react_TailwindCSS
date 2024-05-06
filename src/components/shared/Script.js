import React from "react";
import logo from "../../assets/yellow-logo.png";

const Script = ({transform}) => {
  return (
    <section className={`flex gap-6 relative header-padding overflow-hidden whitespace-nowrap `}>
      <div className="flex_1  gap-4">
        <img src={logo} alt="yellow Logo" className=" w-10" />
        <h2 className="text-[0.70rem] text-white font-extrabold  uppercase">What is Lorem opeum summary</h2>
      </div>

      <div className="pl-8  flex_1  gap-4">
        <img src={logo} alt="yellow Logo" className=" w-10" />
        <h2 className="text-[0.70rem] text-white font-extrabold uppercase relative ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </h2>
      </div>
    </section>
  );
};

export default Script;
