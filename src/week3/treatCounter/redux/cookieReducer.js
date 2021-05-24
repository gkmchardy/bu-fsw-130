const EAT_COOKIE = 'EAT_COOKIE'

const initialState = { numOfCookies: 0 }

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case EAT_COOKIE: return {
      ...state,
      numOfCookies: state.numOfCookies + 1
    }
    default: return state
  }
}

export default cookieReducer