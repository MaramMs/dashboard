import {
  ChartComponent,
  Legend,
  SeriesDirective,
  Inject,
  SeriesCollectionDirective,
  ColumnSeries,
  DataLabel,
  Category,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  barChartData,
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";

const Bar = () => {

  const {currentMode} =useStateContext ();
  return (
      <div className="m-4 md:m-10 mt-24  p-10   rounded-3xl bg-white  dark:bg-secondary-dark-bg">
      <Header category ='Chart' title='Inflation Rate'/>
      <ChartComponent
      dataSource={barChartData}
       id="charts"
        height="420px"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}
      >
       <SeriesCollectionDirective >
       {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
       </SeriesCollectionDirective>

        <Inject services={[ColumnSeries, Legend, DataLabel,Category,Tooltip ]} />
      </ChartComponent>
      
    </div>
  
  );
};

export default Bar;
