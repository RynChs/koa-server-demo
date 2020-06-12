import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:9201';

export async function getClassName() {
    const res = await axios.get('/getClassName.json');
    return res.data;
}