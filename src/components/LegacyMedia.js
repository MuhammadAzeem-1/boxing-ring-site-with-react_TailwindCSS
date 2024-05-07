import React from "react";
import Button from "../components/shared/Button"

const LegacyMedia = () => {
  return (
    <section>
      <div className="flex justify-center items-center py-20">
        <div>
          <div className="flex justify-center items-center leading-3  flex-col sm:flex-row gap-8 uppercase xl:text-[170px] lg:text-[130px] sm:text-[100px] text-[55px] font-[800] text-white">
            <h2>Legacy</h2>
            <h2>Media</h2>
          </div>

          <div className="flex justify-center sm:pt-[32px] pt-[6px] ">
            <div className=" background-image-card-boxer rounded-3xl sm:w-[70%] w-[90%]">
              <div className="card-legacy-gradient  rounded-3xl">
                <div className="pl-[2rem] lg:pl-[5rem] sm:pt-[30rem] pt-[27rem]">

                  <h3 className="uppercase text-[20px] font-bold text-[wheat] mb-4">This Week in 1989</h3>
                  <h2 className="uppercase text-[20px] font-[700] text-white">
                    Muhammad Ali wins 3 grans slam titles in a row despite
                    injery.
                  </h2>
                  <p className="text-[gray] text-[12px] mb-4">4 months ago</p>

                  <Button text="explore in legacy media" rounded="rounded-xl"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegacyMedia;
