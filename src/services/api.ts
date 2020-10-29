import axios from 'axios';

const api = axios.create({
    baseURL: 'https://5f9b4738856f4c00168ba6f6.mockapi.io/api/v1'
});

export default api;

