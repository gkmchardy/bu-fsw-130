import React from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <h2>Devon's Auto {props.data} Switch {context.theme === "light" ? "Light" : "Dark"}</h2>
                </header>
            )}
        </ThemeContextConsumer>
    )
}

export default Header