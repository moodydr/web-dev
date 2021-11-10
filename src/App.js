import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import Assignments from "./components/AssignmentNav";
import A6 from "./components/a6";
import A7 from "./components/a7";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path ={["/"]} exact={true}>
                    <Assignments/>
                </Route>
                <Route path ="/a6" exact={true}>
                    <A6/>
                </Route>
                <Route path ="/a7" exact={true}>
                    <A7/>
                </Route>

            </div>
        </BrowserRouter>
    );
}
export default App;