import { ColumnDirective } from "@syncfusion/ej2-react-charts";
import {
  ColumnsDirective,
  KanbanComponent,
} from "@syncfusion/ej2-react-kanban";
import React from "react";
import { Header } from "../components";
import { kanbanData, kanbanGrid } from "../data/dummy";

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white">
      <Header category="App" title="Kanban" />

      <KanbanComponent
      id='kanban'
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{contentField: "Summary",headerField:'id'}}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
