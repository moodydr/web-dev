import React, {useState} from "react";
import NavigationSidebar from "../NavigationSidebar";
import Profile from "./profile";
import EditProfile from "./editprofile";
import WhoToFollowList from "../WhoToFollowList";


const ProfileScreen = () => {
    let [showComponent, editShowComponent] = useState(true);

    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                {showComponent && <Profile editShowComponent = {editShowComponent} />}
                {!showComponent && <EditProfile editShowComponent = {editShowComponent} />}

            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ProfileScreen;