import React from 'react'

var style = {
    backgroundColor: "gray",
    textAlign: "center",
    padding: "15px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "15px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '25px',
  height: '10px',
  width: '100%',
}

function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>&copy; 2021 SocratesOnline</div>
        </div>
    )
}

export default Footer