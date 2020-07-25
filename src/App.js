import React, { Component, lazy, Suspense } from 'react';
import { Header } from './components'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { fetchFavorites } from './store/actions';
import { connect } from 'react-redux';

const LazyMovies = lazy(() => import(/* webpackChunkName: "Movies" */'./features/movies'));
const LazyFavorites = lazy(() => import(/* webpackChunkName: "Favorites" */'./features/favorites'));

class App extends Component {

  componentDidMount() {
    this.props.fetchFavorites();
  }

  render() {
    return (
      <div className="App d-flex flex-column" >
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/movies" component={LazyMovies} />
            <Route path="/favorites" component={LazyFavorites} />
            <Redirect to="/movies" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchFavorites })(App));
