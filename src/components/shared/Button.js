import React from "react";

const Button = ({ text, background, padding, border, rounded }) => {

  return (
    <button
      className={
        !border
          ? `py-3 px-[20px] uppercase ${rounded}  text-white text-[16px] font-bold    bg-[#f92a24] `
          : `py-3 px-${padding} uppercase text-white font-bold  bg-[${background}] border border-[#d9b77c]	 rounded-[6px] `
      }
    >
      {text}
    </button>
  );
};

export default Button;
