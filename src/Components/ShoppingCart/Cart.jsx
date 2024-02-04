import React from "react";

export default function Cart() {
  return (
    <div className="px-96 pb-12 ">
      <h1 className="flex justify-center font-semibold text-2xl mt-5 pb-2">
        CART
      </h1>
      <div className="flex child:border-b child:border-black justify-between child:w-32 child:pb-1 ">
        <div>Item</div>
        <div>Price</div>
        <div>Doing</div>
      </div>
      {/* #button */}
      <div className="flex justify-center pt-8">
        <button className="bg-blue-400 text-white rounded-md px-2 py-1 hover:bg-blue-500 transition-all ">
          Empty Cart
        </button>
      </div>
    </div>
  );
}
