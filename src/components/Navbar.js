import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiFallingStar } from "react-icons/gi";
import { CiGlobe } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { navItems1, navItems2 } from "../utils/Data";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <nav>
      <section className="text-white justify-center  items-center pl-[2rem] xl:pr-3 gap-[3rem] hidden lg:flex">
        <div>
          <img src={logo} alt="logo" className="w-[5.5rem]" />
        </div>

        <div className="flex_2 gap-4">
          {navItems1.map((item) => {
            return (
              <ul key={item.id}>
                <li className="font-bold uppercase text-[8px] lg:text-[10px] xl:text-[12px] cursor-pointer">
                  {item.title}
                </li>
              </ul>
            );
          })}
          <div className="h-5 w-[0.5px] bg-white"></div>
          {navItems2.map((item) => {
            return (
              <ul key={item.id}>
                <li className="font-bold uppercase text-[8px] lg:text-[10px] xl:text-[12px] cursor-pointer">
                  {item.title}
                </li>
              </ul>
            );
          })}
        </div>

        <div className="flex_2 gap-12">
          <div className="hidden xl:flex flex_item_2 gap-4">
            <div className="flex_2  gap-2 ">
              <GiFallingStar size={20} />
              <p className="font-bold uppercase text-[12px]">Sponsor</p>
            </div>

            <div className="flex_2 gap-2">
              <GiFallingStar size={20} />
              <p className="font-bold uppercase text-[12px]">Forum</p>
            </div>
          </div>

          <div className="hidden xl:flex">
            <CiGlobe size={20} />
          </div>

          <div className="flex">
            <button className="flex_2 gap-2 bg-[red] p-[10px] uppercase font-bold text-[12px] rounded-[4px]">
              <FiUser size={20} />
              My Account
            </button>
          </div>
        </div>
      </section>

      <nav className="text-white lg:hidden">
        <div className="flex_2 justify-between mx-8">
          <IoSearch size={30} />
          <img src={logo} alt="logo" className="w-[5.5rem]" />
          <FaBars size={30} onClick={handleToggle} />
        </div>
      </nav>

      {mobileToggle && (
        <>
          <div className="bg-black app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color={"white"}
              className="overlay__close "
              onClick={handleToggle}
            />

           <div className="pt-20">
{navItems1.map((item) => {
              return (
                <ul key={item.id} className=" app__navbar-smallscreen-links">
                  <li className="font-bold uppercase text-[8px] lg:text-[10px] xl:text-[12px] cursor-pointer">
                    {item.title}
                  </li>
                </ul>
              );
            })}
          

           </div>
            
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
