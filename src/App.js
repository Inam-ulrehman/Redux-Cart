import { React } from 'react'
import CartContainer from './CartContainer'
import Navbar from './components/Navbar'
import { store } from './store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <CartContainer />
    </Provider>
  )
}

export default App
