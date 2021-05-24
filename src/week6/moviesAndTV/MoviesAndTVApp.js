import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Movies from './Movies'
import TVShows from './TVShows'
import allReducers from './reducers'
import './MoviesAndTVApp.css'

const myStore = createStore(allReducers)

function MoviesAndTVApp() {
    return (
        <Router>
            <Provider store = { myStore }>
                <Nav />
                <div className='mtvContainer'>
                    <Switch>
                        <Route exact path='/Movies'><Movies /></Route>
                        <Route exact path='/TVShows'><TVShows /></Route>
                    </Switch>
                </div>
            </Provider>
        </Router>
    )
}

export default MoviesAndTVApp