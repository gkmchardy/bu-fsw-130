import React from 'react'
import { connect } from 'react-redux'
import { drinkMilk } from './redux/actions'

function Milk (props) {
  return (
    <div>
      <h3>Glasses of Milk: {props.numOfMilks}</h3>
      <button onClick={props.drinkMilk}>Drink another Class of Milk</button>
    </div>
  )
}

const mapStateToProps = state => {
  return { numOfMilks: state.milk.numOfMilks }
}

const mapDispatchToProps = dispatch => {
  return { drinkMilk: () => dispatch(drinkMilk()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Milk)