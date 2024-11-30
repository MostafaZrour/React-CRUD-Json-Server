import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ProductList from "./pages/admin/ProductList";
import CreateProduct from "./pages/admin/CreateProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/admin/list" element={<ProductList />} />
          <Route path="/admin/create" element={<CreateProduct />} />
          <Route path="/admin/update/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}