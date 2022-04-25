const baseURL = 'http://localhost:9000/api/users/'


export const getUsers = () => {
        return fetch(baseURL)
        .then(res => res.json());
    };

export const getUser = (id) => {
        return fetch(baseURL + id) 
        .then(res => res.json())
    };

export const postUser = (payload) => {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    };

export const putUser = (id , payload) => {
        return fetch(baseURL + id, {
            method: 'PUT',
            body:JSON.stringify(payload),
            headers : {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    };

export const deleteUser = (id) => {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    };


