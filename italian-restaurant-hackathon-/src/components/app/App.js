
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Landingpage"
import Menu from "../Pages/Menu"
import Basket from "../Pages/Checkout";
import Checkout from "../Pages/CheckoutCont";
export default function App() {

  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/checkout" element={<Basket />} />
          <Route path="/checkoutcont" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
