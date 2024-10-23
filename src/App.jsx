import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from './navbar/Navbar'
import FormGroup from "./Accordian/FormGroup";
// import SideLayout from "./SideLayout/SideLayout";

function App() {
 return (
  <div className="bg-slate-50">
    <Navbar/>
    <div className="bg-slate-50">
    <FormGroup/>
    {/* <SideLayout></SideLayout> */}
    </div>
  </div>
 )
}

export default App;
