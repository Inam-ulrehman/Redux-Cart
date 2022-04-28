import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    isModalOpen: (state) => {
      state.isOpen = true
    },
    isModalClose: (state) => {
      state.isOpen = false
    },
  },
})
export const { isModalOpen, isModalClose } = modalSlice.actions

export default modalSlice.reducer
