export const addMovie = (movieTitle) => {
    return {
      type: 'ADD_MOVIE',
      payload: movieTitle
    }
  }

  export const delMovie = (movieID) => {
    return {
      type: 'DEL_MOVIE',
      payload: movieID
    }
  }

  export const addShow = (showTitle) => {
    return {
      type: 'ADD_SHOW',
      payload: showTitle
    }
  }

  export const delShow = (showTitle) => {
    return {
      type: 'DEL_SHOW',
      payload: showTitle
    }
  }