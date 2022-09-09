import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Pages/Landingpage"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
