
class CustomError extends Error{
    
    constructor(response, handleError, msg){
        response.json().then(data => {
            console.log(data)
            handleError(data.msg)})

        
        super(msg)
    }
}


export default CustomError;