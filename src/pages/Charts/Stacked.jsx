import React from 'react'
import  { Header,StackedChart } from '../../components'

const Stacked = () => {
  return (
    <div  className="m-4 md:m-10 mt-24  p-10   rounded-3xl bg-white  dark:bg-secondary-dark-bg">
      <Header category="Stacked" title="Revenue Breakdown"/>
    <div className='w-full'>
    <StackedChart />
    </div>
    </div>
  )
}

export default Stacked
