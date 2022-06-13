import React from 'react'

const Button = ({color,text,bgColor,borderRaduis,size}) => {
  return (
   <button
   type='button'
     style={{color,backgroundColor:bgColor,borderRadius:borderRaduis}}
     className={`text-${size} p-3 hover:drop-shadow-xl`}
   >
    {text}
     
   </button>
  )
}

export default Button