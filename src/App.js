import { React, useEffect } from 'react'
import CartContainer from './CartContainer'
import Navbar from './components/Navbar'

import Modal from './components/Modal'
import { getCartItems } from './features/cart/cartSlice'

import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems())
  })
  return (
    <section>
      <Navbar />

      <Modal />
      <CartContainer />
    </section>
  )
}

export default App
