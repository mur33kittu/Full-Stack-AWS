const axios = require('axios');

function getHeaders () {
    return axios.get('/api/headers').then(res =>  {
        return Promise.resolve(res);
    }).catch(err => {
        return Promise.reject(err);
    });
};

export const HeaderService = {
    getHeaders
}
