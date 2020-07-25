import apiFirebaseRequest from '../../config/api.firebase';

export const REQUEST_FAVORITES = 'request favorites';
export const FETCH_FAVORITES = 'fetch favorites';
export const FETCH_FAVORITES_SUCCESS = 'fetch favorites success';
export const FETCH_FAVORITES_ERROR = 'fetch favorites error';

export const TRY_ADD_FAVORITE = 'try add favorite';
export const ADD_FAVORITE_SUCCESS = 'add favorite success';
export const ADD_FAVORITE_ERROR = 'add favorite error';

export const TRY_REMOVE_FAVORITE = 'try remove favorite';
export const REMOVE_FAVORITE_SUCCESS = 'remove favorite success';
export const REMOVE_FAVORITE_ERROR = 'remove favorite error';

export const requestFavorites = () => ({
    type: REQUEST_FAVORITES
});

export const fetchFavoritesSuccess = favorites => ({
    type: FETCH_FAVORITES_SUCCESS,
    favorites
});

export const fetchFavoritesError = error => ({
    type: FETCH_FAVORITES_ERROR,
    error
});

export const fetchFavorites = () => dispatch => {
    dispatch(requestFavorites());
    return apiFirebaseRequest.fetchFavorites().then(
        favorites => dispatch(fetchFavoritesSuccess(favorites)),
        error => dispatch(fetchFavoritesError(error))
    );
}

export const addFavoriteSuccess = favorites => ({
    type: ADD_FAVORITE_SUCCESS,
    favorites
});

export const addFavoriteError = error => ({
    type: ADD_FAVORITE_ERROR,
    error
});

export const tryAddFavorite = movie => (dispatch, getState) => {
    const favorites = [...getState().favorites.data, movie];
    return apiFirebaseRequest.saveFavorites(favorites)
        .then(() => dispatch(addFavoriteSuccess(favorites)),
            error => dispatch(addFavoriteError(error))
        );
}

export const removeFavoriteSuccess = favorites => ({
    type: REMOVE_FAVORITE_SUCCESS,
    favorites
});

export const removeFavoriteError = error => ({
    type: REMOVE_FAVORITE_ERROR,
    error
});

export const tryRemoveFavorite = title => (dispatch, getState) => {
    const favorites = [...getState().favorites.data];
    const index = favorites.findIndex(f => f.title === title);
    favorites.splice(index, 1);
    return apiFirebaseRequest.saveFavorites(favorites)
        .then(() => dispatch(removeFavoriteSuccess(favorites)),
            error => dispatch(removeFavoriteError(error))
        );
}