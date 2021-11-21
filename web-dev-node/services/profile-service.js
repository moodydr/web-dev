let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => res.json(profile);

    const updateCurrentProfile = (req, res) => {
        const newProf = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "handle": "jannunzi",
            "profilePicture": req.body.profilePicture,
            "bannerPicture": req.body.bannerPicture,
            "bio": req.body.bio,
            "website": "youtube.com/webdevtv",
            "location": req.body.location,
            "dateOfBirth": req.body.dateOfBirth,
            "dateJoined": "April 2009",
            "followingCount": "312",
            "followersCount": "180"
        };
        console.log(newProf);
        profile = newProf;
        res.json(newProf);
    };


    app.get('/api/profile', getCurrentProfile);
    app.put('/api/profile', updateCurrentProfile);



};
