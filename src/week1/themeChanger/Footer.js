import React from 'react'
import { ThemeContextConsumer } from './ThemeContext.js'

function Footer () {
        return (
            <ThemeContextConsumer>
                { context => (
                    <div className={`${context.theme}-footer-theme`}>
                        <p className={`${context.theme}-p-theme`}>&copy; SocratesOnline 2020</p>
                    </div>
                )}
            </ThemeContextConsumer>
        )    
}

export default Footer
  
