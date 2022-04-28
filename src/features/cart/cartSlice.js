import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
  cartItems: cartItems,
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
})

export const {
  removeAllItems,
  removeOneItem,
  increaseAmount,
  decreaseAmount,
  cartTotal,
} = cartSlice.actions

export default cartSlice.reducer
