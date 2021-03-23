import React from 'react'
import { ThemeContextConsumer } from './ThemeContext.js'

function Navbar() {
    return (
        <ThemeContextConsumer>
        { context => (
                <nav className={`${context.theme}-theme`}>
                    <ul className='nav-links'>
                        <li>Sales</li>
                        <li>Service</li>
                        <li>Parts</li>
                        <li>About</li>
                    </ul>
                </nav>
            )}
        </ThemeContextConsumer>
    )    
}

export default Navbar