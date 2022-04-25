const baseURL = 'http://localhost:9000/api/users/'

const UsersService = {
    getUsers() {
        return fetch(baseURL)
        .then(res => res.json())
    },

    getUser(id) {
        return fetch(baseURL + id) 
        .then(res => res.json())
    },

    postUser(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    putUser(id , payload) {
        return fetch(baseURL + id, {
            method: 'PUT',
            body:JSON.stringify(payload),
            headers : {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    },

    deleteUser(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
}

export default UsersService;