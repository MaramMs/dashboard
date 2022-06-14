import React from "react";
import { MdOutlineCancel } from "react-icons/md";


import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import { Button } from ".";


const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className=" absolute top-16 md:right-52 right-5 bg-white p-8 rounded-lg w-96  nav-item dark:bg-[#42464d]">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semivold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="text-white text-xs  rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      <div className="mt-5">
        {chatData.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-b-1 border-color gap-5  p-3 leading-8 cursor-pointer"
          >
            <div>
              <img
                src={item.image}
                alt={item.message}
                className="h-10 w-10 rounded-full"
              />
              <span
                style={{ background: item.dotColor }}
                className="absolute  inline-flex rounded-full h-2 w-2 right-0 -top-1"
              />
            </div>

            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {item.desc}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          bgColor={currentColor}
          color="white"
          text="See all messages"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default Chat;


