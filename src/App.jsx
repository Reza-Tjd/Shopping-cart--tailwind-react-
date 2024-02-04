import React from "react";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody/MainBody";
import Cart from "./Components/ShoppingCart/Cart";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div>
      <Header></Header>
      <MainBody></MainBody>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}
