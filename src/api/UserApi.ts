import axios from 'axios';

const API_URL = 'https://randomuser.me/api'

export const getUserInfo = () => {
    return axios.get(API_URL)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('Error fetching user information:', error);
        });
};
