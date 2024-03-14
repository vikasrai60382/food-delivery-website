import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import React from "react";
import { clearCart } from "../utils/cartSlices.js";
// import store from "../utils/store";
const Cart=()=>
{
    const cartItems=useSelector(store=>store.cart.items);
    console.log(cartItems)
    // const n=cartItems.length;
    const dispatch=useDispatch();
    const clearcartbutton=()=>{
        dispatch(clearCart());
    }
    return(
        <div>
        <button className="flex  border bg-green-400 rounded-xl p-2 m-4" onClick={()=>{clearcartbutton()}}>Clear Cart</button>
        <div className="flex m-3  flex-wrap ">
           {cartItems.map((item, index) => (
                <FoodItem  key={index} {...item} />
      ))}
        </div>
        </div>
    );
    
}
export default Cart;