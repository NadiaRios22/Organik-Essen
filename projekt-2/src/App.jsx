import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Food from "./Components/Food";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Products from "./Components/Products";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Products />
        <Food />
        <Cart />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
