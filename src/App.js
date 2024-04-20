// App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Product";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" exact element={<Products />} />
            <Route path="/products/:productId" exact element={<Product />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/cart" exact element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
