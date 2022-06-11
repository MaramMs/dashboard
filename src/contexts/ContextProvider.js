import React, {useContext,useState,createContext}from "react";

const StateContext = createContext();
const initailState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false
}
export const ContextProvider = ({children}) => {
    const [activeMenu,setActiveMenu] = useState(true);
    const [isClicked , setIsClicked] = useState(initailState);
    const [screenSize,setScreenSize] = useState(undefined);
     

    const handleClick =((clicked) =>(
       setIsClicked({...initailState , [clicked]:true})
    ))


    return (
        <StateContext.Provider
         value={{activeMenu,setActiveMenu,
         isClicked,handleClick,screenSize,
         setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);