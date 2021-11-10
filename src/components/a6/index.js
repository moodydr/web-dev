import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import Practice from "./Practice";
import Build from "./Build";
import HomeScreen from "./Build/HomeScreen/HomeScreen";
import ExploreScreen from "./Build/ExploreScreen/ExploreScreen";
import React from 'react';

const A6 = () => {
    return(
        <>
            <BrowserRouter>
                <div className="container">
                    <Route path="/a6/hello" exact={true}>
                        <HelloWorld/>
                    </Route>
                    <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                        <Practice/>
                    </Route>
                    <Route path="/a6/build" exact={true}>
                        <Build/>
                    </Route>
                    <Route path="/a6/twitter/home" component={HomeScreen}/>
                    <Route path="/a6/twitter/explore" component={ExploreScreen}/>

                </div>
            </BrowserRouter>
            </>
    );
};

export default A6;