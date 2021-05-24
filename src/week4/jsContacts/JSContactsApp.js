const redux = require('redux');

function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

function delContact(contact) {
    return {
        type: 'DEL_CONTACT',
        payload: contact
    }
}

const initialState = {
    contactList: [],
    contacts: 
    {
        name: '',
        phone: '',
        email: ''
    }

}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: action.payload,
                contactList: [...state.contactList, action.payload]
            }
        case 'DEL_CONTACT': {
            const updatedArr = state.contactList.filter( contact =>contact.name !== action.payload.name ) 
            return {
                ...state,
                contactList: updatedArr
            }
        }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

// ADD CONTACT
store.dispatch(addContact({name: 'Gordy Nesmith', phone: '334-533-3203', email: 'nesmith80@gmail.com'}))
store.dispatch(addContact({name: 'John Tatum', phone: '334-557-8989', email: 'skonob@gmail.com'}))
store.dispatch(addContact({name: 'Leigh Anne Payne', phone: '334-525-9897', email: 'akey_payne@gmail.com'}))
store.dispatch(addContact({name: 'Sheila Stout', phone: '334-987-5434', email: 'frenchie@gmail.com'}))
// DELETE CONTACT
store.dispatch(delContact({name: 'John Tatum', phone: '334-557-8989', email: 'skonob@gmail.com'}))
store.dispatch(delContact({name: 'Sheila Stout', phone: '334-987-5434', email: 'frenchie@gmail.com'}))
