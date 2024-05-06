import React from "react";
import FooterOne from "./shared/FooterOne";
import FooterTwo from "./shared/FooterTwo";

const Footer = () => {
  return (
    <section className="lg:mx-28 mx-8">
      <FooterOne />
      <FooterTwo />

      <div className="flex justify-between py-16 text-white text-[16px]">
        <p>Policy | Term of use</p>

        <p>All rights Resrerved </p>
      </div>
    </section>
  );
};

export default Footer;
