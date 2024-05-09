import React from "react";
import Button from "./shared/Button";
import { upcomingCard } from "../utils/Data";
import { CiCalendar } from "react-icons/ci";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import { DragDealer } from "../utils/DragDealer";

const Upcoming = () => {
  // NOTE: for drag by mouse
  // const dragState = React.useRef(new DragDealer());

  // const handleDrag =
  //   ({ scrollContainer }) =>
  //   (ev) =>
  //     dragState.current.dragMove(ev, (posDiff) => {
  //       if (scrollContainer.current) {
  //         scrollContainer.current.scrollLeft += posDiff;
  //       }
  //     });

  // const [selected, setSelected] = React.useState("");
  // const handleItemClick = (itemId) => () => {
  //   if (dragState.current.dragging) {
  //     return false;
  //   }
  //   setSelected(selected !== itemId ? itemId : "");
  // };

  return (
    <section className="py-24 lg:mx-[12rem] sm:mx-[6rem] mx-[2rem] ">
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="hidden uppercase sm:block font-[800] text-[60px] text-[red] leading-10">
          {" "}
          Upcoming Fig<span className="text-[gray]">hts</span>{" "}
        </h2>

        <h2 className="uppercase font-[400] sm:font-[600]  lg:text-[60px] text-[32px] text-white sm:tracking-[12px] tracking-[6px] pb-4 sm:pb-0">
          Clash of Titans
        </h2>

        <Button
          text={"View All Upcoming fights"}
          padding={8}
          border={false}
          rounded={"rounded-lg	"}
        />
      </div>

      <div
        className="flex sm:gap-10 gap-6 mt-16  overflow-hidden"
        //onMouseLeave={dragState.current.dragStop}
      >
        {/* <ScrollMenu
          LeftArrow={false}
          RightArrow={false}
          onWheel={onWheel}
          onMouseDown={() => dragState.current.dragStart}
          onMouseUp={() => dragState.current.dragStop}
          onMouseMove={handleDrag}
        ></ScrollMenu> */}
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


      </div>

      <div className="flex items-center justify-center pt-20">
        <div className="w-[8rem] h-1 bg-[red] ">.</div>
      </div>
    </section>
  );
};

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default Upcoming;
