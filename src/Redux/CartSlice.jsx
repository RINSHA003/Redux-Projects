import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk("cart/fetchUser", async (id) => {
    const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`);
    return response.data;
});

const INITIAL_STATE = {
    cartList: [],
    cartCount: 0,
    userDetail: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const itemExist = state.cartList.find((item) => item.id == action.payload.id);
            if (itemExist) {
                itemExist.count++;
            } else {
                state.cartList.push({
                    ...action.payload,
                    count: 1
                });
            }
            state.cartCount = state.cartList.reduce((total, item) => total + item.count, 0);
        },
        incrementCount: (state, action) => {
            const productID = action.payload;
            state.cartList.forEach((item) => {
                if (item?.id == productID) {
                    item.count++;
                }
            });
            state.cartCount = state.cartList.reduce((total, item) => total + item.count, 0);
        },
        decrementCount: (state, action) => {
            const productID = action.payload;
            state.cartList.forEach((item) => {
                if (item?.id == productID) {
                    item.count--;
                }
            });
            state.cartCount = state.cartList.reduce((total, item) => total + item.count, 0);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                console.log('loading true');
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                console.log('success');
                console.log(action)
                state.userDetail.push(action.payload)
                
            })
            .addCase(fetchUser.rejected, (state) => {
                console.log('end');
            });
    },
});

export const { incrementCount, decrementCount, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
