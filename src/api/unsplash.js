import axios from 'axios';

export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 727e6fd0ce8c2d1d2c7a9df3379e19b96a6d3e2e5f15207a5587f040b470d8bb'
        }
});