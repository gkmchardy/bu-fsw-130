import React from 'react'
import './App.css';
import Nav from './Nav'
import Footer from './Footer'
import ThemeApp from './week1/themeChanger/ThemeApp'
import EntertainmentApp from './week2/entertainmentListings/EntertainmentApp'
import UglyThingsApp from './week2/uglyThings/UglyThingsApp'
import TreatCounterApp from './week3/treatCounter/TreatCounterApp'
import StopWatchApp from './week3/stopWatch/StopWatchApp'
// import JSContactsApp from './week4/jsContacts/JSContactsApp'
import VideoLibraryApp from './week5/videoLibrary/VideoLibraryApp.js'
import ReactContactsApp from './week6/reactContacts/ReactContactsApp'
import MoviesAndTVApp from './week6/moviesAndTV/MoviesAndTVApp'
import CapstoneApp from './week7/capstone/CapstoneApp'
import Home from './Home'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/ThemeApp'><ThemeApp /></Route>
          <Route exact path='/EntertainmentApp'><EntertainmentApp /></Route>
          <Route exact path='/UglyThingsApp'><UglyThingsApp /></Route>
          <Route exact path='/StopWatchApp'><StopWatchApp /></Route>
          <Route exact path='/TreatCounterApp'><TreatCounterApp /></Route>
          {/* <Route exact path='/JSContactsApp'><JSContactsApp /></Route> */}
          <Route exact path='/VideoLibraryApp'><VideoLibraryApp /></Route>
          <Route exact path='/ReactContactsApp'><ReactContactsApp /></Route>
          <Route exact path='/MoviesAndTVApp'><MoviesAndTVApp /></Route>
          <Route exact path='/CapstoneApp'><CapstoneApp /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App