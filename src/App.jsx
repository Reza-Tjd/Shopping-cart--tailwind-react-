import React, { useState } from "react";
import Header from "./Components/Header";
import MainBody from "./Components/MainBody/MainBody";
import Cart from "./Components/ShoppingCart/Cart";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const dataCenter = [
    { id: 1, title: "Album-1", price: "$5 " },
    { id: 2, title: "Album-2", price: "$15" },
    { id: 3, title: "Album-3", price: "$25" },
    { id: 4, title: "Album-4", price: "$35" },
    { id: 5, title: "Album-5", price: "$45" },
    { id: 6, title: "Album-6", price: "$55" },
  ];

  const [adding, setAdding] = useState([]);

  const addTocart = (item) => {
    setAdding([...adding, item]);
  };

  const deleteItem = (id) => {
    const newItem = adding.filter((item) => {
      return item.id !== id;
    });
    setAdding(newItem);
  };

  const cleanItems = () => {
    setAdding([]);
  };

  return (
    <div>
      <Header></Header>
      <MainBody items={dataCenter} addTocart={addTocart}></MainBody>
      <Cart
        adding={adding}
        deleteItem={deleteItem}
        cleanItems={cleanItems}
      ></Cart>
      <Footer></Footer>
    </div>
  );
}
