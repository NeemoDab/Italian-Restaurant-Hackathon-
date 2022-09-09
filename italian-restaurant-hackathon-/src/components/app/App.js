import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Landingpage"
import Menu from "../Pages/Menu"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/menu" element={<Menu />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
