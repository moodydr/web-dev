import owner from './data/profile.json';


const profile = (state = owner, action) => {
    switch (action.type){
        case 'fetch-Profile':
            return(action.profile);
        case 'save-edit':
            return({
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                bio: action.bio,
                bannerPicture: action.bannerPicture,
                profilePicture: action.profilePicture,
                location: action.location,
                website: action.website,
                dateOfBirth: action.dateOfBirth
            });
        case 'exit-edit':
            return (state);

        default:
            return(state);

    }
}

export default profile;