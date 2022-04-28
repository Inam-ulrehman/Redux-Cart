import React from 'react'
import styled from 'styled-components'
import {
  removeOneItem,
  increaseAmount,
  decreaseAmount,
} from './features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const Cart = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <div className='cart'>
        <img className='img' src={img} alt='' />
        <div className='information'>
          <h4 className='margin'>{title}</h4>
          <p className='margin'>{price}</p>
          <button
            className='margin btn'
            onClick={() => dispatch(removeOneItem(id))}
          >
            Remove
          </button>
        </div>
        <div className='btn-container '>
          <button
            className='btn margin'
            onClick={() => dispatch(increaseAmount(id))}
          >
            +
          </button>
          <p className='margin '>{amount}</p>
          <button
            className='btn margin'
            onClick={() => {
              if (amount <= 1) {
                dispatch(removeOneItem(id))
                return
              }
              dispatch(decreaseAmount(id))
            }}
          >
            -
          </button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .cart {
    display: grid;
    grid-template-columns: 100px auto 80px;
    gap: 3rem;
    padding: 0.3rem;
    border-bottom: 2px solid var(--primary-2);
    box-shadow: var(--shadow-2);
    margin-bottom: 2rem;
  }
  .img {
    height: 100px;
    width: 100px;
  }
  .information {
  }
  .margin {
    margin: 0 auto;
  }
  .btn-container {
    margin: 0 auto;
  }
`

export default Cart
