import Footer from "../footer";
import "../app/App.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (

    <body className="App">
        <Navbar/>
        <Darkmode/>
        <Outlet /> 
    <Footer/>
  </body>
  );
};

export default Layout;