import React from "react";
import {
  ChartComponent,
  Legend,
  Category,
  Tooltip,
  StackingColumnSeries,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const StackedChart = ({ width, height }) => {
  const {currentMode} = useStateContext();
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      chartArea={{ border: { width: 0 } }}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white" }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
    >
      <Inject services={[StackingColumnSeries, Legend, Category, Tooltip]} />

      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedChart;


