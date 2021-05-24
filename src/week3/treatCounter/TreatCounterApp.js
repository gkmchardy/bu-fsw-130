import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Cookies from './Cookies'
import Milk from './Milk'

function TreatCounterApp () {
  return (
    <Provider store={store}>
      <div>
        <Cookies />
        <Milk />
      </div>
    </Provider>
  )
}

export default TreatCounterApp