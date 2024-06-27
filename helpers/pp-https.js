import axios from 'axios';

//todo concrete implementation, get information with await
export async function getAllStandardPronouns()
{
    try {
        const response = await axios.get('https://en.pronouns.page/api/pronouns')
        return response.data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
