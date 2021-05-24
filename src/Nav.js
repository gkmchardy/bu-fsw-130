import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Nav () {
    const linkStyle = { color:'black', textDecoration:'none', fontSize:"small" }
    return (
        <nav>
            <ul className="nav-links">
                <Link style={linkStyle} to='/Home'><li>HOME</li></Link>
                <Link style={linkStyle} to='/ThemeApp'><li>Theme Changer</li></Link>
                <Link style={linkStyle} to='/EntertainmentApp'><li>Entertainment Listings</li></Link>
                <Link style={linkStyle} to='/UglyThingsApp'><li>Ugly Things</li></Link>
                <Link style={linkStyle} to='/TreatCounterApp'><li>Treat Counter</li></Link>
                <Link style={linkStyle} to='/StopWatchApp'><li>Stopwatch</li></Link>
                {/* <Link style={linkStyle} to='/JSContactsApp'><li>Vanilla JS Contacts</li></Link> */}
                <Link style={linkStyle} to='/VideoLibraryApp'><li>Video Library</li></Link>
                <Link style={linkStyle} to='/ReactContactsApp'><li>React Contacts</li></Link>
                <Link style={linkStyle} to='/MoviesAndTVApp'><li>Movies & TV</li></Link>
                <Link style={linkStyle} to='/CapstoneApp'><li>Capstone</li></Link>
            </ul>
        </nav>
    )
}

export default Nav