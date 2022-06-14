import React from 'react'
import  { Header,LineChart } from '../../components'

const Line = () => {
  return (
    <div  className="m-4 md:m-10 mt-24  p-10   rounded-3xl bg-white  dark:bg-secondary-dark-bg">
      <Header category ='Chart' title='Inflation Rate'/>
      <LineChart />
    </div>
  )
}

export default Line
