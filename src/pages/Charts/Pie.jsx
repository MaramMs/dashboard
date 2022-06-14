import React from "react";

import { Header, PieChart } from "../../components";

const Pie = () => {
  return (
    <div className="m-4 md:m-10 mt-24  p-10   rounded-3xl bg-white  dark:bg-secondary-dark-bg">
      <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
    <PieChart />
    </div>
    </div>
  );
};

export default Pie;
