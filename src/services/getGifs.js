import { API_KEY, API_URL } from "./settings"

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse;
    if (Array.isArray(data)) {
        const gifs = data.map(image => {
            const { id, title, images, username } = image;
            const { url } = images.original;
            return { id, title, url, username };
        });
        return gifs;
    }
    return [];
}

export default function getGifs({ keyword = {} }) {
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(fromApiResponseToGifs);
};