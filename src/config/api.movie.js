import * as axios from 'axios';

export const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
});

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY3NWFiMWI5Y2RmMjZkZWUxYjQ4MDA0NTc5MjNhZCIsInN1YiI6IjVlZWY3ZmE3NmY2YTk5MDAzOGNlMGI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.llALCP7YeWkVCyn6lvk671uy2oXsTZrnOMOBJqojy2c';
    return req;
});

export const apiMovieMap = (m) => ({
    img: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
    title: m.title,
    details: `${m.release_date} | ${m.vote_average}/10 | ${m.vote_count}`,
    description: m.overview
});

export default {
    searchMovies: filter => {
        const query = '?' + Object.keys(filter).map(k => `${k}=${filter[k]}&`).join('');
        return apiMovie.get('/search/movie' + query)
            .then(response => response.data.results)
            .then(moviesApi => moviesApi.map(apiMovieMap));
    }

}
