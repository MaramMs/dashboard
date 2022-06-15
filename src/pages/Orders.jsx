import React from "react";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Inject,
  Resize,
  Sort,
  Filter,
  Page,
  ContextMenu,
  ExcelExport,
  PdfExport,
  Edit,
} from "@syncfusion/ej2-react-grids";


import { ordersData,ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {

  return (
 <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg"> 

  <Header category='Page' title='Orders' />
   <GridComponent 
   id='gridcomp'
    dataSource={ordersData}
    allowPaging={true}
    allowSorting={true}
 

    >
      <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>

      <Inject services={[Resize,Sort,Filter,ExcelExport,ContextMenu,PdfExport,Edit,Page]}/>
    </GridComponent>
    </div>
  );
};

export default Orders;
