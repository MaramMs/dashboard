import React from "react";
import {
  ColumnsDirective,
  GridComponent,
  ColumnDirective,
  Inject,
  Toolbar,
  Page,
  Sort,
  Edit,
  Selection,
  Filter
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
import { customersGrid, customersData } from "../data/dummy";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 rounded-3xl bg-white">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        toolbar={["Delete"]}
        allowPaging
        allowSorting
        editSettings={ { allowEditing: true, allowDeleting: true } }
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Toolbar, Page, Sort,Edit,Selection,Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
