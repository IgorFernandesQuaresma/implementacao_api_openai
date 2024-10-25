import axios from 'axios'

const UrlAPi = 'http://localhost:3000/prompts/message'

export const makerequest = async (message) => {
    const { data } = await axios.get(UrlAPi, { params: { prompt: message.prompt } });
    return data;
};