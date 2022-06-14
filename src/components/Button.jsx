import React from 'react'
import {useStateContext} from '../contexts/ContextProvider';

const Button = ({icon, bgHoverColor,color,text,bgColor,borderRaduis,size}) => {
  const {initailState,setIsClicked} = useStateContext();
  return (
   <button
     type='button'
     onClick={() =>setIsClicked(initailState)}
     style={{color,backgroundColor:bgColor,borderRadius:borderRaduis}}
     className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
   >
    {icon}{text}
     
   </button>
  )
}

export default Button

