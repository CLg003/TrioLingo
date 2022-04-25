const baseURL = 'http://localhost:9000/api/words/'

const WordsService = {
    getWords() {
        return fetch(baseURL)
        .then(res => res.json())
    },
    
}

export default WordsService;