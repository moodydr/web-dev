//let profile = require('../data/profile.json');
const dao = require('../data/db/profile/profile-dao');


module.exports = (app) => {

//    const getCurrentProfile = (req, res) => res.json(profile);

    const getProfile = (req, res) =>
        dao.getProfile()
            .then(profile => res.json(profile));

    // const updateCurrentProfile = (req, res) => {
    //     const newProf = {
    //         "firstName": req.body.firstName,
    //         "lastName": req.body.lastName,
    //         "handle": "jannunzi",
    //         "profilePicture": req.body.profilePicture,
    //         "bannerPicture": req.body.bannerPicture,
    //         "bio": req.body.bio,
    //         "website": "youtube.com/webdevtv",
    //         "location": req.body.location,
    //         "dateOfBirth": req.body.dateOfBirth,
    //         "dateJoined": "April 2009",
    //         "followingCount": "312",
    //         "followersCount": "180"
    //     };
    //     console.log(newProf);
    //     profile = newProf;
    //     res.json(newProf);
    // };

    // const updateCurrentProfile = (req, res) => {
    //     // const newProf = {
    //     //     "firstName": req.body.firstName,
    //     //     "lastName": req.body.lastName,
    //     //     "handle": "jannunzi",
    //     //     "profilePicture": req.body.profilePicture,
    //     //     "bannerPicture": req.body.bannerPicture,
    //     //     "bio": req.body.bio,
    //     //     "website": "youtube.com/webdevtv",
    //     //     "location": req.body.location,
    //     //     "dateOfBirth": req.body.dateOfBirth,
    //     //     "dateJoined": "April 2009",
    //     //     "followingCount": "312",
    //     //     "followersCount": "180"
    //     // };
    //     dao.updateCurrentProfile(req.params.id, req.body)
    //         .then(profile => res.json(profile))
    //
    // };

    const updateProfile = (req, res) =>{
        dao.updateProfile(req.params.id, req.body)
            .then(newProf => res.json(newProf));
    }

    // app.get('/api/profile', getCurrentProfile);
    // app.put('/api/profile', updateCurrentProfile);

    app.put('/rest/profile/:id', updateProfile);
    app.get('/rest/profile', getProfile);


};
