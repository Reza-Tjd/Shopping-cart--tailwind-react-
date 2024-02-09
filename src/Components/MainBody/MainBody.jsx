import React, { useState } from "react";

export default function MainBody({ items, addTocart }) {
  const [nextId, setNextId] = useState(1);
  const addingHandler = (item) => {
    const newPart = { ...item, id: nextId };
    setNextId(nextId + 1);
    console.log(item);
    console.log(newPart);
    addTocart(newPart);
  };
  return (
    // all of the items
    <div className="grid grid-cols-2 px-60 child:text-center child:flex child:flex-col child:items-center ">
      {/* #1 */}

      {items.map((item) => (
        <div key={item.id}>
          <h1 className=" text-xl font-semibold my-3">{item.title}</h1>
          <img src={`/images/${item.title}.png`} alt="" className="w-40 " />
          <div className="flex space-x-5 items-center my-2">
            <p className="font-medium ">{item.price}</p>
            <button
              className="bg-blue-400 text-white rounded-md py-1 px-2 hover:bg-blue-500 transition-all"
              onClick={() => addingHandler(item)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
