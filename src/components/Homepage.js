import React from "react";
import Button from "./shared/Button";
import { PiCrownSimpleFill } from "react-icons/pi";
import image from "../assets/fighter1.png";
import homeImage from "../assets/fighterHome.png";
import Script from "./shared/Script";
import DesktopSectionOne from "./shared/DesktopSectionOne";
import DeskTopSectionTwo from "./shared/DeskTopSectionTwo";

// absolute inset-0 pl-[0.2rem] xl:pl-[34rem]  w-[70rem] h-[20rem] sm:h-[38rem] xl:h-[38rem] object-cover
const Homepage = () => {
  return (
    <>
      <div className="relative">
        <img
          src={homeImage}
          alt="background"
          className="absolute inset-0 pl-[0.2rem] xl:pl-[29rem]  w-[76rem] h-[20rem] sm:h-[38rem] xl:h-[38rem] object-cover"
        />

        <section className="relative background-image-home  flex_3 flex-col lg:flex-row    flex-1">
          <div className="script-side mt-[-640px] w-16 hidden lg:block">
            <Script overflow={false} />
          </div>

           {/* Home Page Left Section */}
          <DesktopSectionOne />
           {/* Home Page Right Section */}
          <DeskTopSectionTwo />

          <div className="script-side mt-[-640px] w-[60px] hidden lg:block">
            <Script overflow={false} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Homepage;
