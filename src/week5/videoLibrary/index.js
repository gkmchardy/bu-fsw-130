const store = require("./Redux/index")
const {addMovie, deleteMovie, getMovies} = require("./Redux/movies")
const {addShow, deleteShow, getShows} = require("./Redux/tv")


store.dispatch(addMovie("The Princess Bride"))
store.dispatch(addMovie("Empire of the Sun"))
store.dispatch(addMovie("The Italian Job"))

store.dispatch(addShow("M*A*S*H"))
store.dispatch(addShow("Sherlock"))
store.dispatch(addShow("The West Wing"))

store.dispatch(deleteMovie("Empire of the Sun"))
store.dispatch(deleteShow("M*A*S*H"))

store.dispatch(getMovies())
store.dispatch(getShows())
