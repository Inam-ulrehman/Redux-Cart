import React from 'react'
import Cart from './Cart'
import styled from 'styled-components'
import { removeAllItems } from './features/cart/cartSlice'

import { useSelector, useDispatch } from 'react-redux'

const CartContainer = () => {
  const { total, cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
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
            <button className='btn' onClick={() => dispatch(removeAllItems())}>
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

export default CartContainer
