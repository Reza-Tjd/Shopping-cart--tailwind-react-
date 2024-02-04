import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div>
      <div className="Header-bg text-white px-10 pt-2 pb-16">
        <ul className="flex space-x-2 border-b border-white/30 pb-2">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Store</li>
          </a>
          <a href="#">
            {" "}
            <li>About</li>
          </a>
        </ul>
        <br />
        <a href="#">
          <h2 className="flex justify-center text-4xl">GreenCome Shop</h2>
        </a>
      </div>
    </div>
  );
}
