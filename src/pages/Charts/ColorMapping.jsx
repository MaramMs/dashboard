import {
  ChartComponent,
  Legend,
  SeriesDirective,
  Inject,
  SeriesCollectionDirective,
  ColumnSeries,
  Category,
  Tooltip,
  RangeColorSettingDirective,
  RangeColorSettingsDirective,
} from "@syncfusion/ej2-react-charts";
import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  colorMappingData,
  rangeColorMapping,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";

const ColorMapping = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24  p-10   rounded-3xl bg-white  dark:bg-secondary-dark-bg">
      <Header
        category="Color Mappping"
        title="USA CLIMATE - WEATHER BY MONTH"
      />
      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          tooltip={{ enable: true }}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
          legendSettings={{ mode: "Range", background: "white" }}
        >
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>

          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>

          <Inject services={[ColumnSeries, Legend, Category, Tooltip]} />
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;
