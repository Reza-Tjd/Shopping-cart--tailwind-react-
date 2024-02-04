import React from "react";

export default function MainBody() {
  return (
    // all of the items
    <div className="grid grid-cols-2 px-60 child:text-center child:flex child:flex-col child:items-center ">
      {/* #1 */}
      <div>
        <h1 className=" text-xl font-semibold my-3">Album 1</h1>
        <img src="/images/Album-1.png" alt="" className="w-40 " />
        <div className="flex space-x-5 items-center my-2">
          <p className="font-medium ">5$</p>
          <button className="bg-blue-400 text-white rounded-md py-1 px-2 hover:bg-blue-500 transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
      {/* #2 */}
      <div>
        <h1 className=" text-xl font-semibold my-3">Album 2</h1>
        <img src="/images/Album-2.png" alt="" className="w-40 " />
        <div className="flex space-x-5 items-center my-2">
          <p className="font-medium ">50$</p>
          <button className="bg-blue-400 text-white rounded-md py-1 px-2 hover:bg-blue-500 transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
      {/* #3 */}
      <div>
        <h1 className=" text-xl font-semibold my-3">Album 3</h1>
        <img src="/images/Album-3.png" alt="" className="w-40 " />
        <div className="flex space-x-5 items-center my-2">
          <p className="font-medium ">17$</p>
          <button className="bg-blue-400 text-white rounded-md py-1 px-2 hover:bg-blue-500 transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
      {/* #4 */}
      <div>
        <h1 className=" text-xl font-semibold my-3">Album 4</h1>
        <img src="/images/Album-4.png" alt="" className="w-40 " />
        <div className="flex space-x-5 items-center my-2">
          <p className="font-medium ">25$</p>
          <button className="bg-blue-400 text-white rounded-md py-1 px-2 hover:bg-blue-500 transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
      {/* #5 */}
      <div>
        <h1 className=" text-xl font-semibold my-3">Album 5</h1>
        <img src="/images/Cofee.png" alt="" className="w-40 " />
        <div className="flex space-x-5 items-center my-2">
          <p className="font-medium ">12$</p>
          <button className="bg-blue-400 text-white rounded-md py-1 px-2 hover:bg-blue-500 transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
      {/* #6 */}
      <div>
        <h1 className=" text-xl font-semibold my-3">Album 6</h1>
        <img src="/images/Shirt.png" alt="" className="w-40 " />
        <div className="flex space-x-5 items-center my-2">
          <p className="font-medium ">15$</p>
          <button className="bg-blue-400 text-white rounded-md py-1 px-2 hover:bg-blue-500 transition-all">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
