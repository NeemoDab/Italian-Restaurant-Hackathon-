import Footer from "../footer";
import "../app/App.css";
import Navbar from "../Navbar/Navbar";
import Darkmode from "../Darkmode/Darkmode";

const Layout = () => {
  return (
    <div className="App">
        <Navbar/>
        <Darkmode/>
    <Footer/>
  </div>
  );
};

export default Layout;