import React from 'react'
import Button from './Button'

const DesktopSectionOne = () => {
  return (
    <section className="flex flex-col gap-4  mt-28	">
            <div>
              <h2 className="sm:text-[100px] text-[52px] Zurich-Bold font-extrabold text-[white] uppercase leading-[45px] sm:leading-[60px]">
                JOSHUA <spna className="text-[22px]">vs</spna> <br></br>
                <span className="text-[red]">NGANNOU</span>
              </h2>
            </div>

            <div className="flex_4 sm:flex-row flex-col sm:items-center gap-4 pt-12">
              <div className=" px-4 py-2  text-[14px]  border border-[#d9b77c] rounded-[50px] text-white ">
                <p>WBO World Heavyweight championship</p>
              </div>

              <div className="px-4 py-2 text-[14px]  border border-[#d9b77c] rounded-[50px] text-white ">
                <p>WBC Diamond Title</p>
              </div>
            </div>

            <div className="pt-8 ">
              <p className="text-[#d9b77c] font-[800] sm:text-[16px] text-[14px]">
                MADISON SQUARE GARDEN, CHICAGI, US
              </p>

              <div>
                <p className="text-[white] font-[800] sm::text-[16px] text-[14px] pt-2">
                  TUESDAT APR 30 2024{" "}
                  <span className="h-4 w-[2px] text-[wheat] px-3">|</span>{" "}
                  16:9PST{" "}
                  <span className="h-4 w-[2px] text-[wheat] px-3">|</span>
                  19:9GST
                </p>
              </div>
            </div>

            <div className="flex_2 sm:gap-3 gap-4 flex-start lg:pt-8">
              <Button
                text={"Flight Details"}
                background="none"
                border={true}
                padding={4}
              />

              <Button
                text={"Buy Tickets"}
                border={false}
                padding={4}
                rounded={"rounded"}
              />
            </div>
          </section>
  )
}

export default DesktopSectionOne