const baseURL = 'http://localhost:9000/api/words/'

export const getWords = () => {
        return fetch(baseURL)
        .then(res => res.json())
    }
    

