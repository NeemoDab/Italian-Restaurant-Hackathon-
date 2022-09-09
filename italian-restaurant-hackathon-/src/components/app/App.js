import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "../../Food/Food";
import Layout from "../Pages/Landingpage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
      <Food />
    </BrowserRouter>
  );
}
