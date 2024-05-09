import React from "react";

const ComunityButtons = () => {
  return (
    <div className="sm:flex justify-center items-center my-4">
      <div className="bg-[#141414] flex justify-center gap-6 sm:rounded-full overflow-hidden text-white text-[14px] font-[600] uppercase p-2 ">
        <div className="bg-[red] rounded-3xl p-2">
          <h2>Explore the podcast</h2>
        </div>

        <div className="hover:bg-[red]  rounded-3xl p-2">
          <h2>boxing ranking</h2>
        </div>

        <div className="hover:bg-[red] rounded-3xl p-2 hidden sm:block">
          <h2>Most favourite fighters</h2>
        </div>
      </div>
    </div>
  );
};

export default ComunityButtons;
