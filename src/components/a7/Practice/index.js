import React from "react";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";


const Practice = () => {
    return(
        <>
            <h1>A7 Practice</h1>
            <Link to="/a7/twitter/home">Build</Link>
            <ReduxExamples/>
        </>
    )

};

export default Practice;