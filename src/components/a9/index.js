import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";
import React from 'react';
import who from "../../reducers/who";
import tweets from "../../reducers/tweets";
import profile from "../../reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({tweets: tweets, who, profile});
const store = createStore(reducer);

const A9 = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Route path={["/", "/a9", "/a9/practice"]} exact={true}>
                        <Practice/>
                    </Route>
                    <Route path="/a9/twitter">
                        <Build/>
                    </Route>
                </div>
            </BrowserRouter>
        </Provider>
    );
};

export default A9;