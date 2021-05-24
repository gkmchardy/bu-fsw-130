import React from 'react'
import { connect } from 'react-redux'
import { eatCookie } from './redux/actions'

function Cookies (props) {
  return (
    <div>
      <h3>Number of Oreos: {props.numOfCookies}</h3>
      <button onClick={props.eatCookie}>Eat Another Oreo</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {numOfCookies: state.cookie.numOfCookies}
}

const mapDispatchToProps = dispatch => {
  return {eatCookie: () => dispatch(eatCookie())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Cookies)