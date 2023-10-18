import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
});

// Set the Authorization header if the token exists
const token = localStorage.getItem('accessToken');
if (token) {
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
});

export default api;
