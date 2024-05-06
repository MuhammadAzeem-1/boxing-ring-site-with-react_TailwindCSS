import React from 'react'
import logo from "../../assets/yellow-logo.png";
import apple from "../../assets/apple.png"
import google from "../../assets/google.png"

const FooterOne = () => {
  return (
    <div className="flex flex-col lg:flex-row xl:gap-[15rem]  py-20 border-y-2 border-[gray]">
    <div className="flex flex-col lg:flex-row lg:items-center gap-16">
      <img src={logo} alt="logo" className="w-[8rem]"/>

      <p className="text-[16px] font-[400] text-white lg:w-[33rem] ">
        St is a long established fact that a reader will be distracted  by
        the readable  content of a page when looking at its layout.
      </p>
    </div>

    <div className="flex-col items-start">

      <h2 className="text-[16px] font-[600] text-[red] uppercase">download our app</h2>

      <div className="flex pt-4 gap-4">
        <img src={google} alt="google" className="w-[8rem] h-[3rem]"/>
        <img src={apple} alt="apple" className="w-[8rem] h-[3rem]"/>
      </div>
      
    </div> 
  </div>
  )
}

export default FooterOne