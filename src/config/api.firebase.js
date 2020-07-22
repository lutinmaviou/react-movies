import * as axios from 'axios';

const apiFirebase = axios.create({
    baseURL: 'https://movies-22c83.firebaseio.com/'
});

export default apiFirebase;