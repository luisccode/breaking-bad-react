import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api',
});

export default axiosClient;
