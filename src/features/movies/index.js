import React from 'react';
import { MovieList, MovieDetails, SearchBar } from './components';
import Loading from '../../components/utils/Loading';

export default (props) => {
    return (
        <>
            <SearchBar updateMovies={props.updateMovies} />
            {props.loaded ? (
                <div className="d-flex flex-row flex-fill pt-4 p-2">
                    <MovieList
                        movies={props.movies}
                        updatedSelectedMovie={props.updatedSelectedMovie}
                        favorites={props.favorites.map(f => f.title)}
                        addFavorite={props.addFavorite}
                        removeFavorite={props.removeFavorite}
                    />
                    <MovieDetails
                        movie={props.movies[props.selectedMovie]}
                    />
                </div>
            ) : (
                    <Loading />
                )}
        </>
    )
}