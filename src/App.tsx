import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { PageMen, PageWomen, PageKids } from "./pages/CategoryPages";
import JordanPage from "./pages/JordanPage";
import SalePage from "./pages/SalePage";
import ProductDetail from "./pages/ProductDetail";
import ShopPage from "./pages/ShopPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<PageMen />} />
          <Route path="/women" element={<PageWomen />} />
          <Route path="/kids" element={<PageKids />} />
          <Route path="/jordan" element={<JordanPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<ShopPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
