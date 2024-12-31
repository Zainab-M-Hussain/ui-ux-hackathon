import React from "react";
const Subscribe = () =>{
    return(
       <div className="bg-[#ffffff] ">
        <h1 className="text-center text-4xl font-bold mt-10">Or Subscribe To The NewsLetter</h1>
        <div className="flex justify-center mt-10 gap-8 " >
        <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            /> 
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Send
                </button>
        </div>
        <h1 className="text-center text-4xl font-bold mt-10">Follow Products And Discounts On Instagram</h1>
        <div className="flex gap-14 w-[100%]  ml-44 mt-10 mb-10 ">
        <img src="./images/desk chair.png" alt="" className="w-24 h-24" />
        <img src="./images/fp1.png" alt="" className="w-24 h-24"/>
        <img src="./images/fp2.png" alt="" className="w-24 h-24"/>
        <img src="./images/fp4.png" alt="" className="w-24 h-24"/>
        <img src="./images/wooden chair.png" alt="" className="w-24 h-24"/>
        <img src="./images/wingchair.png" alt="" className="w-24 h-24"/>
       </div>
       </div>
    )
}
export default Subscribe;