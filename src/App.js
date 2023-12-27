import "bootstrap/dist/css/bootstrap.css"
import "./pages/Products/ProductDetail.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage/Homepage"
import Products from "./pages/Products/Products"
import Navbar from "./components/Navbar/Navbar"
import ProductsDetail from "./pages/Products/ProductsDetail"
import ProductDetails from "./pages/Products/ProductsDetail"
import ProductsDelete from "./pages/Products/ProductsDelete"
import ProductAdd from "./pages/Products/ProductAdd"


// JSX => HTML + JS
// HTML'de keywordün ismini değiştirmek
// class => className
export default function App() {
  return <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/products/Delete/:id" element={<ProductsDelete/>}></Route>
        <Route path="/add" element={<ProductAdd/>}></Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  </>

}