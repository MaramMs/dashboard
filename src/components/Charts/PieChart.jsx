import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PieSeries,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const PieChart = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id="charts"
      height="full"
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373e" : "#fff"}
      legendSettings={{ visible: true, background: "white" }}
    >
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieChartData}
          xName="x"
          yName="y"
          type="Pie"
          name="Sale"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode={true}
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>

      <Inject
        services={[
          AccumulationTooltip,
          PieSeries,
          AccumulationLegend,
          AccumulationDataLabel,
        ]}
      />
    </AccumulationChartComponent>
  );
};

export default PieChart;
