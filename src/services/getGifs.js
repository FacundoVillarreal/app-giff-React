import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse;
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { id, title, images, username } = image;
            const { url } = images.fixed_width_downsampled;
            return { id, title, url, username };
        });
        return gifs;
    }
    return [];
}

export default function getGifs({ keyword = {}, rating = 'g', page = 0 }) {
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=${page * 5}0&rating=${rating}&lang=en`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(fromApiResponseToGifs);
};