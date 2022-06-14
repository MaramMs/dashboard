import React, { useContext, useState, createContext } from "react";

const StateContext = createContext();
const initailState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initailState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentColor, setCurrentColor] = useState("#03c9d7");

  const setMode = (mode) => {
    setCurrentMode(mode);

    localStorage.setItem("themeMode", mode);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("themeColor", color);

    setThemeSettings(false);
  };

  const handleClick = (clicked) =>
    setIsClicked({ ...initailState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        screenSize,
        setIsClicked,
        setMode,
        setColor,
        setThemeSettings,
        themeSettings,
        currentMode,
        currentColor,
        setScreenSize,
        initailState
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
