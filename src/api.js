import axios from 'axios';

export function getMovies(searchQuery) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e74e5453a1c967b8e36b8763d65f06b9&query=${searchQuery}`);
}