import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";
import { cartData, chatData } from "../data/dummy";
import { Button } from ".";
import { ChartAnnotation } from "@syncfusion/ej2-react-charts";

const Notification = () => {
  const { currentColor, setActiveMenu } = useStateContext();

  return (
    <div className=" absolute top-16 md:right-40 right-5 bg-white p-8 rounded-lg w-96  nav-item dark:bg-[#42464d]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semivold text-lg dark:text-gray-200">
            Notification
          </p>
          <button
            type="button"
            className="text-white text-xs  rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>
      </div>
      <div className="mt-5">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-b-1 border-color gap-5  p-3 leading-8"
          >
            <img
              src={item.image}
              alt={item.message}
              className="h-10 w-10 rounded-full"
            />

            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          bgColor={currentColor}
          color="white"
          text="See all notification"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default Notification;
