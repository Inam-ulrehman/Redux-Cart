import { React } from 'react'
import CartContainer from './CartContainer'
import Navbar from './components/Navbar'
import { store } from './store'
import { Provider } from 'react-redux'
import Modal from './components/Modal'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <Modal />
      <CartContainer />
    </Provider>
  )
}

export default App
