import * as axios from 'axios';

export const apiFirebase = axios.create({
    baseURL: 'https://movies-22c83.firebaseio.com/'
});

export default {
    fetchFavorites: () => apiFirebase.get('favorites.json')
        .then(response => response.data ? response.data : []),
        saveFavorites: favorites => apiFirebase.put('favorites.json', favorites)
}