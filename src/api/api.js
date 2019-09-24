import axios from 'axios';

axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        console.log(response);
        console.log(response.data);
        this.url = response.data.message
    })
    .catch(function (err) {
        console.log(err);
    });

// function () {
//     return axios.get('https://dog.ceo/api/breeds/image/random')
// }

var host = 'https://dog.ceo';

export var dogs = () => {
    return axios.get(`${host}/api/breeds/image/random`)
};