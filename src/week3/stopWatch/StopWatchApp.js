import React from 'react'
import { Provider } from 'react-redux'
import Timer from './Timer'
import configureStore from './redux/store'
import initialState from './redux/initialState'

const store = configureStore(initialState)

function StopWatchApp() {
    return (
        <Provider store={store}>
            <Timer />
        </Provider>
    )
}

export default StopWatchApp
