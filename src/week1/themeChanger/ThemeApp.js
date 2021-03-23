import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar.js'
import Home from './Home.js'
import Footer from './Footer.js'
import './ThemeApp.css'

import { ThemeContextProvider } from './ThemeContext.js'

function ThemeApp() {
    return (
        <ThemeContextProvider>
            <Navbar />
            <Home />
            <Footer />
        </ThemeContextProvider>
    )
}

export default ThemeApp