import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const fetchUser=createAsyncThunk("cart/fetchUser",async()=>{
    const responce= await axios.get("https://jsonplaceholder.typicode.com/users")
    return responce
})


const INITIAL_STATE={
    cartList:[],
    cartCount:0
}
const cartSlice=createSlice({
    name:'cart',
    initialState:INITIAL_STATE,
    reducers:{
        addToCart :(state,action)=>{
        //    state.cartCount=1
        //    console.log(action)
            const itemExist= state.cartList.find((item)=>item.id == action.payload.id)
            if(itemExist){
                state.cartList.forEach((item)=>{
                    if(item.id == action.payload.id){
                        item.count =1
                    }
                })
            }
            else{
                state.cartList.push({
                    ...action.payload,
                    count:1
                  })
            }
             
        },
        incrementCount:(state,action)=>{
        //    state.cartCount += 1
              const productID=action.payload
              state.cartList.forEach((item)=>{
                if(item?.id == productID){
                    item.count ++
                }
              })
        },
        decrementCount:(state,action)=>{
        //    state.cartCount -=1
              const productID=action.payload
              state.cartList.forEach((item)=>{
                if(item?.id == productID){
                    item.count--
                }
              })
        }
    }
})

export const {incrementCount,decrementCount,addToCart} = cartSlice.actions

export default cartSlice.reducer;