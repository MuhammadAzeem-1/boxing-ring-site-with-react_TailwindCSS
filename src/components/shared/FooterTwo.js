import React from "react";
import { FaTiktok } from "react-icons/fa";

const FooterTwo = () => {
  return (
    <section className="footer grid lg:grid-cols-5 grid-cols-2 py-12 text-white sm:text-[14px] text-[12px] uppercase font-[600] gap-x-10 border-b-2 border-[gray]	">
      <div>
        <p>About us</p>
        <p>Shop</p>
        <p>Betting</p>
      </div>

      <div>
        <p>Sitemap</p>
        <p>news</p>
        <p>legacy media</p>
      </div>

      <div>
        <p>history of boxing</p>
        <p>forum</p>
        <p>become a sponsor</p>
      </div>

      <div>
        <p>register your gym</p>
        <p>ind a coach/gym</p>
        <p>adchoices</p>
      </div>

      <div>
        <p className="lg:text-[16px] text-[12px] lg:font-[600] font-[700] text-[red] uppercase">Social media channels</p>

        <div className="flex justify-end gap-4 pt-4">
          <button className="footer_items_logo">
            <FaTiktok size={25}/>
          </button>

          <button className="footer_items_logo">
            <FaTiktok size={25}/>
          </button>

          <button className="footer_items_logo">
            <FaTiktok size={25}/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FooterTwo;
