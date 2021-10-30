import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem"
import TodoList from "./Todo/TodoList"


const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <TodoItem/>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/twitter/home">
                Build
            </Link>
        </>
    )

};

export default Practice;