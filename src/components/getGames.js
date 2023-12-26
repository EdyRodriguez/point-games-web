import axios from 'axios';

export default function getGames() {
    return axios.get('https://point-games-api.vercel.app/getGames', {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        return response.data;
    })
    }