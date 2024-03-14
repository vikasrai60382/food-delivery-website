import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cartSlices";



const store=configureStore(
    {
   reducer: {
        cart:cartslice,
    }
    }
)

export default store;