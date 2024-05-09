import React from 'react'
import { CiCalendar } from "react-icons/ci";
import Button from './Button';


const UpcommingCard = ({upcomingCard}) => {
  return (
    <>
     {upcomingCard.map((item) => (
          <div
            key={item.id}
            className="bg-[#242424] sm:h-[33.99rem] h-[32.15rem] background-image-card rounded-xl"
          >
            <div className=" card-gradient  flex flex-col w-[18rem]  sm:w-[25rem]  rounded-xl	">
              <button className="flex justify-end p-2">
                <CiCalendar className="bg-white rounded-md" size={20} />
              </button>

              <div className="bg-[#121212] mt-[15.25rem] flex_5 flex-col w-[18rem]  sm:w-[25rem] py-4">
                <h2 className="text-white uppercase sm:text-[28px] text-[22px]  font-[700] leading-10	">
                  {item.firstFighter} <span className="text-[22px]">VS</span>{" "}
                </h2>

                <h2 className="text-[#f92a24] uppercase sm:text-[28px] text-[22px] font-[700]">
                  {item.secondFighter}
                </h2>
              </div>

              <div className="flex_5 flex-col ">
                <p className="text-[#d9b77c]  upcomming_item">
                  {item.location}
                </p>

                <p className="text-white uppercase sm:text-[16px] text-[12px] font-[700] ">
                  {item.time}
                </p>

                <p className="text-[#d9b77c]  upcomming_item pt-3">
                  {item.type}
                </p>
              </div>

              <div className="flex_5 mt-4 w-full">
                <Button
                  text="Fight Details"
                  rounded={"rounded-lg"}
                  border={false}
                  padding={20}
                />
              </div>
              {/* */}
            </div>
          </div>
        ))}
    </>
  )
}

export default UpcommingCard