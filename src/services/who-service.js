const URL = 'http://localhost:4000/rest/who';


export const findAllWho = () =>
    fetch(URL)
        .then(response => response.json());

const service = {
    findAllWho
};
export default service;

