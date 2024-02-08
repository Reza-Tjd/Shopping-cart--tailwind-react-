import React from "react";

export default function Cart({ deleteItem, adding, cleanItems }) {
  const deleteHandler = (id) => {
    deleteItem(id);
  };

  return (
    <div className="px-96 pb-12 ">
      {adding.length > 0 && (
        <>
          <h1 className="flex justify-center font-semibold text-2xl mt-5 pb-2">
            CART
          </h1>
          <div>
            <div className="flex justify-around font-medium">
              <div>Item</div>
              <div>Price</div>
              <div>Actions</div>
            </div>
            {adding.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between  child:border-t child:h-16 border-b border-black border-t "
              >
                <p className="flex items-center">
                  {" "}
                  <img
                    src={`/images/${item.title}.png`}
                    alt=""
                    className="w-14 mr-2 "
                  />
                  {item.title}
                </p>
                <p className="flex items-center mr-12">{item.price}</p>
                <button
                  onClick={() => deleteHandler(item.id)}
                  className="bg-red-500 rounded-md px-3 text-white"
                >
                  Remove
                </button>
              </div>
            ))}
            <div>
              <p> No.items: {adding.length}</p>
            </div>
          </div>
          {/* #button */}
          <div className="flex justify-center pt-8">
            <button
              className="bg-blue-400 text-white rounded-md px-2 py-1 hover:bg-blue-500 transition-all "
              onClick={() => {
                cleanItems();
              }}
            >
              Empty Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
