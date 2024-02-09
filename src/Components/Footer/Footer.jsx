import React from "react";
import Social from "../Social";

export default function Footer({ social }) {
  return (
    <div className="bg-blue-400 flex items-center space-x-3 pl-96 h-20">
      <h2 className="text-white text-2xl font-semibold">GreenCome</h2>
      <Social social={social}></Social>
    </div>
  );
}
