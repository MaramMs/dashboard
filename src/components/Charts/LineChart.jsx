import {
  ChartComponent,
  DateTime,
  Legend,
  LineSeries,
  SeriesDirective,
  Tooltip,
  Inject,
  SeriesCollectionDirective,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";

const LineChart = () => {

  const {currentMode} =useStateContext ();
  return (
    
      <ChartComponent
      id="line-chart"
        height="420px"
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        tooltip={{ enable: true }}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === 'Dark' ? '#33373e' : '#fff'}
      >
       <SeriesCollectionDirective >
       {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
       </SeriesCollectionDirective>

        <Inject services={[LineSeries, Legend, DateTime, Tooltip]} />
      </ChartComponent>
  
  );
};

export default LineChart;
