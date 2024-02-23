import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const userToken = localStorage.getItem('userToken');
function getGames() {
    return axios.get('https://point-games-api.vercel.app/games/getGames',{
        headers: {
            'Content-Type': 'application/json',
            "apikey": API_KEY
        }
    })
    .then(response => {
        return response.data;
    })
}

function validateUser(token) {
    return axios.post('https://point-games-api.vercel.app/users/validate', {
            "auth" : token
        }, {
        headers: {
            'Content-Type': 'application/json',
            "apikey": API_KEY
        },
    })
    .then(response => {
        return response.data;
    })
}

function getUserTokens(userName) {
    return axios.get(`https://point-games-api.vercel.app/users/getUserTokens?name=${userName}`, {
        headers: {
            'Content-Type': 'application/json',
            "apikey": API_KEY
        }
    })
    .then(response => {
        return response.data;
    })
}

function validateToken(token, usuario) {
    return axios.post('https://point-games-api.vercel.app/tokens/validarToken', {
            "token" : token,
            "usuario": usuario
        }, {
        headers: {
            'Content-Type': 'application/json',
            "apikey": API_KEY
        },
    })
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return error;
    }  )
}

function getTransactions() {
    return axios.get('https://point-games-api.vercel.app/compras/getTransacciones', {
        headers: {
            'Content-Type': 'application/json',
            "apikey": API_KEY
        }
    })
    .then(response => {
        const orderedData = response.data.sort((a, b) => {
            return new Date(b.fecha) - new Date(a.fecha);
        });
        return orderedData;
    })
}

function changeToken(usuario){
    return axios.post('https://point-games-api.vercel.app/tokens/canjearToken', {
        "usuario": usuario
    }, {
        headers: {
            'Content-Type': 'application/json',
            "apikey": API_KEY,
            "Authorization": userToken
        },
    })
    .then(response => {
        return response.data;
    })
}

function getUserGames(usuario){
    return axios.get(`https://point-games-api.vercel.app/users/getUserGames?usuario=${usuario}`, {
        headers: {
            'Content-Type': 'application/json',
            "apikey": API_KEY,
            "Authorization": userToken
        }
    })
    .then(response => {
        return response.data;
    })
}


export default { getGames, validateUser, getUserTokens, validateToken, getTransactions, changeToken, getUserGames };