import {
  ChartComponent,
  DateTime,
  Legend,
  SplineAreaSeries,
  SeriesDirective,
  Inject,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";

const Area = () => {

  const {currentMode} =useStateContext ();
  return (
      <div  className="m-4 md:m-10 mt-24  p-10   rounded-3xl bg-white  dark:bg-secondary-dark-bg">
      <Header category ='Chart' title='Inflation Rate'/>
      <ChartComponent
      id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}
      >
       <SeriesCollectionDirective >
       {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
       </SeriesCollectionDirective>

        <Inject services={[SplineAreaSeries, Legend, DateTime ]} />
      </ChartComponent>
      
    </div>
  
  );
};

export default Area;
