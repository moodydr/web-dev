import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {

    return (
        <>
            <div className="list-group">
                <Link to="/a7/"
                      className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/a7/twitter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline"> Home</span>
                </Link>
                <Link to="/a7/twitter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`} >
                    <i className="fas fa-hashtag"></i>
                    <span className="d-none d-xl-inline"> Explore</span></Link>
                <a id="notifications" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} href="#0">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline"> Notifications</span></a>
                <a id="messages" className={`list-group-item ${active === 'messages' ? 'active' : ''}`} href="#0">
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-xl-inline"> Messages</span></a>
                <a id="bookmarks" className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`}  href="#0">
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-xl-inline"> Bookmarks</span></a>
                <a id ="lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="#0">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-xl-inline"> Lists</span></a>
                <Link to="/a7/twitter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline"> Profile</span></Link>
                <a id="more" className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="#0">
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="d-none d-xl-inline"> More</span></a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            </>
    );
}


export default NavigationSidebar;
