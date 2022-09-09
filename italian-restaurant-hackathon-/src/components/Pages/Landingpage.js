import Footer from "../footer";
import "../app/App.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
<<<<<<< Updated upstream
    <body className="pageLayout">
    <Navbar/>
    <Outlet />  
=======
    <body className="App">
        <Navbar/>
        <Darkmode/>
        <Outlet /> 
>>>>>>> Stashed changes
    <Footer/>
  </body>
  );
};

export default Layout;