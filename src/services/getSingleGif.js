import { API_KEY, API_URL } from './settings'

const fromApiResponseToGif = apiResponse => {
    const { data } = apiResponse
    const { id, title, images, username } = data;
    const { url } = images.fixed_width_downsampled;
    return { id, title, url, username };

}


export default function getSingleGif({ id }) {
    return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGif)
}