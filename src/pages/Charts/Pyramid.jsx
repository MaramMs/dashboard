import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  PyramidSeries,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";
const Pyramid = () => {
  const { currentMode } = useStateContext();
  return (

    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
     <Header category="Pyramid" title="Food Comparison Chart"/>
<div className="w-full">
<AccumulationChartComponent
      id="pyramid-chart"
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373e" : "#fff"}
      legendSettings={{ background: "white" }}
    >
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={PyramidData}
          xName="x"
          yName="y"
          type='Pyramid'
          name="Food"
          width="45%"
          height="80%"
          neckHeight="15%"
          gapRatio={0.03}
          explode
          emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
    
          }}
        ></AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>

      <Inject
        services={[
          AccumulationTooltip,
          PyramidSeries,
          AccumulationLegend,
          AccumulationDataLabel,
        ]}
      />
    </AccumulationChartComponent>
</div>
    </div>
  );
};

export default Pyramid;
