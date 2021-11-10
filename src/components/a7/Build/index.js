import React from "react";
import {Route} from "react-router-dom";
import './styles.css';
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/index";
import ProfileScreen from "./ProfileScreen";

const Build = () => {
    return(
        <div>
            <Route path={["/", "/a7/twitter/home"]}
                   exact={true} component={HomeScreen} />
            <Route path="/a7/twitter/explore"
                   exact={true} component={ExploreScreen} />
            <Route path="/a7/twitter/profile"
                   exact={true} component={ProfileScreen} />
        </div>
    )
};

export default Build;