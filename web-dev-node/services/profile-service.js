let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => res.json(profile);

    const updateCurrentProfile = (req, res) => {
        const newProf = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "handle": "jannunzi",
            "profilePicture": "../../images/profpic.png",
            "bannerPicture": "../../images/header.jpg",
            "bio": req.body.bio,
            "website": "youtube.com/webdevtv",
            "location": req.location,
            "dateOfBirth": req.dateOfBirth,
            "dateJoined": "April 2009",
            "followingCount": "312",
            "followersCount": "180"
        };
        profile = newProf;
        res.json(newProf);
    };


    app.get('/api/profile', getCurrentProfile);
    app.put('/api/profile', updateCurrentProfile);



};
