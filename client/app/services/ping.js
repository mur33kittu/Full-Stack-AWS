const axios = require('axios');

const getPing = async () => {
    return await axios.get('/api/ping').then(res =>  {
        return Promise.resolve(res);
    }).catch(err => {
        return Promise.reject(err);
    });
};

export const PingService = {
    getPing
}
