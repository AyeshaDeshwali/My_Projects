import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={
              <ShopCategory
                category="mens"
                banner="https://blog.daraz.pk/wp-content/uploads/2019/12/new_years_look_Products_Banner-1.png"
              />
            }
          ></Route>
          <Route
            path="/womens"
            element={
              <ShopCategory
                category="womens"
                banner="https://i.pinimg.com/736x/82/53/5e/82535eca42dee403c8ca773e28fa89bc.jpg"
              />
            }
          ></Route>
          <Route
            path="/kids"
            element={
              <ShopCategory
                category="kids"
                banner="https://www.shutterstock.com/image-vector/ad-banner-design-kids-clothes-260nw-2191568211.jpg"
              />
            }
          ></Route>
          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
