import React from 'react'
import Cart from './Cart'
import styled from 'styled-components'

import { isModalOpen } from './features/modal/modalSlice'

import { useSelector, useDispatch } from 'react-redux'

const CartContainer = () => {
  const { total, cartItems, amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  if (amount < 1) {
    return (
      <Wrapper1 className='empty-cart'>
        <div className='title'>
          <h1>Your cart is empty</h1>
          <p className='title'>please go back for shopping</p>
          <button className='btn'> back to shopping </button>
        </div>
      </Wrapper1>
    )
  }
  return (
    <Wrapper>
      <div className='cart-container'>
        <div className='title'>
          <h2>cart Items</h2>
        </div>
        <div className='items'>
          <div>
            {cartItems.map((item) => {
              return <Cart key={item.id} {...item} />
            })}
          </div>
          <div className='btn-container'>
            <button className='btn' onClick={() => dispatch(isModalOpen())}>
              Remove all
            </button>
          </div>
          <hr />
          <div className='footer'>
            <h5>Total price</h5>
            <p>Total : {total} $ </p>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  max-width: 600px;
  margin: auto;
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
  }
  .btn-container {
    padding: 1rem;
    text-align: center;
  }
`
const Wrapper1 = styled.div`
  padding: 2rem;
  display: grid;
  place-items: center;
`

export default CartContainer
