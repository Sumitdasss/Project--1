import React, { useContext } from "react";

import CartProduct from "../CartProduct";
import { totalItem, totaPrice } from "../../Feturch/CartReducer";
import { CartContext } from "../../Feturch/CartProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div id="cart-part">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between mt-[100px]">
          <div className="">
            <div className="w-[952px] pb-[30px] bg-[#F6F6F7]">
              <div className="flex  h-[61px] items-center border-b-3 border-black/50">
                <p className="text-[18px] text-[#74787C] font-semibold pl-[200px]">
                  Products
                </p>
                <p className="text-[18px] text-[#74787C] font-semibold  pl-[250px]">
                  Price
                </p>
                <p className="text-[18px] text-[#74787C] font-semibold  pl-[110px]">
                  Quantity
                </p>
                <p className="text-[18px] text-[#74787C] font-semibold  pl-[65px]">
                  SubTotal
                </p>
              </div>
              <div className="cart-content">
                {cart.map((p) => (
                  <CartProduct key={p.id} Product={p}></CartProduct>
                ))}
              </div>

              <div className="flex mt-[30px]">
                <div className="ml-[30px]">
                  <input
                    type="text"
                    placeholder="Cupon Code"
                    className="w-[296px] h-[61px] rounded-lg bg-white border-3 border-black/50 focus:outline-none pl-[15px] placeholder:text-[#74787C]/50"
                  />
                  <button className="px-7.5 py-4 bg-white border-3 font-semibold rounded-lg border-black/50 text-[#222222] uppercase">
                    Apply Coupon
                  </button>
                  <Link to="/shop"
                    id="updateCart"
                    className="px-7.5 py-4 bg-red-500 font-semibold rounded-lg text-white uppercase ml-[205px]"
                  >
                    Update Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="w-[450px] bg-[#F9F9F9] p-8 border border-gray-100 rounded-sm font-sans">
              <div className="flex justify-between">
                <h2 className="text-[22px] font-bold text-[#222222] mb-6 pb-4 border-b border-gray-200">
                  Cart Totals
                </h2>
                <h2 className="text-[22px] font-bold text-[#222222] mb-6 pb-4 border-b border-gray-200">
                  {totalItem(cart)}
                </h2>
              </div>

              <div className="py-8 border-b border-gray-200">
                <div className="flex justify-between mb-4">
                  <span className="text-[16px] text-[#74787C] font-medium">
                    Shipping
                  </span>
                  <div className="text-right space-y-3">
                    <label className="flex items-center justify-end gap-3 cursor-pointer">
                      <span className="text-[16px] text-[#444444]">
                        Free Shipping
                      </span>
                      <input
                        type="radio"
                        name="shipping"
                        defaultChecked // 'checked' er bodle 'defaultChecked' use kora bhalo
                        className="w-4 h-4 accent-black"
                      />
                    </label>
                    <label className="flex items-center justify-end gap-3 cursor-pointer">
                      <span className="text-[16px] text-[#444444]">
                        Flat Rate
                      </span>
                      <input
                        type="radio"
                        name="shipping"
                        className="w-4 h-4 accent-black"
                      />
                    </label>
                    <label className="flex items-center justify-end gap-3 cursor-pointer">
                      <span className="text-[16px] text-[#444444]">
                        Local Pickup
                      </span>
                      <input
                        type="radio"
                        name="shipping"
                        className="w-4 h-4 accent-black"
                      />
                    </label>
                  </div>
                </div>

                <p className="text-[14px] text-[#74787C] text-right mt-4 leading-relaxed">
                  Shipping options will be updated <br></br> during checkout
                </p>

                <div className="text-right mt-2">
                  <button className="text-[15px] font-bold text-[#222222] hover:underline transition-all">
                    Calculate Shipping
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center py-8">
                <span className="text-[16px] text-[#74787C] font-medium">
                  Total
                </span>
                <span
                  id="totalnumber"
                  className="text-[22px] font-bold text-[#222222] total-price"
                >
                  {totaPrice(cart)}
                </span>
              </div>

              <button className="chekoutbtn w-full bg-[#EF4444] text-white py-4 text-[16px] font-bold uppercase tracking-wider rounded-md hover:bg-[#D93636] transition-all duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
