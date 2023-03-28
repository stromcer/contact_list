export const getAgenda = (url, handler) => {

    return fetch(url)
    .then(res => res.json())
    .then(data => handler(data))
    .catch(err => err)
}



export const createContact = (url, body, handleOK, handleError) => {
    
    return fetch(url, {
        method :'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(body),
    })
    .then(res => res.json())
    .then(data => {
       if( data.msg){ 
        new Error(data)
        return}
        handleOK(data) }
        )
    .catch(e => handleError(e.msg))
}

export const updateContact = (url, id, body, handleOK, handleError) => {

    return fetch(`${url}${id}`, {
        method :'PUT',
        headers : { 
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(body),
    })
    .then(res => res.json())
    .then(data =>  data.msg ? new Error(data.msg) : handleOK(data))
    .catch(e => handleError(e))

}


export const deleteContact = (url, id, handleOK, handleError) => {
    fetch(`${url}${id}`, {
        method :'DELETE',
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then(res => handleOK())
    .catch(e => handleError(e))
}