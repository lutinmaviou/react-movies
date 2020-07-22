import React, { Component } from 'react';
import { Header } from './components';
import Movies from './features/movies';
import Favorites from './features/favorites';
import apiMovie, { apiMovieMap } from './config/api.movie';
import apiFirebase from './config/api.firebase';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favorites: null
    }
  }

  updatedSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index
    });
  }

  componentDidMount() {
    apiMovie.get('/discover/movie')
      .then(response => response.data.results)
      .then(moviesApi => {
        const movies = moviesApi.map(apiMovieMap);
        this.updateMovies(movies);
      })
      .catch(err => console.log(err));

    apiFirebase.get('favorites.json')
      .then(response => {
        let favorites = response.data ? response.data : [];
        this.updateFavorites(favorites);
      });
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.favorites ? true : false
    });
  }

  updateFavorites = (favorites) => {
    this.setState({
      favorites,
      loaded: this.state.movies ? true : false
    });
  }

  addFavorite = (title) => {
    const favorites = this.state.favorites.slice();
    const movie = this.state.movies.find(m => m.title === title);
    favorites.push(movie);
    this.setState({
      favorites
    }, () => {
      this.saveFavorites();
    });
  }

  removeFavorite = (title) => {
    const favorites = this.state.favorites.slice();
    const index = this.state.favorites.findIndex(f => f.title === title);
    favorites.splice(index, 1);
    this.setState({
      favorites
    }, () => {
      this.saveFavorites();
    });
  }

  saveFavorites = () => {
    apiFirebase.put('favorites.json', this.state.favorites);
  }

  render() {
    return (
      <Router>
        <div className="App d-flex flex-column" >
          <Header />
          <Switch>
            <Route path="/movies" render={(props) => {
              return (
                <Movies
                  {...props}
                  loaded={this.state.loaded}
                  updateMovies={this.updateMovies}
                  updatedSelectedMovie={this.updatedSelectedMovie}
                  movies={this.state.movies}
                  selectedMovie={this.state.selectedMovie}
                  addFavorite={this.addFavorite}
                  removeFavorite={this.removeFavorite}
                  favorites={this.state.favorites}
                />
              )
            }} />
            <Route path="/favorites" render={(props) => {
              return (
                <Favorites
                  {...props}
                  loaded={this.state.loaded}
                  favorites={this.state.favorites}
                  removeFavorite={this.removeFavorite}
                />
              )
            }} />
            <Redirect to="/movies" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
