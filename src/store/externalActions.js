export const getAgenda = (url, handler) => {

    return fetch(url)
    .then(res => res.json())
    .then(data => handler(data))
    .catch(err => err)
}


    