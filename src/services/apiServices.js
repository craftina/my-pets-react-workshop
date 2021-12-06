const url = 'http://softuni-custom-service.herokuapp.com/jsonstore'

export function getPets(){
    return fetch(`${url}/pets`)
    .then(res => res.json())
    .then(result => {
        const arrResult = Object.values(result);
         return arrResult;
        })
}