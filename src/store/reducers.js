import movies from './movies/movies.reducers'
import favorites from './favorites/favorites.reducers'

/* {
    movies: {
        data: [],
        selectedMovies: 0,
        isLoading: false,
        error: null
    },
    favorites: {
        data: [],
        isLoading: false,
        error: null
    }
} */

export default {
    movies,   // ES6 = movies: movies
    favorites // ES6 = favorites: favorites
}
