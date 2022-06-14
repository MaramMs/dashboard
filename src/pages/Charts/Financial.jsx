import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Category,
  Tooltip,
  Zoom,
  Crosshair,
  Logarithmic,
  DateTime,
} from "@syncfusion/ej2-react-charts";

import React from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import {
  financialChartData,
  FinancialPrimaryYAxis,
  FinancialPrimaryXAxis,
} from "../../data/dummy";
import { Header } from "../../components";

const date = new Date("2017", "1", "1");
function filterData(value) {
  if (value.x >= date) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterData);

const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24  p-10   rounded-3xl bg-white  dark:bg-secondary-dark-bg">
      <Header category="Financial" title="AAPLE Historical" />
      <ChartComponent
        id="charts"
        height="420px"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        tooltip={{ enable: true, shared: true }}
        chartArea={{ border: { width: 0 } }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
        legendSettings={{ visible: false }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
      >
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Hilo"
            low="low"
            high="high"
          ></SeriesDirective>
        </SeriesCollectionDirective>

        <Inject
          services={[
            HiloSeries,
            Tooltip,
            DateTime,
            Logarithmic,
            Crosshair,
            Zoom,
          ]}
        />
      </ChartComponent>
    </div>
  );
};

export default Financial;
