import { ColumnDirective, Inject } from "@syncfusion/ej2-react-charts";
import { GridComponent, ColumnsDirective,Search ,Page, Toolbar,Sort} from "@syncfusion/ej2-react-grids";
import React from "react";
import { Header } from "../components";
import { employeesGrid, employeesData } from "../data/dummy";

const Employees = () => {
  return (
    <div className="m-2 md:m-10  p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />

      <GridComponent
       dataSource={employeesData}
       toolbar={['Search']}
       width='auto'
       allowPaging
       allowSorting
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search,Page,Toolbar,Sort]}/>
      </GridComponent>
    </div>
  );
};

export default Employees;
