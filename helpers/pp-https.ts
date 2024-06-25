import axios from 'axios';

//todo concrete implementation
export function getMorphemes()
{
    axios.get('https://pronouns.page/api/pronouns')
        .then((response) => {
            const jsonResponse = response.data;
            const jsonArray = Object.values(jsonResponse);

            console.log(jsonResponse);
            console.log(jsonArray);
        })
        .catch((err) => {
            console.error(err);
        })
}
