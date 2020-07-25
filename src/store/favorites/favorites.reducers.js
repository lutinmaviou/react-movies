import * as actions from './favorites.actions';

export default (state = {
    data: [],
    isLoading: false,
    error: null
}, action) => {
    switch (action.type) {
        case actions.FETCH_FAVORITES_SUCCESS: {
            return {
                ...state,
                data: action.favorites,
                isLoading: false,
                error: null
            }
        }
        case actions.FETCH_FAVORITES_ERROR: {
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        }
        case actions.ADD_FAVORITE_SUCCESS:
        case actions.REMOVE_FAVORITE_SUCCESS: {
            return {
                ...state,
                data: action.favorites,
                error: null
            }
        }
        case actions.ADD_FAVORITE_ERROR:
        case actions.REMOVE_FAVORITE_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}