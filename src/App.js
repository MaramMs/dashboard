import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent} from "@syncfusion/ej2-react-popups";
import {Navbar,Footer,Sidebar,ThemeSettings} from '././components';
import { Ecommerce,Kanban,Calendar,Employees,Customers,Editor,ColorPicker,Orders,Area,Bar,LineChart,Financial,ColorMapping,Stacked,Pyramid,Pie } from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";
const App = () => {
  const {activeMenu} = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-bg">
          <div className="fixed right-4 bottom-4" >
            <TooltipComponent content="Settings" position="Top">
              <button
                type="buttom"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: "blue", borderRadius:'50%'}}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
       {
        activeMenu ? (
          <div className="w-72 fixes sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secindery-dark-bg">
            <Sidebar />
          </div>
        )
       }

       <div className= {
  
         `
         dark:bg-main-bg bg-main-bg  min-h-screen w-full ${activeMenu} ? 'md:ml-72' : 'flex-2 '}
         `
        }>
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            <Navbar />
          </div>
         
       </div>

        </div>

        <div>
          <Routes> 
            {/* Dashborad*/}
            <Route path="/"  />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/*Pages */}
            <Route path="/order" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />
            
            {/* App */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts */}
            <Route path="/line" element={<LineChart />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<colorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />


            </Routes>
        </div>
      </BrowserRouter>  
    </div>
  );
};

export default App;
