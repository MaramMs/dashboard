import React, { useEffect } from "react";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import {Cart,Notification,Chat,UserProfile} from ".";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/me.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent position="BottomCenter" content={title}>
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
        {icon}
      
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked,handleClick,setScreenSize,screenSize } =
    useStateContext();

    useEffect(()=>{
     const handleResize = () => {
      setScreenSize(window.innerWidth)
     }
     window.addEventListener("resize", handleResize)
     handleResize()
     
     window.removeEventListener("resize", handleResize)
    },[])

    useEffect(()=>{
      if(screenSize<=900){
        setActiveMenu(false)
      }else{
        setActiveMenu(true)

      }
    },[screenSize])
  return (
    <div className="flex justify-between p-2 relative md:mx-6">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        icon={<AiOutlineMenu />}
      />

      <div className="flex justify-between">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          icon={<FiShoppingCart />}
          color="blue"
        />

        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          icon={<BsChatLeft />}
          color="blue"
          dotColor="#03c9d7"
        />
        <NavButton
          title="Notification"
          customFunc={() => handleClick("notification")}
          icon={<RiNotification3Line />}
          color="blue"
          dotColor="#03c9d7"
        />

        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center p-1 gap-2 cursor-pointer
         hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} className="rounded-full w-8 h-8" />

            <p>
              <span className="text-gray-400 text-14">Hi,</span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                {" "}
                Maram
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

         {isClicked.cart && <Cart /> }

        {isClicked.chat && <Chat />}

        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} 

      </div>
      
      
    </div>
  );
};

export default Navbar;
