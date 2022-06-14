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
const StackedChart = ({ width, height }) => {
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


