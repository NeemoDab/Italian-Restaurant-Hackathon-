import FoodList from '../FoodList/FoodList.js'
import Footer from "../footer";
import "../app/App.css";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Menu = () => {
  return (
<div>
  <FoodList/>
</div>
  );
};

export default Menu;

