const initialState = {
    contactList: [],
    contacts: 
    {
        name: '',
        phone: '',
        email: ''
    }
  }
  
  function Reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: action.payload,
                contactList: [...state.contactList, action.payload]
            }
        case "DEL_CONTACT": {
        const updatedArr = state.contactList.filter( contact => contact.name !== action.payload.name ) 
            return {
                ...state,
                contactList: updatedArr
            }
        }
        default:
            return state
    }
  }

  export default Reducer