import Footer from "../footer";
import "../app/App.css";
import Navbar from "../Navbar/Navbar";
import CardSummary from "../Cards/CardSummary";
import image from './logo512.png';

const Layout = () => {
  return (
    <div className="App">
        <Navbar/>
    <Footer/>
  </div>
  );
};

export default Layout;