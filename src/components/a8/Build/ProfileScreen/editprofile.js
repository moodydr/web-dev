import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchProfile, updateProfile} from "../../../../services/profileService";

const selectAllProfile = (state) => state.profile;

const EditProfile = (props) => {
    const profile = useSelector(selectAllProfile);
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch), [dispatch]);

    let [firstName, editFirstName] = useState(profile.firstName);
    let [lastName, editLastName] = useState(profile.lastName);
    let [bio, editBio] = useState(profile.bio);
    let [bannerPicture] = useState(profile.bannerPicture);
    let [profilePicture] = useState(profile.profilePicture);
    let [location, editLocation] = useState(profile.location);
    let [website, editWebsite] = useState(profile.website);
    let [dateOfBirth, editBirth] = useState(profile.dateOfBirth);
    const profData = {firstName: firstName, lastName: lastName, bio: bio, bannerPicture: bannerPicture, profilePicture: profilePicture, location: location, website: website, dateOfBirth: dateOfBirth};

    const saveClickHandler = () => {
        updateProfile(dispatch, profData);
        props.editShowComponent(true)
        console.log(profData);
        console.log(location);
    };

    const exitClickHandler = () => {
        dispatch({
            type: 'exit-edit',
        });

        props.editShowComponent(true)
    };

    return(
        <>
            <div className="d-flex">
            <i className="fas fa-times wd-white p-3" onClick={exitClickHandler}></i>
            <div className="wd-white fw-bold ms-3 d-flex flex-grow-1 align-items-center">
                Edit Profile
            </div>
                <button className="btn btn-primary float-end mt-2 me-2 wd-button-white" onClick={saveClickHandler}>Save</button>
            </div>

            <div className="mt-2 row flex-container">
                <img src={bannerPicture} alt="" className="img-fluid w-100 wd-banner"/>
                <img src={profilePicture} alt="" className="wd-profile-pic img-fluid"/>
                <div className="wd-image-container">
                </div>
            </div>

            <form className="form-floating mt-3">
                <textarea className="form-control wd-bg-color-black bg-black"
                          id="firstName"
                          type="text"
                          placeholder="First"
                          value={firstName}
                          onChange={(event) => editFirstName(event.target.value)}>
                </textarea>
                <label htmlFor="firstName">First Name</label>
            </form>

            <form className="form-floating mt-3">
                <textarea className="form-control wd-bg-color-black bg-black"
                          id="lastName"
                          type="text"
                          placeholder="Last"
                          value={lastName}
                          onChange={(event) => editLastName(event.target.value)}>
                </textarea>
                <label htmlFor="lastName">Last Name</label>
            </form>

            <form className="form-floating mt-3">
                <textarea className="form-control text-white bg-black"
                id="bio"
                type="text"
                placeholder="Bio"
                value={bio}
                onChange={(event) => editBio(event.target.value)}>
                </textarea>
                <label htmlFor="bio">Bio</label>
            </form>

            <form className="form-floating mt-3">
                <textarea className="form-control text-white bg-black"
                          id="location"
                          type="text"
                          placeholder="Location"
                          value={location}
                          onChange={(event) => editLocation(event.target.value)}>
                </textarea>
                <label htmlFor="location">Location</label>
            </form>

            <form className="form-floating mt-3">
                <textarea className="form-control text-white bg-black"
                          id="website"
                          type="text"
                          placeholder="Website"
                          value={website}
                          onChange={(event) => editWebsite(event.target.value)}>
                </textarea>
                <label htmlFor="website">Website</label>
            </form>

            <form className="form-floating mt-3">
                <input className="form-control text-white bg-black"
                          id="birthday"
                          type="date"
                          placeholder="Birthday"
                          value={dateOfBirth}
                          onChange={(event) => editBirth(event.target.value)}>
                </input>
                <label htmlFor="birthday">Birth Date</label>
            </form>




            </>

    );
}
export default EditProfile;