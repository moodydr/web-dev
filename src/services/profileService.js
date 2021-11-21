const PROFILE_API = 'https://stormy-escarpment-82419.herokuapp.com/api/profile';
//const PROFILE_API = 'http://localhost:4000/api/profile';

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-Profile',
                profile
            })
        );


export const updateProfile = (dispatch, profile) =>
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    })

.then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'save-edit',
                profile
            })
        );

