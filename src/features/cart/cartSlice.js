import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const url = 'https://course-api.com/react-useReducer-cart-project'

export const getCartItems = createAsyncThunk('cart/getCartItems', async () => {
  try {
    const resp = await axios(url)
    return resp.data
  } catch (error) {}
})

const initialState = {
  cartItems: [],
  total: 0,
  amount: 0,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeAllItems: (state) => {
      state.cartItems = []
    },
    removeOneItem: (state, action) => {
      const itemID = action.payload

      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemID
      })
    },
    increaseAmount: (state, action) => {
      const itemID = action.payload
      const newItem = state.cartItems.find((item) => item.id === itemID)

      newItem.amount = newItem.amount + 1
    },
    decreaseAmount: (state, action) => {
      const itemID = action.payload
      const newItem = state.cartItems.find((item) => item.id === itemID)

      newItem.amount = newItem.amount - 1
    },
    cartTotal: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.price * amount
      })
      state.amount = amount
      state.total = total.toFixed(2)
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log(action.payload)
      state.cartItems = action.payload
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = true
    },
  },
})

export const {
  removeAllItems,
  removeOneItem,
  increaseAmount,
  decreaseAmount,
  cartTotal,
} = cartSlice.actions

export default cartSlice.reducer
