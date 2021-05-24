const store = require("./Redux/index")

//movies
const {addMovie, deleteMovie, getMovies} = require("./Redux/movies")

//shows
const {addShow, deleteShow, getShows} = require("./Redux/tv")

//dispatch
store.dispatch(addMovie("A New Hope"))
store.dispatch(addMovie("Gangs Of New York"))
store.dispatch(addMovie("OldBoy"))

store.dispatch(addShow("Mandalorian"))
store.dispatch(addShow("Game Of Thrones"))
store.dispatch(addShow("The Wire"))

store.dispatch(deleteMovie("OldBoy"))
store.dispatch(deleteShow("Mandalorian"))

store.dispatch(getMovies())
store.dispatch(getShows())
