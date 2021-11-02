const apiKey = "MvQHSni8ObxbNMsEpddRFm70mjx06vaV"
const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=panda&limit=5&offset=0&rating=g&lang=en`;

export default function getGifs({ keyword = {} }) {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const gifs = data.map(image => {
                const { id, title, images, username } = image;
                const { url } = images.original;
                return { id, title, url, username };
            });
            return gifs;
        });
};