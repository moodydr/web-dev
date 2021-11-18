import React from 'react';
import {Link} from "react-router-dom";

const Assignments = () => {
    return (
        <>
            <h1>React.js Assignments</h1>
            <li><Link to="/a6">Assignment 6</Link></li>
            <li><Link to="/a7">Assignment 7</Link></li>
            <li><Link to="/a8">Assignment 8</Link></li>
        </>
    );
};

export default Assignments;