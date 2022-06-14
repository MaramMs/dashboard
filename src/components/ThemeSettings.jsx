import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";


const ThemeSettings = () => {

  const {currentMode,setMode,themeSettings ,setTheme,setThemeSettings, currentColor,setCurrentColor,setColor} = useStateContext ()
  return (
    <div className="bg-half-transparent w-screen fixed top-0 right-0 nav-item  ">
      <div className="float-right bg-white h-screen dark:text-gray-200 dark:[#484b52] w-400 ">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button
            type="button"
            style={{ color: "rgba(153,171,180", borderRadius: "50%" }}
            onClick={() =>  setThemeSettings(false)}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="flex-col  border-t-1  border-color  p-4 ml-4">
          <p className="font-semibold text-lg">Theme Settings</p>

          <div className="mt-4">
            <input
              type="radio"
              id="light"
              onClick={(e) => setMode(e.target.value)}
              name="theme"
              value="Light"
              className="cursor-pointer"
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              {" "}
              Light{" "}
            </label>
          </div>

          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              onClick={(e) =>setMode(e.target.value)}
              name="theme"
              value="Dark"
              className="cursor-pointer"
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
              {" "}
              Dark{" "}
            </label>
          </div>
        </div>

        <div className="flex-col  border-t-1  border-color  p-4 ml-4">
          <p className="font-semibold text-lg">Color Settings</p>

          <div className="flex gap-3">
            {themeColors.map((color, index) => (
              <TooltipComponent
                key={index}
                position="TopCenter"
                content={color.name}
              >
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button
                    type="button"
                    onClick={() =>  setColor(color.color)}
                    className="rounded-full  h-10 w-10 cursor-pointer"
                    style={{ backgroundColor: color.color }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        color.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
