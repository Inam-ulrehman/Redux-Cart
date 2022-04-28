import { React, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { cartTotal } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const { amount, cartItems } = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cartTotal())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems])
  return (
    <>
      <Wrapper>
        <div>
          <h5 className='margin'>REDUX Tool Kit Cart</h5>
          <p className='margin'>Cart amount : {amount}</p>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.nav`
  background-color: var(--primary-1);
  padding: 1rem;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .margin {
    margin: 0;
  }
`

export default Navbar
