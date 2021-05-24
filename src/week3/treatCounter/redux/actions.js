export const eatCookie = (number) => {
    return {
      type: 'EAT_COOKIE',
      payload: number
    }
  }

  export const drinkMilk = (number) => {
    return {
      type: 'DRINK_MILK',
      payload: number
    }
  }