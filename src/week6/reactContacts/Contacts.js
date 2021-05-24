import React from 'react'
import { connect } from 'react-redux'
import { addContact, delContact } from './redux/actions'

function Contacts (props) {
  return (
    <div>
      <h3></h3>
      <button onClick=''>Drink another Class of Milk</button>
    </div>
  )
}

// const mapStateToProps = state => {
//     return { numOfMilks: state.milk.numOfMilks }

// const mapDispatchToProps = dispatch => {
//     return { drinkMilk: () => dispatch(drinkMilk()) }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts)
export default Contacts