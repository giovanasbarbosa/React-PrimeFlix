//Base da url: https://api.themoviedb.org/3/
//URL da api: https://api.themoviedb.org/3/movie/now_playing?api_key=41f5c09d6cb68ac6e9200c45a737a06d

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;