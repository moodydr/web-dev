import React, {useEffect, useState} from "react";
//import {useSelector, useDispatch} from "react-redux";
import {useDispatch} from "react-redux";
import profileService from "../../../../services/profileService";


const EditProfile = (props) => {

    const [profile, setProfile] = useState({});
    useEffect(() =>
        profileService.fetchProfile()
            .then(profile => {setProfile(profile[0])}),[]);

    console.log('edit-user:', profile);

    const dispatch = useDispatch();

    const exitClickHandler = () => {
        setProfile({...profile});
        props.editShowComponent(true);
    }
    const saveClickHandler = () => {
        profileService.updateProfile(profile).then(() => setProfile({...profile}));
        console.log('showing profile');
        console.log(profile);
        props.editShowComponent(true);
    }

    const updateProfile= (field, value) => {
        setProfile({
            ...profile,
            [field]: value})
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
                <img src={profile.bannerPicture} alt="" className="img-fluid w-100 wd-banner"/>
                <img src={profile.profilePicture} alt="" className="wd-profile-pic img-fluid"/>
                <div className="wd-image-container">
                </div>
            </div>

            <form className="form-floating mt-3">
                <textarea className="form-control wd-bg-color-black bg-black"
                          id="firstName"
                          type="text"
                          placeholder="First"
                          defaultValue={profile.firstName}
                          onChange={(event) => updateProfile("firstName", event.target.value)}>
                </textarea>
                <label htmlFor="firstName">First Name</label>
            </form>

            <form className="form-floating mt-3">
                <textarea className="form-control wd-bg-color-black bg-black"
                          id="lastName"
                          type="text"
                          placeholder="Last"
                          defaultValue={profile.lastName}
                          onChange={(event) => updateProfile("lastName", event.target.value)}>
                </textarea>
                <label htmlFor="lastName">Last Name</label>
            </form>

            <form className="form-floating mt-3">
                <textarea className="form-control text-white bg-black"
                          id="bio"
                          type="text"
                          placeholder="Bio"
                          defaultValue={profile.bio}
                          onChange={(event) => updateProfile("bio", event.target.value)}>
                </textarea>
                <label htmlFor="bio">Bio</label>
            </form>

            <form className="form-floating mt-3">
                <textarea className="form-control text-white bg-black"
                          id="location"
                          type="text"
                          placeholder="Location"
                          defaultValue={profile.location}
                          onChange={(event) => updateProfile("location", event.target.value)}>
                </textarea>
                <label htmlFor="location">Location</label>
            </form>

            <form className="form-floating mt-3">
                <textarea className="form-control text-white bg-black"
                          id="website"
                          type="text"
                          placeholder="Website"
                          defaultValue={profile.website}
                          onChange={(event) => updateProfile("website", event.target.value)}>
                </textarea>
                <label htmlFor="website">Website</label>
            </form>

            <form className="form-floating mt-3">
                <input className="form-control text-white bg-black"
                       id="birthday"
                       type="date"
                       placeholder="Birthday"
                       defaultValue={profile.dateOfBirth}
                       onChange={(event) => updateProfile("dateOfBirth", event.target.value)}>
                </input>
                <label htmlFor="birthday">Birth Date</label>
            </form>




        </>

    );
}
export default EditProfile;
