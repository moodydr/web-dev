import React from "react";
import {Link} from "react-router-dom";
import APIExamples from "./APIExamples";


const Practice = () => {
    return(
        <>
            <h1>A8 Practice</h1>
            <Link to="/a8/twitter/home">Build</Link>
            <APIExamples/>
        </>
    )

};

export default Practice;