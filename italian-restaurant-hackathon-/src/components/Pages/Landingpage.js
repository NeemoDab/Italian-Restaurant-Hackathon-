import Footer from "../footer";
import "../app/App.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";


import Darkmode from "../Darkmode/Darkmode";

const Layout = () => {
  return (

    <body>
    <div className="App">
        <Navbar/>
        <Darkmode/>
        <Outlet /> 
    <Footer/>
    </div>
  </body>
  );
};

export default Layout;