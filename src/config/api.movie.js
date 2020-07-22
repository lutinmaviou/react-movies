import * as axios from 'axios';

const apiMovie = axios.create({
    baseURL: 'https://api.themoviedb.org/4'
});

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGY3NWFiMWI5Y2RmMjZkZWUxYjQ4MDA0NTc5MjNhZCIsInN1YiI6IjVlZWY3ZmE3NmY2YTk5MDAzOGNlMGI0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.llALCP7YeWkVCyn6lvk671uy2oXsTZrnOMOBJqojy2c';
    return req;
});

export default apiMovie;

export const apiMovieMap = (m) => ({
    img: `https://image.tmdb.org/t/p/w500${m.poster_path}`,
    title: m.title,
    details: `${m.release_date} | ${m.vote_average}/10 | ${m.vote_count}`,
    description: m.overview
  });
