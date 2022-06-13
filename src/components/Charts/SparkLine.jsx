import React from "react";
import {
  Inject,
  SparklineComponent,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, type, width, height, color, data, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      type={type}
      width={width}
      height={height}
      fill={color}
      lineWidth={1}
      valueType="Numeric"
      dataSource={data}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: "${x} : ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
