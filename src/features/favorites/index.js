import React from 'react';
import { FavoriteList } from './components';
import Loading from '../../components/utils/Loading';
import { connect } from 'react-redux';
import { favoritesListSelector, favoritesIsLoadingSelector } from '../../store/selectors';
import { tryRemoveFavorite } from '../../store/actions';

const Favorites = (props) => {
    return (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
            {props.isLoading ? (
                <Loading />
            ) : (
                    <div className="d-flex flex-row flex-fill pt-4 p-2">
                        <FavoriteList
                            favorites={props.favorites}
                            removeFavorite={props.tryRemoveFavorite}
                        />
                    </div>
                )}
        </div>
    )
}

export default connect(state => ({
    favorites: favoritesListSelector(state),
    isLoading: favoritesIsLoadingSelector(state)
}), {
    tryRemoveFavorite
})(Favorites);