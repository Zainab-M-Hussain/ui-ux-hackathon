import React from 'react';
import Header from '../components/header';
import Header2 from '../components/header2';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Cart: React.FC = () => {
  return (
    <div className="cart">
        <Header/>
        <Header2/>
        <Navbar/>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Bag</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center bg-white p-4 rounded shadow">
            <img src="./images/fp1.png" alt="Library Stool Chair" className="w-20 h-20 mr-4" />
            <div>
              <h2 className="font-bold">Library Stool Chair</h2>
              <p>Ashen Slate/Cobalt Bliss</p>
              <p>Size: L | Quantity: 1</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-bold">$99</p>
              <button className="text-red-500 mt-2">Remove</button>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded shadow">
            <img src="./images/fp2.png" alt="Library Stool Chair" className="w-20 h-20 mr-4" />
            <div>
              <h2 className="font-bold">Library Stool Chair</h2>
              <p>Ashen Slate/Cobalt Bliss</p>
              <p>Size: L | Quantity: 1</p>
            </div>
            <div className="ml-auto text-right">
              <p className="font-bold">$99</p>
              <button className="text-red-500 mt-2">Remove</button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$198.00</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold mt-4">
            <span>Total</span>
            <span>$198.00</span>
          </div>
          <button className="mt-4 bg-purple-900 text-white w-full py-2 rounded">Member Checkout</button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Cart;
