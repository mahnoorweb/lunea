// import"./App.css"
// import { Route, Routes } from "react-router-dom";

// import Navbar from "./Component/Navbar";

// import Home from "./Pages/Home";
// import Products from "./Pages/Products";
// import Catagories from "./Pages/Catagories";
// import ProductDetail from "./Pages/productDetail";
// import Cart from "./Pages/Cart";

// import Footer from "./Component/Footer";

// const App = () => {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/categories" element={<Catagories />} />

//         <Route path="/product/:id" element={<ProductDetail />} />

//         <Route path="/cart" element={<Cart />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// };

// export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Component/Navbar";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Catagories from "./Pages/Catagories";
import ProductDetail from "./Pages/productDetail";
import Cart from "./Pages/Cart";

import Footer from "./Component/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Catagories />} />

        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;