import React from 'react';
import { MovieList, MovieDetails, SearchBar } from './components';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import {
  moviesIsLoadingSelector,
  moviesListSelector,
  favoritesListNameSelector,
  moviesSelectedMovieSelector
} from '../../store/selectors';
import {
  fetchMovies,
  setSelectedMovie,
  tryAddFavorite,
  tryRemoveFavorite
} from '../../store/actions';

const Movies = (props) => {
  return (
    <>
      <SearchBar fetchMovies={props.fetchMovies} />
      {props.isLoading ? (
        <Loading />
      ) : (
          <div className="d-flex flex-row flex-fill pt-4 p-2">
            <MovieList
              movies={props.movies}
              updatedSelectedMovie={props.setSelectedMovie}
              favorites={props.favoritesListName}
              addFavorite={props.tryAddFavorite}
              removeFavorite={props.tryRemoveFavorite}
            />
            <MovieDetails
              movie={props.selectedMovie}
            />
          </div>
        )}
    </>
  )
}

export default connect(state => ({
  isLoading: moviesIsLoadingSelector(state),
  movies: moviesListSelector(state),
  favoritesListName: favoritesListNameSelector(state),
  selectedMovie: moviesSelectedMovieSelector(state)
}), {
  fetchMovies,
  setSelectedMovie,
  tryAddFavorite,
  tryRemoveFavorite
})(Movies);