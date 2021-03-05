const axios = require('axios');

const RANDOM_NAME_API_HOST = process.env.RANDOM_NAME_API_HOST || 'localhost';
const RANDOM_NAME_API_PORT = process.env.RANDOM_NAME_API_PORT || 3000;

const API_URL = `http://${RANDOM_NAME_API_HOST}:${RANDOM_NAME_API_PORT}/api/random-name`;

const getRandomName = async () => {
    const response = await axios.get(API_URL);
    
    return response.data;
}

module.exports = {
    getRandomName,
}