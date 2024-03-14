import { createSlice } from "@reduxjs/toolkit";
const cartslice=createSlice(
    {
        name:'cart',
        initialState:
        {
            items:[]
        },
        reducers:{
            addItems:(state,action)=>{
                state.items.push(action.payload);
            },
            clearCart:(state)=>{
                state.items=[];
            },
            removeItems:(state)=>{
                state.items.pop();
            }
        }
    }
)

export const {addItems,removeItems,clearCart} = cartslice.actions;
export default cartslice.reducer;