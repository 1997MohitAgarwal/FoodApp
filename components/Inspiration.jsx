import React from "react"

export default function Inspiration(){
  return(
    <div className="p-4" >
     <p className="text-center text-3xl text-gray-700 textneww mb-4">Looking for Inspiration?</p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5" >
       <a href="https://realfood.tesco.com/recipes/bacon-and-mushroom-breakfast-hash.html" target="_blank">
      <div className="cursor-pointer">
      <img src="/bacon1.png"></img>
        <p className="text-center text-xl font-semibold mt-1 bg-green-500 py-2 marginset text-white">Bacon and mushroom hash</p>
      </div></a>
       <a href="https://realfood.tesco.com/recipes/bacon-and-spinach-spaghetti.html" target="_blank">
      <div className="cursor-pointer">
      <img src="/bacon2.png"></img>
        <p className="text-center text-xl font-semibold mt-1 bg-green-500 py-2 marginset text-white">Bacon and spinach spaghetti</p>
      </div></a>
      <a href="https://realfood.tesco.com/recipes/bacon-and-tomato-muffins.html" target="_blank">
        <div className="cursor-pointer">
      <img src="/bacon3.png"></img>
      <p className="text-center text-xl font-semibold mt-1 bg-green-500 py-2 marginset text-white">Bacon and tomato muffin</p>
      </div>
      </a>
    </div>
    </div>
  )
}