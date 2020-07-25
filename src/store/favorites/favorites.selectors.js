import { createSelector } from 'reselect';
import favorites from '../../features/favorites';

export const favoritesSelector = state => state.favorites;

export const favoritesListSelector = createSelector(
    [favoritesSelector],
    favorites => favorites.data
);

export const favoritesIsLoadingSelector = createSelector(
    [favoritesSelector],
    s => favorites.isLoading
)

export const favoritesListNameSelector = createSelector(
    [favoritesListSelector],
    favoritesData => favoritesData.map(f => f.title)
);