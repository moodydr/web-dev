import React,{useEffect} from 'react';
import PostSummaryList from "../PostSummaryList/index";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfile} from "../../../../services/profileService";

const selectAllProfile = (state) => state.profile;

const Profile = (props) => {
    const prof = useSelector(selectAllProfile);
    console.log("ProfileComponent");
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch), [prof]);
    const editClickHandler = () => {
        props.editShowComponent(false)
    }
    return(
        <>
            <div className="row me-0">
                <div className="col-2">
                    <i className="mt-3 fas fa-arrow-left ms-3"></i>
                </div>
                <div className="col-10">
                    <div className="row fw-bold wd-white">{prof.firstName} {prof.lastName}</div>
                    <div className="row wd-light-font mb-1">5,916 Tweets</div>
                </div>
            </div>
            <div className="row flex-container">
                <img src={prof.bannerPicture} alt="" className="img-fluid w-100 wd-banner"/>
                <img src={prof.profilePicture} alt="" className="wd-profile-pic img-fluid" />
                <div className="wd-image-container">
                    <button type="button" class="btn btn-primary float-end mt-2 me-2 wd-button-black" onClick={editClickHandler}>Edit Profile</button>
                </div>
            </div>
            <div className="row">
                <span className="fw-bold wd-white mt-1 fs-5">{prof.firstName} {prof.lastName}</span>
                <span className="">@{prof.handle}</span>
            </div>
            <div className="row mt-2">
                <span className="wd-white">{prof.bio}</span>
            </div>
            <div className="row mt-2 mb-2">
                <span className="ms-2 wd-light-font"><i className="fas fa-map-marker-alt"></i> {prof.location} <i
                    className="ms-2 fas fa-birthday-cake"></i> Born on {prof.dateOfBirth} <i className="ms-2 far fa-calendar-alt"></i> Joined {prof.dateJoined}</span>

            </div>
            <div className="row mt-2 mb-2">
                <span className="wd-light-font"><span className="fw-bold wd-white"> {prof.followingCount} </span> Following<span className="ms-2 fw-bold wd-white"> {prof.followersCount} </span> Followers</span>
            </div>


            {PostSummaryList()}
        </>
    );
}
export default Profile;
