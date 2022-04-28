import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { removeAllItems } from '../features/cart/cartSlice'
import { isModalClose } from '../features/modal/modalSlice'
const Modal = () => {
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  return (
    <Wrapper>
      {isOpen && (
        <div className='modal-box'>
          <div className='modal-content'>
            <h4 className='title'>Remove all items ?</h4>
            <div className='btn-container'>
              <button
                type='button'
                className='btn alert-danger'
                onClick={() => {
                  dispatch(isModalClose())
                  dispatch(removeAllItems())
                }}
              >
                Remove all
              </button>
              <button
                type='button'
                className='btn alert-success'
                onClick={() => dispatch(isModalClose())}
              >
                Back to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.article`
  .modal-box {
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    top: 400px;

    div {
      background-color: var(--white);
      height: 100px;
      width: 300px;
      border-radius: var(--borderRadius);
      box-shadow: var(--shadow-2);
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .btn {
      :hover {
        color: var(--white);
      }
    }
  }
`

export default Modal
