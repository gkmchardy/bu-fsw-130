const DRINK_MILK = 'DRINK_MILK'

const initialState = { numOfMilks: 0 }

const MilkReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRINK_MILK: return {
      ...state,
      numOfMilks: state.numOfMilks + 1
    }
    default: return state
  }
}

export default MilkReducer