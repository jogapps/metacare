const axios = require("axios");
const https = require("https");
const { BASE_URL } = require("./constants");

let headers = {
    'Content-Type': 'application/json;charset=utf8',
};

exports.axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers,
    validateStatus: (status) => {
        return true;
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
});