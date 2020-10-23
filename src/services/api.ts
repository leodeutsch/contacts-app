import axios from 'axios';

const api = axios.create({
    baseURL: 'https://yellow-turkey-55.loca.lt'
    //baseURL: 'http://10.0.0.7:3004'
});

export default api;

