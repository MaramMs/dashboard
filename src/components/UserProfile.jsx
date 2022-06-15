import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { userProfileData } from "../data/dummy";
import { Button } from ".";
import avatar from "../data/me.jpg";

const UserProfile = () => {
  const { currentColor} = useStateContext();

  return (
    <div className=" absolute top-16 md:right-52 right-5 bg-white p-8 rounded-lg w-96  nav-item dark:bg-[#42464d]">
      <div className="flex justify-between items-center">
        <p className="font-semivold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="uer-profile"
        />

        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Maram.I.Msabeh
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Adminstator
          </p>
          <p className="text-gray-500 text-sm font-semibold  dark:text-gray-400">
            maramismail2015@gmail.com
          </p>
        </div>
      </div>
   
      <div className="mt-5">
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-b-1 border-color gap-5  p-3 leading-8 cursor-pointer"
          >
        <button 
          type="button"
          style={{color:item.iconColor,background:item.bgBg}}
          className='text-xl rounded-lg p-3 hover:bg-light-gray'
        >
          {item.icon}
        </button>

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
          text="Logout"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
